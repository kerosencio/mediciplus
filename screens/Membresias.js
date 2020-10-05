import * as React from 'react';
import { Button, View, Text, SafeAreaView,ActivityIndicator,StyleSheet ,FlatList,TouchableOpacity,Image,ImageBackground,
    Dimensions   } from 'react-native';
import { PureComponent } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AsyncStorage } from "react-native";

const urlMembresias = 'https://stage.sistemainvictus.com/api.php/membresia?search=';


function _LogOut(){
  console.log("Logging out");
  AsyncStorage.clear() 
  .then(() => {
      this.props.navigation.navigate('SignInScreen')
  })
  .catch((err) => {
      console.log(err);
  })
}


export default class MembresiasScreen extends PureComponent {
  //Define el estado para el componente
  state = {
      //asignando un arreglo a la lista de membresias estado
      membresiaLista: [],
      //Tener un estado de carga donde cuando la recuperación de datos devuelve datos
      loading: true,
      userData: []
  }

  //define el componentDidMount gancho de ciclo de vida que recuperará datos
  //tambien tiene el keyword async para indicar que es asíncrono 
  async componentDidMount() {
      //obteniendo el id y el token para consulta

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
  
      } catch (e) {
        console.log(e);
        alert('Error al traer los datos de usuario')
      }


      //ponemos un bloque de try catch para capturar errores
      if(this.state.userData.userToken!= undefined && this.state.userData.usuarioId!=undefined)
      {
        try {
            //console.log(this.state);
            //asigna el promise unresolved primero luego obtener el data usando el método de json
            let userToken = "Bearer "+this.state.userData.userToken;
            var headers = {              
              'Authorization': userToken,
              'Content-Type': 'application/json'                               
            };  
            const membresiaApiCall = await fetch(urlMembresias+this.state.userData.usuarioId, {
              method: 'GET',
              headers: headers
            }); 
            const membresia = await membresiaApiCall.json();
            this.setState({membresiaLista: membresia.results.resultados, loading: false});
        } catch(err) {
            //AsyncStorage.removeItem("userToken");
            //AsyncStorage.removeItem("usuarioId");
            _LogOut();
            console.log("Error al traer los datos Membresias.js-----------", err);
        }
      }
  }
  //Definir el renderItem metodo de llamada para la FlatList para renderear cada artículo
  //,y pasar data como argumento. 
  renderItem = (data) =>  {
      //console.log("Listado de membresías: ",data);
      const id = data.item.id;
      //alert(nombre);
      //this.setState({nombres: data.item.nombres});
        
  //console.log("Id en función abrir membresía "+id);
  //console.log(data.item);
      return <TouchableOpacity 
            style={{backgroundColor: 'transparent'}} 
            navigation={this.props.navigation}
            onPress={() => 
                ////
                //this.props.navigation.navigate('MembresiaDetalle',{ id: "10" })}>
                //this.props.navigation.navigate('MembresiaDetalle',{membresiaId: data.item.id})}>                                
                //abrirMembresia(this.props.navigation,data.item.id)}>       
                this.props.navigation.navigate('MembresiaDetalle',{membresiaId: data.item.id})}> 
                        <View  style={styles.listItemContainer} >
                            <Text style={styles.membresiaItemHeader}>{data.item.nombre} {data.item.fecha}</Text>                            
                            <Text style={styles.membresiaItemHeader}>{data.item.qr}</Text>
                            <Image style={styles.membresiaImage} source={require('../assets/images/detalle_membresia.png')} />
                        </View>
            </TouchableOpacity>        
  }
  /* <Ionicons name='md-eye' size={40} /> */
  /*<Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}} 
                              style={styles.membresiaImage}/> */
  render = () => {
      //Destruir membresiaLista y cargar estado.
      const { membresiaLista, loading } = this.state;
      const nombre = this.nombres;
      //si el cargando es falso, regresa una flatlist que tendrá data, renderItem,
      //y keyExtractor propiedades usado   
      //data contiene la data siendo mapeada      
      //renderItem una llamda regresa UI para cada artículo
      //keyExtractor usado para dar un identificador único para cada artículo.
      if(!loading) {
        //console.log("la pura lista ", membresiaLista);
          return <SafeAreaView style={{ flex: 1 }}>  
            <View style={styles.viewHeader}>  
                <Text
                style={styles.textHeader}>        
                Membresías        
                </Text>  
                {/*<Text
                style={styles.textHeaderNombre}>        
                {membresiaLista.nombres}      
                </Text> */}
            </View>
            <View style={styles.contenido}><FlatList 
                  data={membresiaLista}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.name}                   
                  />
            </View>
            <View style={styles.viewFoot}>  
                <Image 
                style={styles.logoFoot}
                resizeMode = 'cover'
                source={require('../assets/images/logo_foot.png')}></Image>
          </View>
        </SafeAreaView>      
      } else {
          return <ActivityIndicator />
      }
  }
}


const abrirMembresia = (navigation,id) => {
  //Props to open/close the drawer
  //console.log('next tapped...', this.id);
  alert('Revisando Membresía ' + id);
  
  /*navigation.navigate(
    'MembresiaDetalle',
    { id },
  );*/
  /*_storeData = async () => {
    try {
      await AsyncStorage.setItem(
        'membresia_id',
        id
      );
    } catch (error) {
      // Error saving data
    }
  };*/
  //navigation.navigate('MembresiaDetalle',id);
  console.log("Id después de función navigate "+id);
};
  
const styles = StyleSheet.create({
  viewHeader: {
        backgroundColor: '#003566',
        color: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //height: 80
        height: 40
  },
  textHeader: {
    fontSize: 20,
    color: "#fff"
  },
  textHeaderNombre: {
    fontSize: 14,
    color: "#fff"
  },
  contenido: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 5,
    //borderColor: "#00F",
    height: "100%",
    backgroundColor: "#ffffff"
  },
  listItemContainer: {
      borderStyle: 'solid',
      borderColor: '#e1e1e1',
      borderBottomWidth: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20
  },
  membresiaItemHeader: {  
      color: '#8b8b8b',
      fontSize: 20,
  },
  membresiaImage: {
      //backgroundColor: 'transparent',
      height: 40,
      width: 40 
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
// export default PerfilScreen;
