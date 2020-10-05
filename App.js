import * as React from 'react';
import { 
  AsyncStorage, 
  Button, 
  Text, 
  TextInput, 
  View, 
  Image,
  StyleSheet, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  Platform,
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//para definir una opción personalizada
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';


//Pantallas
import InicioScreen from './screens/Inicio';
import MembresiasScreen from './screens/Membresias';
import PerfilScreen from './screens/Perfil';
import CondicionesScreen from './screens/Condiciones';
import MembresiaDetalleScreen from './screens/MembresiaDetalle';
import CoberturaScreen from './screens/Cobertura';
import ContactoScreen from './screens/Contacto';
import { State } from 'react-native-gesture-handler';

import './components/Guardar';

//Drawer

const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  //Botón de menú y encabezado
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {//Donute Button Image osea la de las tres rayitas
        }
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}



function SplashScreen() {
  return (
    <View style='backgroundColor: "#003566"'>
      <Text></Text>
    </View>
  );
}

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Drawer.Navigator         
        overlayColor="transparent" 
        initialRouteName="Home" 
        drawerStyle={{ 
          backgroundColor: '#003566',
          fontSize: 11, 
          fontWeight: 'bold'           
        }}
        drawerContentOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: '#ffffff',
          itemStyle: { marginVertical: 5 }        
        }}
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem activeTintColor={"#ffffff"} label="Cerrar sesión" onPress={signOut} />
            </DrawerContentScrollView>
          )
        }}
        >
        <Drawer.Screen style={{color:"white"}} name="Inicio" component={HomeScreenStack} />
        <Drawer.Screen name="Perfil de usuario" component={PerfilScreen} />
        <Drawer.Screen name="Membresías" component={MembresiasScreen} />        
        <Drawer.Screen name="Contacto" component={ContactoScreen} />
        <Drawer.Screen name="Aviso de privacidad" component={CondicionesScreen} />
      </Drawer.Navigator> 
  );
}

function HomeScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            title: 'Mediciplus', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              //backgroundColor: 'transparent'
              backgroundColor: '#003B68', //Color de header
            },
            headerTintColor: '#fff', //Color del texto del header
            headerTitleStyle: {
              fontWeight: 'bold', //Estilo del texto
            },
          }}
        />
        <Stack.Screen
          name="Membresias"
          component={MembresiasScreen}
          options={{
            title: 'Membresias', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#7c1342', //Color de header
            },
            headerTintColor: '#fff', //Color del texto del header
            headerTitleStyle: {
              fontWeight: 'bold', //Estilo del texto
            },
          }}
        />
        <Stack.Screen
          name="MembresiaDetalle"
          component={MembresiaDetalleScreen}
          options={{
            title: 'Detalle de membresía', //Set Header Title
            headerStyle: {
              backgroundColor: '#003B68', //Color de header
            },            
            headerTintColor: '#fff', //Color del texto del header
            headerTitleStyle: {              
            },
            textAlignVertical: 'top'
          }}
        />
         <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            title: 'Mi perfil', //Set Header Title    
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,        
            headerStyle: {
              //backgroundColor: 'transparent'
              backgroundColor: '#003B68', //Color de header
            },
            headerTintColor: '#fff', //Color del texto del header
            headerTitleStyle: {
              fontWeight: 'bold', //Estilo del texto
            },
            textAlignVertical: 'top'
          }}
        />
        <Stack.Screen
          name="Contacto"
          component={ContactoScreen}
          options={{
            title: 'Contacto', //Set Header Title    
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,        
            headerStyle: {
              //backgroundColor: 'transparent'
              backgroundColor: '#003B68', //Color de header
            },
            headerTintColor: '#fff', //Color del texto del header
            headerTitleStyle: {
              fontWeight: 'bold', //Estilo del texto
            },
            textAlignVertical: 'top'
          }}
        />
        <Stack.Screen
          name="Cobertura"
          component={CoberturaScreen}
          options={{
            title: 'Cobertura de membresía', //Set Header Title    
            headerStyle: {
              backgroundColor: '#003B68', //Color de header
            },    
            headerTintColor: '#fff', //Color del texto del header    
            headerTitleStyle: {              
            },
            textAlignVertical: 'top'
          }}
        />
      </Stack.Navigator>
  );
}

