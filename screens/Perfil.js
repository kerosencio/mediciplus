import React, { Component } from 'react';
import { Button, 
  View, 
  Text, 
  SafeAreaView,
  ActivityIndicator,
  StyleSheet ,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  AsyncStorage  
} from 'react-native';
import { PureComponent } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

function _LogOut(){
  
}

class Perfil extends PureComponent {
    
 

  constructor() {
    super();
    this.state = { 
      data: [],
      userData: [] 
    };
  }
  

  async componentDidMount () {

      console.log(37);
      //obteniendo datos de usuario
      try {
        var userToken = await AsyncStorage.getItem("userToken");
        var usuarioId = await AsyncStorage.getItem("usuarioId");
    
        if (userToken !== null && usuarioId !== null) {
          var userData = {
            "usuarioId": usuarioId,
            "userToken": userToken
          };
        }
    
        this.setState({ userData: userData });
  
        //console.log(this.state.userData.userToken+ " "+ this.state.userData.usuarioId);
        if(this.state.userData.userToken!= undefined && this.state.userData.usuarioId!=undefined)
        {
            try {
                       
            let userToken = "Bearer "+this.state.userData.userToken;
            
            var headers = {              
              'Authorization': userToken,
              'Content-Type': 'application/json'
                               
            };                    
            fetch('https://stage.sistemainvictus.com/api.php/beneficiario/'+this.state.userData.usuarioId, {
              method: 'GET',
              headers: headers
            } 
            )
            .then((response) => response.json())
            .then((responseJson) => {
              if(responseJson.error == "invalid_request")
              {
                alert("Ocurrió un error: "+ responseJson.error_description);
              }
              this.setState({
                  data: responseJson.result
              })
            })
            .catch(
              (error) => {
                const navigation = this.props.navigation;
                console.log(error);
                //alert("Ocurrió un error al traer los datos de beneficiario.");
                _LogOut();
                //signOut;
                console.error("Error al traer los datos Perfil.js -----------",error);
              })                
          } catch (e) {        
            alert('Error al traer datos de beneficiario');
            console.log(e);
          }
        }
            

      } catch (e) {        
        //_LogOut();
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
        alert('Error al traer los datos de usuario:');
        console.log(e);
      }
      
      //const consultaBeneficiario = await 
      
  }


   render() {
      //console.log(this.data)
      const navigation  = this.props.navigation;
     
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
          <View style={styles.viewHeader}>  
              <Text
                style={styles.textHeader}>        
                Mi perfil        
              </Text>  
          </View>        
          <View style={styles.contenido}>                          
              <Text
              style={styles.textoContenidoGrande}>                
                {this.state.data.nombres} {this.state.data.apellidoPaterno} {this.state.data.apellidoMaterno}                          
                </Text>
              <Text 
                style={styles.textoContenidoChico}>
                Telefono: {this.state.data.telefono}                       
              </Text>
              <Text 
                style={styles.textoContenidoChico}>
                Celular: {this.state.data.telefonoCelular}                       
              </Text>
              <Text 
                style={styles.textoContenidoChico}>
                Correo: {this.state.data.email}                      
              </Text>
                                 
              <TouchableOpacity 
                onPress={() => navigation.navigate('Inicio')}
                style ={styles.botonInicio}>
                <Text style={styles.textoBoton}>INICIO</Text> 
              </TouchableOpacity> 
          </View>
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
    height: "100%"
  },
  textoContenidoGrande: {
    fontSize: 25,
    textAlign: 'justify',
    marginBottom: 10,
    color: "#fff"     
  },
  textoContenidoChico: {
    fontSize: 15,
    textAlign: 'justify',
    marginBottom: 10,
    color: "#fff"     
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
   }

});
export default Perfil;
/*<Ionicons name='ios-call' size={20} /> */
