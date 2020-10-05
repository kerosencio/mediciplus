import React, { Component } from 'react';
import { Button, 
  View, 
  Text, 
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions ,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  AsyncStorage 
} from 'react-native';
import { PureComponent } from 'react';
//import { StackActions, NavigationActions } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

function _LogOut(navigation){
  console.log("Logging out");
  AsyncStorage.clear() 
  .then(() => {
      navigation.navigate('SignInScreen')
  })
  .catch((err) => {
      console.log(err);
  })
}

class MembresiaDetalle extends PureComponent {
  constructor() {
    super();
    this.state = { 
      data: [],
      userData: [] 
    };
  }
  async componentDidMount() {

    //this._LogOut(this.props.navigation);
    AsyncStorage.clear();
    this.props.navigation.navigate('Inicio', { screen: 'SignIn' });
    

    try {
      var userTokenStorage = await AsyncStorage.getItem("userToken");
      var usuarioIdStorage = await AsyncStorage.getItem("usuarioId");
  
      if (userTokenStorage !== null && usuarioIdStorage !== null) {
        var userData = {
          "usuarioId": usuarioIdStorage,
          "userToken": userTokenStorage
        };
      }
  
      this.setState({ userData: userData });

    } catch (e) {
      throw error;
      console.log(e);
      console.log(53);
      this.logOut(navigation);
      alert('Error al traer los datos de usuario')
    }
    
    //console.log(this.props.route.params.membresiaId);

    if(this.state.userData.userToken===undefined)
    {
      console.log(e);
      console.log(63);
      
    }
    
    

    const id = this.props.route.params.membresiaId;

    let userToken = "Bearer "+this.state.userData.userToken;
    var headers = {              
      'Authorization': userToken,
      'Content-Type': 'application/json'                               
    };  

     fetch('https://stage.sistemainvictus.com/api.php/membresia/' + id, {
        method: 'GET',
        headers: headers
     })
     .then((response) => response.json())
     .then((responseJson) => {
        this.setState({
           data: responseJson
        })
     })
     .catch((error) => {
        //Proceso log out
        const navigation  = this.props.navigation;
        console.log(navigation);
        console.log("Logging out");
        AsyncStorage.clear() 
        .then(() => {
          //navigation.navigate('SignIn')
          navigation.navigate('Root', {
            screen: 'SignIn',
            initial: false,
          });
        })
        .catch((err) => {
            console.log(err);
        });

        console.error("Error al traer los datos MembresiaDetalle.js -----------",error);
     });
  }

  getParsedDate = (strDate) => {
    if(strDate!=null)
    {
      var strSplitDate = String(strDate).split(' ');
      var date = new Date(strSplitDate[0]);
      // alert(date);
      var dd = date.getDate();
      var mm = date.getMonth() + 1; //Enero es 0
    
      var yyyy = date.getFullYear();
      if (dd < 10) {
          dd = '0' + dd;
      }
      if (mm < 10) {
          mm = '0' + mm;
      }
      date =  dd + "-" + mm + "-" + yyyy;
      return date.toString();
    } else{
      return "";
    }
    
  }


  render() {
     const navigation  = this.props.navigation;
     const id = this.props.route.params.membresiaId;


     return (
      <ImageBackground
        source={require('../assets/images/fondo_color.png')}
        style={{height: null,
                width: Dimensions.get('window').width,
                resizeMode: "cover",
                overflow: "hidden",
                height: "100%",
                flex: 1}}>     
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1, padding: 16 }}>
            <View
              style={{
                //flex: 1,
                alignItems: 'flex-start',
                //justifyContent: 'center',
                flexDirection: 'column',
                alignItems: "center"

              }}>
              <Text 
                style={{
                  fontSize: 17,
                  textAlign: 'justify',
                  marginBottom: 5              
                }}>                      
              </Text>
              <Text 
                style={{
                  fontSize: 25,
                  textAlign: 'justify',
                  marginBottom: 5,
                  color: "#fff"              
                }}>
                {this.state.data.nombres} {this.state.data.apellidoPaterno} {this.state.data.apellidoMaterno}           
              </Text>
              <Text 
                style={{
                  fontSize: 17,
                  textAlign: 'justify',
                  marginBottom: 5, 
                  color: "#fff"                  
                }}>
                Vigencia*: {this.getParsedDate(this.state.data.fechaExpiracion)}           
              </Text>
              <Text 
                style={{
                  fontSize: 17,
                  textAlign: 'justify',
                  marginBottom: 5                
                }}>                      
              </Text>
              <Text 
                style={{
                  fontSize: 17,
                  textAlign: 'justify',
                  marginBottom: 5,
                  color: "#fff"                 
                }}>
                Número de membresía           
              </Text>
              <Text 
                style={{
                  fontSize: 23,
                  textAlign: 'justify',
                  marginBottom: 5,
                  color: "#fff"                 
                }}>
                {this.state.data.qr}   
              </Text>  
              <Text 
                style={{
                  fontSize: 17,
                  textAlign: 'justify',
                  marginBottom: 5,
                  color: "#fff"                 
                }}>                      
              </Text>
              <Text 
                style={{
                  fontSize: 17,
                  textAlign: 'justify',
                  marginBottom: 5,
                  color: "#fff"                 
                }}>
                Tipo Membresía           
              </Text>
              <Text 
                style={{
                  fontSize: 19,
                  textAlign: 'justify',
                  marginBottom: 5,
                  color: "#fff"                 
                }}>
                {this.state.data.nombre}           
              </Text>    