//Forma de logeo
function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  AsyncStorage.setItem(
    'username',
    username
  );
  AsyncStorage.setItem(
    'password',
    password
  );

  

  /*handleEmailChange = (email) =>{
    this.setState({email: email});
    console.log(email);
  };     
  handlePasswordChange = (password) =>{
      this.setState({password: password});
      console.log(password);
  };*/ 

  return (
    <KeyboardAvoidingView 
    behavior={Platform.Os == "ios" ? "padding" : "height"}
    style={styles.container}>   
    <StatusBar
        barStyle="light-content"
    ></StatusBar>
            <View style = {styles.viewlogin}>
              <Image 
                style={styles.login1}
                resizeMode = 'cover'
                source={require('./assets/images/login1.png')}></Image>
            </View>        
            <View style = {styles.viewlogin2}>
              <Image 
                style={styles.login2}
                resizeMode = 'cover'
                source={require('./assets/images/login2.png')}></Image>
            </View>
            <View style = {styles.viewlogin3}>
              <Image 
                style={styles.login3}
                //resizeMode = 'cover'
                source={require('./assets/images/logo_mediciplus.png')}></Image>
            </View>
            <TextInput 
                placeholder='Usuario'
                returnKeyType='next'
                placeholderTextColor='rgba(65, 154, 249, 0.99)'
                value={username}
                //onChangeText={this.handleEmailChange}                
                //onSubmitEditing={() => this.handleEmailSubmitPress}   
                onChangeText={setUsername}
                keyboardType='email-address'      
                autoCapitalize='none'
                autoCorrect={false}    
                style={styles.campo}>                    
            </TextInput>
            <View
              style={{
                borderBottomColor: '#1a4d7a',
                borderBottomWidth: 1,
                alignSelf:'stretch'
            }}
            />      
            <TextInput 
                //ref={this.passwordInputRef}
                placeholder='Contraseña'
                secureTextEntry={true}
                placeholderTextColor='rgba(65, 154, 249, 0.99)'
                //onChangeText={this.handlePasswordChange}
                returnKeyType='go'
                //ref={(input) => this.passwordInput = input}
                onChangeText={setPassword}
                value={password}
                keyboardType='default'         
                returnTextEntry={true} 
                returnKeyType='done'              
                style={styles.campo}>                    
            </TextInput>
            <View
              style={{
                borderBottomColor: '#1a4d7a',
                borderBottomWidth: 1,
                alignSelf:'stretch'
            }}
            />
            <TouchableOpacity 
                onPress={() => signIn({ username, password })}
                style ={styles.contenedorBoton}>
              <Text style={styles.textoBoton}>INGRESAR</Text> 
            </TouchableOpacity>                                     
             
    </KeyboardAvoidingView>
  );
}

//Stack navigator
const Stack = createStackNavigator();


const AuthContext = React.createContext();


