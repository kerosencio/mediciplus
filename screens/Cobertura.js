import React, { Component } from 'react';
import { 
  Button, 
  View, 
  Text, 
  SafeAreaView,
  Image, 
  StyleSheet,
  TouchableOpacity, 
  AsyncStorage 
} from 'react-native';
import { PureComponent } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';


class Cobertura extends PureComponent {
  constructor() {
    super();
    this.state = { 
      data: [],
      userData: [] 
    };
  }
  async componentDidMount() {
    
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
      console.log(e);
      alert('Error al traer los datos de usuario')
    }


    const id = this.props.route.params;
    let userToken = "Bearer "+this.state.userData.userToken;
    var headers = {              
      'Authorization': userToken,
      'Content-Type': 'application/json'                               
    };  



     fetch('https://stage.sistemainvictus.com/api.php/membresiaCobertura/' + id, {
        method: 'GET',
        headers: headers
     })
     .then((response) => response.json())
     .then((responseJson) => {
       //console.log("campos de la cobertura",responseJson);
        this.setState({
           data: responseJson.resultados
        })
     })
     .catch((error) => {
        console.error("Error al traer los datos Cobertura.js -----------",error);
     });
  }
  renderItem = (data) => {

    return (
      <Text style={{color:"#fff"}}>{'\u2B24'} {data.item.beneficioNombre}</Text>
    );
  }
  render() {
     const navigation  = this.props.navigation;
     return (
        <SafeAreaView style={{ flex: 1 }}>
     <View style={{ flex: 1, padding: 16, backgroundColor: '#003B68' }}>
       <View
         style={{
           //flex: 1,
           alignItems: 'flex-start',
           //justifyContent: 'center',
           flexDirection: 'column',
           alignItems: "center"
         }}>
         <FlatList
            style={{margin: 40, }}
            data={this.state.data}
            renderItem={this.renderItem}
          />                
         <TouchableOpacity 
            onPress={() => navigation.navigate('Inicio')}
            style ={styles.botonInicio}>
            <Text style={styles.textoBoton}>INICIO</Text> 
          </TouchableOpacity>
                   
       </View>        
       
     </View>
     <View style={styles.viewFoot}>  
            <Image 
            style={styles.logoFoot}
            resizeMode = 'cover'
            source={require('../assets/images/logo_foot.png')}></Image>
      </View>  
   </SafeAreaView>
     )
  }
}

const styles = StyleSheet.create({

  contenido: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 5,
    //borderColor: "#00F",
    height: "100%",
    color: '#FFF'
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

export default Cobertura;

/*import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';




const CoberturaScreen = ({ route, navigation }) => {
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

export default CoberturaScreen;
*/