              <View style = {styles.viewTarjeta}>
                <Image 
                  style={styles.tarjeta}
                  resizeMode = 'cover'
                  source={require('../assets/images/tarjeta_protect.png')}></Image>
                  <Text style = {styles.textoTarjetaNombre}>{this.state.data.nombres} {this.state.data.apellidoPaterno} {this.state.data.apellidoMaterno}</Text>
                  <Text style = {styles.textoTarjetaEspacio}>{"\n"}</Text>
                  <Text style = {styles.textoTarjetaFecha}>Vigencia: {this.getParsedDate(this.state.data.fechaExpiracion)}</Text>
                  <Text style = {styles.textoTarjetaEspacio}>{"\n"}</Text>
                  <Text style = {styles.textoTarjetaCodigo}>Membresía: {this.state.data.qr}</Text>
                  
              </View>

              <TouchableOpacity 
                onPress={() => navigation.navigate('Cobertura',id)}
                style ={styles.botonCobertura}>
                <Text style={styles.textoBoton}>COBERTURA</Text> 
              </TouchableOpacity>

           
              <TouchableOpacity 
                onPress={() => navigation.navigate('Inicio')}
                style ={styles.botonInicio}>
                <Text style={styles.textoBoton}>INICIO</Text> 
              </TouchableOpacity>
            </View>        
          </ScrollView>
          <View style={styles.viewFoot}>  
                <Image 
                style={styles.logoFoot}
                resizeMode = 'cover'
                source={require('../assets/images/logo_foot.png')}></Image>
          </View>  
        </SafeAreaView>
      </ImageBackground>
     )
  }
}



/*<Button
                title="Cobertura"
                onPress={() => navigation.navigate('Cobertura',id)}
              />*/

const styles = StyleSheet.create({
  perfil: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-start',
    top: 0,
    //height: '70%',
    borderWidth: 0,
    borderColor: "#ccc"
  },
  viewHeader: {
    backgroundColor: '#003566',
    color: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  textHeader:
  {
    fontSize: 20,
    color: "#fff"
  },
  contenido: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 5,
    //borderColor: "#00F",
    height: "100%",    
  },
  viewFoot: {
    backgroundColor: '#003566',
    color: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  logoFoot: {
    position: 'absolute',
    justifyContent: 'flex-start',
  },
  botonCobertura: {    
    alignItems: 'center',
    textAlignVertical:'bottom',
    padding:10,
    marginTop: 10,
    height: 40,
    width:200,
    borderRadius:10,
    backgroundColor: '#2980b9'      
  },
  botonInicio: {    
    alignItems: 'center',
    textAlignVertical:'bottom',
    padding:10,
    marginTop: 10,
    height: 40,
    width:200,
    borderRadius:10,
    backgroundColor: '#2980b9'      
  },
  textoBoton: {
    color:'white'
   },
   viewTarjeta: {
    //position: 'absolute',
    width: '100%',
    justifyContent: 'flex-start',
    top: 0,
    //height: '70%',
    borderWidth: 0,
    borderColor: "#ccc"
  },
  tarjeta: {
    opacity: 0.9,
    top:0,
    //left:-108, 
    //height: "40%",
    //width: "100%",
    width: 380,
    height: 250
  },
  textoTarjetaNombre: {
    color:'white',
    position: "absolute",
    top: 100,
    left: 40,
    fontSize: 15
  },
  textoTarjetaEspacio: {
    color:'white',
    position: "absolute",
    top: 120,
    left: 40,
    fontSize: 15
  },  
  textoTarjetaFecha: {
    color:'white',
    position: "absolute",
    top: 125,
    left: 40,
    fontSize: 12
  },
  textoTarjetaCodigo: {
    color:'white',
    position: "absolute",
    top: 150,
    left: 40,
    fontSize: 12
  },
});


export default MembresiaDetalle;

/*import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';




const MembresiaDetalleScreen = ({ route, navigation }) => {
  const id = route.params;
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Membresia Detalle {id}
          </Text>
          <Button
            title="Inicio"
            onPress={() => navigation.navigate('Inicio')}
          />          
        </View>        
      </View>
    </SafeAreaView>
  );
}

export default MembresiaDetalleScreen;
*/