export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  
  
  const loginApi = async () => {

    const username = await AsyncStorage.getItem("username");
    const password = await AsyncStorage.getItem("password");

    //console.log(username+" "+password);

    if(username==null && password==null)
    {
      alert("Debe introducir un usuario y contraseña");
      return null;
    } else if(username==null || password==null){
      alert("Debe introducir un usuario y contraseña");
      return null;
    } else {
        const respuestaLoginApi = await fetch('https://stage.sistemainvictus.com/api.php/usuario/login', {
        method: 'POST',
        headers: {
          //Accept: "application/json",
          "Content-Type": "application/json",      
          //'Authorization': 'Bearer ' + DEMO_TOKEN
        },
        body: JSON.stringify({
          usuario: username, 
          pass: password,
          grant_type: "client_credentials",
          client_id: "stageInviApi",
          client_secret: "C31409207AA0E714CF5D4FBC2CC91B9AC2A772C55103A355C43152D08F438E35"
        })
      })
      .then(
        (response) => response.json()
      )
      .then(
        (json) => {return json;}
      )
      .catch((error) => {
        console.error("410:" + error);
      });
    
      return respuestaLoginApi;
    }
    
  }


  const refreshToken = async () => {
    
    const respuestaRefreshToken = await fetch('https://stage.sistemainvictus.com/api.php/token', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          grant_type: "client_credentials",
          client_id: "stageInviApi",
          client_secret: "C31409207AA0E714CF5D4FBC2CC91B9AC2A772C55103A355C43152D08F438E35"
        })
      })
      .then(
        (response) => response.json()
      )
      .then(
        (json) => {return json;}
      )
      .catch((error) => {
        console.error("410:" + error);
      });
    
      return respuestaRefreshToken;
        
  }


  React.useEffect(() => {
    // Traer el token de la base de datos y luego navegar al lugar indicado
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        tokenExpiresIn = await AsyncStorage.getItem('tokenExpiresIn');
        //console.log(408);
        //console.log(Date.now()+" > "+tokenExpiresIn);
        if(Date.now() > tokenExpiresIn)
        {
          AsyncStorage.clear() 
          .then(() => {
              //this.props.navigation.navigate('SignInScreen')
              dispatch({ type: 'SIGN_IN', token: null });
          })
          .catch((err) => {
              console.log(err);
          })
        }
      } catch (e) {
        // actualizando token fallido
        alert("proceso de renovación de token");
        const respuestaLoginApi = await loginApi();

        const respuestaRefreshToken = await refreshToken();
        if(respuestaRefreshToken!=null)
        {
          //console.log("Se actualizó token");    
          //console.log(respuestaRefreshToken);
          const nuevoToken = respuestaRefreshToken.access_token;
          const tokenExpiresIn = respuestaRefreshToken.expires_in;              
          if(nuevoToken!=undefined)
          {
            await AsyncStorage.setItem("userToken", nuevoToken);
            await AsyncStorage.setItem("tokenExpiresIn", tokenExpiresIn.toString());              
          }
          
        }
      }

      // Después de restaurar el token, es posible que necesitemos validarlo en aplicaciones de producción
      
      // Esto cambiará a la pantalla de la aplicación o la pantalla de autenticación y esta carga
      // la pantalla será desmontada y desechada.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // En una aplicación de producción, necesitamos enviar algunos datos (generalmente nombre de usuario, contraseña) al servidor y obtener un token
        // También tendremos que manejar los errores si falla el inicio de sesión
        // Después de obtener el token, necesitamos persistir el token usando`AsyncStorage`
        // En el ejemplo, usaremos una ficha simulada
        

          const respuestaLoginApi = await loginApi();
          //console.log(respuestaLoginApi);
          if(respuestaLoginApi!=null)
          {
            if(respuestaLoginApi.errorId==70)
            {
              alert("El usuario o contraseña son incorrectos");
              dispatch({ type: 'SIGN_IN', token: null });
            } else {
              //console.log(respuestaLoginApi);
              const nuevoToken = respuestaLoginApi.oauth.access_token;
              const tokenExpiresIn = respuestaLoginApi.oauth.expires_in;              
              const usuarioId = respuestaLoginApi.entidadId;
              if(nuevoToken!=undefined)
              {
                await AsyncStorage.setItem("userToken", nuevoToken);
                await AsyncStorage.setItem("tokenExpiresIn", tokenExpiresIn.toString());
                await AsyncStorage.setItem("usuarioId", usuarioId);
                dispatch({ type: 'SIGN_IN', token: nuevoToken });        
              }
            }
          }           
      },
      signOut: async data => {
        await AsyncStorage.removeItem("userToken");
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async data => {
        // En una aplicación de producción, necesitamos enviar datos del usuario al servidor y obtener un token
        // También tendremos que manejar errores si falla el registro
        // Después de obtener el token, necesitamos persistir el token usando `AsyncStorage`
        // En el ejemplo, usaremos una ficha simulada

        //dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (    
    
    <AuthContext.Provider value={authContext}>
      {console.log(state.isLoading)}      
          {state.isLoading ? (
            // Todavía no hemos terminado de buscar el token
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          ) : state.userToken == null ? (
            // No se encontró ningún token, el usuario no ha iniciado sesión
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="SignIn"                  
                  component={SignInScreen}
                  options={{
                    title: 'Sign in',
                    // Al cerrar sesión, una animación pop se siente intuitiva
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                    headerShown: false
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          ) : (
            // El usuario ha iniciado sesión
            <NavigationContainer>
              <Drawer.Navigator 
              overlayColor="#fff" 
              initialRouteName="Home" 
              drawerStyle={{ 
                backgroundColor: '#ffffff',
                color: 'white', 
                fontSize: 10, 
                fontWeight: 'bold'           
              }}
              drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 5 },
              }}>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Drawer.Navigator>
            </NavigationContainer>                         
          )}        
    </AuthContext.Provider>
  );
}



const styles = StyleSheet.create({
  vistafija: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
  },
  //parte forma de contacto
  container: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#003566',
      flex: 1
  },
  viewlogin: {
    //position: 'absolute',
    width: '100%',
    justifyContent: 'flex-start',
    top: 0,
    height: '70%',
    borderWidth: 0,
    borderColor: "#ccc"
  },
  login1: {
    opacity: 0.9,
    top:0,
    left:-108, 
    height: '100%',
    //width: '100%',
  },
  viewlogin2: {
    //width: '100%',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 86,
    //height: '70%',
    borderWidth: 0,
    borderColor: "#ccc"
  },
  login2: {
    top:0
  },
  viewlogin3: {
    //width: '100%',
    height: 120,
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 360,
    alignItems: "center"
    
  },
  login3: {
    height: "69%",
    width: 390
  },  
  campo: {
      fontSize: 20,      
      height: 40,
      width: 300,
      paddingTop: 10,
      //backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 10,
      color: '#fff',
      paddingHorizontal: 10
  },
  contenedorBoton: {    
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

});

