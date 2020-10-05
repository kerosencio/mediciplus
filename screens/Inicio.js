import * as React from 'react';
import { 
  Button, View, Text, SafeAreaView,
  StyleSheet,
  Image,ImageBackground,Dimensions,AsyncStorage  } from 'react-native';
import { PureComponent } from 'react';  


class InicioScreen extends PureComponent {
  
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount () {
    try {
      var userToken = await AsyncStorage.getItem("userToken");
      var usuarioId = await AsyncStorage.getItem("usuarioId");
  
      if (userToken !== null && usuarioId !== null) {
        var userData = {
          "usuarioId": usuarioId,
          "userToken": userToken
        };
      }
  
      this.setState({ data: userData });

    } catch (e) {      
      alert('Error al traer los datos de usuario:');
      console.log(e);
    }
  }


  render (){    

      console.log(this.state);
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
          
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.contenido}>               
              <Text
                style={styles.textoContenidoGrande}
                >
                Bienvenido {"\n"}       
              </Text>
              <Text
                style={styles.textoContenidoChico}
                >
                 {this.state.data.userToken}   
              </Text>
              </View>          
            </View>
    
            <View style={styles.viewFoot}>
              <Image 
                  style={styles.logoFoot}
                  resizeMode = 'cover'
                  source={require('../assets/images/logo_foot.png')}></Image>
            </View>
        </SafeAreaView>
        </ImageBackground>
      );
    
  }
}


const styles = StyleSheet.create({
  inicio: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-start',
    top: 0,
    //height: '70%',
    borderWidth: 0,
    borderColor: "#ccc"
  },
  contenido: {
    flex: 1, 
    alignItems: 'center',
    color: 'white',
    //justifyContent: "flex-start",
    height: '100%',

    //textAlignVertical:'center',
    justifyContent: 'center',
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
  }
});


export default InicioScreen;