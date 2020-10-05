import * as React from 'react';
import { Button, View, Text, SafeAreaView, 
  StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

 

const ContactoScreen = ({ route, navigation }) => {
 
  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#003B68' }}>
      <View style={styles.viewHeader}>  
              <Text
                style={styles.textHeader}>        
                Contacto        
              </Text>  
          </View> 
      <View
        style={styles.contenido}>
          <TouchableOpacity            
            onPress={() => dialCall(5551306303)}
            >
            <Image  style={styles.imagenTelefono} source={require('../assets/images/telefono.png')}></Image> 
          </TouchableOpacity>
        <Text style={styles.textoContenidoGrande}>
              Orientación Médica  
        </Text>
        <Text style={styles.textoContenidoChico}>
              Las 24 horas del día los 365 días del año  
        </Text>   
        <Text style={styles.textoContenidoChicoBold}>
                (01) 55 5130-6303
        </Text>
        <Text>
             {"\n"}
        </Text> 
        <Text style={styles.textoContenidoGrandeEspacioReducido}>
              Orientación Emocional
        </Text>        
        <Text style={styles.textoContenidoGrande}>
              y Nutricional
        </Text>
        <Text style={styles.textoContenidoChico}>
              Lunes a viernes de 9:00 am a 6:00 pm 
        </Text>
        <Text style={styles.textoContenidoChico}>
              Sábados de 9:00 am a 2:00 pm 
        </Text>   
        <Text style={styles.textoContenidoChicoBold}>
              (01) 55 5130-6303
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
    </View>  
    </SafeAreaView> 
    
 )
}

export default ContactoScreen;

const styles = StyleSheet.create({
  imagenTelefono: {
    //width: "100%",
    width: 150,
    height: 150,    
    //borderWidth: 0,
    //borderColor: "#ccc",
    marginBottom: 30,
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
    backgroundColor: "#003266",
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
  textoContenidoGrandeEspacioReducido: {
    fontSize: 25,
    textAlign: 'justify',
    marginBottom: 0,
    color: "#fff"     
  },
  textoContenidoChico: {
    fontSize: 15,
    textAlign: 'justify',
    marginBottom: 10,
    color: "#fff"     
  },
  textoContenidoChicoBold: {
    fontSize: 15,
    textAlign: 'justify',
    marginBottom: 10,
    color: "#fff",
    fontWeight: 'bold'     
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

/*
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
            Aquí es la pantalla de contacto :) 
          </Text>
          <Button
            title="Inicio"
            onPress={() => navigation.navigate('Inicio')}
          />          
        </View>        
      </View>

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
    </SafeAreaView>*/
