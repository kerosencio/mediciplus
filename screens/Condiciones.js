//import React, { useState } from "react";
import React, { useState } from 'react';
import { 
  Button, View, Text, SafeAreaView,StyleSheet,
  TouchableOpacity,ImageBackground,Dimensions,Image,ScrollView
} from 'react-native';


const CondicionesScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.viewHeader}>  
              <Text
                style={styles.textHeader}>        
                Aviso de privacidad 
              </Text>  
      </View>        
      <View style={styles.contenido}>
       <ScrollView>
         <View style={styles.centeredView}>
         <View style={styles.modalView}>   
         <Text style={styles.modalText}>
        

         AVISO DE PRIVACIDAD SOLUMETRIA{"\n"}{"\n"}
Solumetria Innovación Creativa, S.R.L. de C.V. (en lo sucesivo, SOLUMETRIA) con domicilio para efectos de éste aviso en Luis Moya N° 5, Piso 8, Colonia Centro, Cuauhtémoc, Ciudad de México, Código Postal 06050, es una empresa comprometida en proteger la privacidad de la información propiedad del particular (en adelante el TITULAR); por lo que en cumplimiento con lo establecido por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) hace de su conocimiento la política de privacidad y manejo de datos personales, incluyendo desde la obtención y posteriormente el tratamiento de sus {"\n"}
datos personales, a través de los siguientes puntos:{"\n"}{"\n"}
1) OBJETO. Regular la forma, términos y condiciones conforme a los cuales SOLUMETRIA, obtiene, trata y transfiere los datos personales.{"\n"}
2) USO. La información personal que nos proporciona será utilizada por SOLUMETRIA para prestarle los servicios a solicitud directa por Usted o que se le brinden como parte de un servicio derivado de cualquier relación de SOLUMETRIA con terceros, actividades promocionales, participación y beneficios de redes, programas de descuento, lealtad y cualquier otra transacción relacionada con la prestación de servicios y comerciales en general. Asimismo, puede utilizar la información para ofrecerle promociones y productos comerciales en general, así como cualquier otro producto o servicio relacionado como puede ser en forma {"\n"}
ejemplificativa pero no limitativa el envío de promociones, servicios especiales, boletines informativos, encuestas y otros productos y servicios de SOLUMETRIA.{"\n"}
3) CONSENTIMIENTO. En el caso de medios, de cualquier tipo, el TITULAR reconoce y está consciente que la sola aceptación del “Aviso de Privacidad” y/o el simple uso de los servicios o el sitio web de SOLUMETRIA o algún otro donde le sea presentado éste aviso, es un consentimiento expreso para que SOLUMETRIA maneje sus datos según éste documento.{"\n"}
4) VERACIDAD. El TITULAR será responsable de la veracidad y extensión de la información.{"\n"}
5) RESTRICCIONES DE USO. El TITULAR podrá consultar, modificar o cancelar sus datos, o restringir los fines de uso de la información a través de los procedimientos que se establecen en este Aviso de Privacidad.{"\n"}
6) TERCEROS. También SOLUMETRIA podrá compartir o transmitir la información con sus asociados o con terceros para que puedan enviarle información acerca de sus productos y servicios en general.{"\n"}
7) USO LEGAL. Finalmente la información que nos proporciona podrá ser tratada en los casos que expresamente autoriza el art. 10 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares.{"\n"}
8) OBTENCIÓN DE DATOS. El TITULAR proporcionará voluntariamente sus Datos a SOLUMETRIA, ya sea por escrito, presencial y/o verbal y/o electrónicamente, bajo cualquier medio de contacto utilizado por SOLUMETRIA, directa o indirectamente después de la referencia a este Aviso de Privacidad, además de otras fuentes públicamente disponibles. {"\n"}
Incluyendo información con motivo de la adquisición y/o solicitud y/o uso de los servicios brindados por SOLUMETRIA y/o cualquiera de las empresas con las que ésta haya tenido o tenga o llegue a tener relación jurídica o comercial. Toda la información y Datos que recopilamos sobre el TITULAR puede combinarse para los fines permitidos conforme a este Aviso de Privacidad.{"\n"}
9) ALMACENAMIENTO DE DATOS. El TITULAR entiende y acepta que SOLUMETRIA está autorizada para usar, almacenar divulgar o transferir sus datos. En este caso SOLUMETRIA celebrará contratos con los terceros a los que proporcione los Datos, en los que se incorporarán las restricciones y demás términos y condiciones de este Aviso de Privacidad. Si usted no manifiesta su oposición para que sus Datos sean transferidos, se entenderá que ha otorgado su consentimiento para ello. {"\n"}
Dichos proveedores de servicios están obligados, por contrato, a mantener la confidencialidad de los Datos conforme a este Aviso de Privacidad.{"\n"}
10) CONFIDENCIALIDAD. SOLUMETRIA no revelará los datos a terceros no autorizados salvo cuando dicha divulgación sea requerida por ley o mandamiento de autoridad.{"\n"}
11) ACCESO Y RECTIFICACIÓN. El TITULAR tendrá derecho a acceder a su información personal almacenada en la base de datos de SOLUMETRIA y rectificarla, limitarla o actualizarla cuando lo requiera, para lo cual deberá enviar una solicitud por correo postal o electrónico a SOLUMETRIA, bajo los siguientes datos: datos.personales@solumetria.com, dirigida a Solumetria Innovación Creativa, S.R.L. de C.V. con domicilio para efectos de éste aviso en Luis Moya N° 5, Pisos 8, Colonia Centro, Cuauhtémoc, Ciudad de México, Código Postal 06050. La solicitud de acceso, rectificación, cancelación u oposición deberá contener y acompañar lo siguiente:{"\n"}{"\n"}
• Nombre del TITULAR, y domicilio o medio para hacerle llegar la respuesta a su solicitud;{"\n"}
• Documentos probatorios de identidad, de sí o los de su representante legal{"\n"}
• La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados.{"\n"}{"\n"}
12) CANCELACIÓN O REVOCACIÓN. En caso de solicitudes de cancelación total de Datos o revocación del consentimiento, las mismas deberán realizarse de conformidad con lo señalado en el apartado anterior. La cancelación de Datos dará lugar a un periodo de bloqueo tras el cual se procederá a la supresión del Dato. SOLUMETRIA podrá conservar los Datos exclusivamente para fines estadísticos, o en seguimiento a responsabilidades de servicios o trámites corrientes. Cuando los Datos hubiesen sido transmitidos con anterioridad a la fecha de rectificación o cancelación y sigan siendo tratados por terceros, SOLUMETRIA podrá {"\n"}
hacer de conocimiento de tales terceros dicha solicitud de rectificación o cancelación, sin ninguna otra obligación adicional de su parte. SOLUMETRIA no estará obligada a cancelar los Datos cuando:{"\n"}
• Deban ser tratados por disposición legal;{"\n"}
• Obstaculice actuaciones judiciales o administrativas vinculadas a obligaciones fiscales, la investigación y persecución de delitos o la actualización de sanciones administrativas;{"\n"}
• Sean necesarios para proteger los intereses jurídicamente tutelados del TITULAR;{"\n"}
• Sean necesarios para realizar una acción en función del interés público;{"\n"}
• Sean necesarios para cumplir con una obligación legalmente adquirida.{"\n"}
13) MODIFICACIONES. SOLUMETRIA se reserva el derecho de efectuar en cualquier momento, modificaciones en las presentes políticas de privacidad y adaptarla a novedades legislativas, jurisprudenciales, así como a prácticas del mercado. El TITULAR está de acuerdo y conforme en que cualquier cambio a este “Aviso de Privacidad” o a las políticas de privacidad se notifique mediante su publicación en la página de Internet www.solumetria.com. Es obligación del TITULAR visitar periódicamente dicho sitio a fin de verificar la versión más actual del Aviso de Privacidad.{"\n"}
Con éstas políticas de protección y manejo de datos personales, Solumetria Innovación Creativa, S.R.L. de C.V., reitera su compromiso en proteger su información, agradeciéndole su confianza y la oportunidad de estar cerca de Usted.{"\n"}
{"\n"}
{"\n"}
AVISO DE PRIVACIDAD LOGEM{"\n"}
{"\n"}{"\n"}
LOGEM Operadora Mexicana de Asistencia Universal, S.A. de C.V. (en lo sucesivo, la OPERADORA) con domicilio para efectos de éste aviso en Luis Moya N° 5, Pisos 7, Colonia Centro, Cuauhtémoc, Ciudad de México, Código Postal 06050, es una empresa comprometida en proteger la privacidad de la información propiedad del particular (en adelante el TITULAR); por lo que en cumplimiento con lo establecido por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) hace de su conocimiento la política de privacidad y manejo de datos personales, incluyendo desde la obtención y posteriormente el tratamiento de sus datos personales, a través de los siguientes puntos:{"\n"}
{"\n"}
{"\n"}
1) OBJETO. Regular la forma, términos y condiciones conforme a los cuales la OPERADORA, obtiene, trata y transfiere los datos personales.{"\n"}
2) USO. La información personal que nos proporciona será utilizada por la OPERADORA para prestarle los servicios a solicitud directa por Usted {"\n"}
o que se le brinden como parte de un servicio derivado de cualquier relación de la OPERADORA con terceros, actividades promocionales, participación y beneficios de redes, programas de descuento, lealtad y cualquier otra transacción relacionada con la prestación de servicios y comerciales en general. Asimismo, puede utilizar la información para ofrecerle promociones y productos comerciales en general, así como cualquier otro producto o servicio relacionado como puede ser en forma ejemplificativa pero no limitativa el envío de promociones, servicios especiales, boletines informativos, encuestas y otros productos y {"\n"}
servicios de la OPERADORA.{"\n"}
3) CONSENTIMIENTO. En el caso de medios, de cualquier tipo, el TITULAR reconoce y está consciente que la sola aceptación del “Aviso de Privacidad” y/o el simple uso de los servicios o el sitio web de la OPERADORA o algún otro donde le sea presentado éste aviso, es un consentimiento expreso para que la OPERADORA maneje sus datos según éste documento.{"\n"}
4) VERACIDAD. El TITULAR será responsable de la veracidad y extensión de la información.{"\n"}
5) RESTRICCIONES DE USO. El TITULAR podrá consultar, modificar o cancelar sus datos, o restringir los fines de uso de la información a través de los procedimientos que se establecen en este Aviso de Privacidad.{"\n"}
6) TERCEROS. También la OPERADORA podrá compartir o transmitir la información con sus asociados o con terceros para que puedan enviarle información acerca de sus productos y servicios en general.{"\n"}
7) USO LEGAL. Finalmente la información que nos proporciona podrá ser tratada en los casos que expresamente autoriza el art. 10 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares.{"\n"}
8) OBTENCIÓN DE DATOS. El TITULAR proporcionará voluntariamente sus Datos a la OPERADORA, ya sea por escrito, presencial y/o verbal y/o electrónicamente, bajo cualquier medio de contacto utilizado por la OPERADORA, directa o indirectamente después de la referencia a este Aviso de Privacidad, además de otras fuentes públicamente disponibles. Incluyendo información con motivo de la adquisición y/o solicitud y/o uso de los servicios brindados por la OPERADORA y/o cualquiera de las empresas con las que ésta haya tenido o tenga o llegue a tener relación jurídica o comercial. Toda la información y Datos que recopilamos sobre {"\n"}
el TITULAR puede combinarse para los fines permitidos conforme a este Aviso de Privacidad.{"\n"}
9) ALMACENAMIENTO DE DATOS. El TITULAR entiende y acepta que la OPERADORA está autorizada para usar, almacenar divulgar o transferir sus datos. En este caso la OPERADORA celebrará contratos con los terceros a los que proporcione los Datos, en los que se incorporarán las restricciones y demás términos y condiciones de este Aviso de Privacidad. Si usted no manifiesta su oposición para que sus Datos sean transferidos, se entenderá que ha otorgado su consentimiento para ello. {"\n"}
Dichos proveedores de servicios están obligados, por contrato, a mantener la confidencialidad de los Datos conforme a este Aviso de Privacidad.{"\n"}
10) CONFIDENCIALIDAD. La OPERADORA no revelará los datos a terceros no autorizados salvo cuando dicha divulgación sea requerida por ley o mandamiento de autoridad.{"\n"}
11) ACCESO Y RECTIFICACIÓN. El TITULAR tendrá derecho a acceder a su información personal almacenada en la base de datos de la OPERADORA y rectificarla, limitarla o actualizarla cuando lo requiera, para lo cual deberá enviar una solicitud por correo postal o electrónico a la OPERADORA, bajo los siguientes datos: datos.personales@logem.com.mx, dirigida a LOGEM Operadora Mexicana de Asistencia Universal, S.A. de C.V. con domicilio para efectos de éste{"\n"}
aviso en Luis Moya N° 5, Pisos 7, Colonia Centro, Cuauhtémoc, Ciudad de México, Código Postal 06050. La solicitud de acceso, rectificación, cancelación u oposición deberá contener y acompañar lo siguiente:{"\n"}{"\n"}
• Nombre del TITULAR, y domicilio o medio para hacerle llegar la respuesta a su solicitud;{"\n"}
• Documentos probatorios de identidad, de sí o los de su representante legal{"\n"}
• La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados.{"\n"}{"\n"}
12) CANCELACIÓN O REVOCACIÓN. En caso de solicitudes de cancelación total de Datos o revocación del consentimiento, las mismas deberán realizarse de conformidad con lo señalado en el apartado anterior. La cancelación de Datos dará lugar a un periodo de bloqueo tras el cual se procederá a la supresión del Dato. La OPERADORA podrá conservar los Datos exclusivamente para fines estadísticos, o en seguimiento a responsabilidades de servicios o trámites corrientes. Cuando los Datos hubiesen sido transmitidos con anterioridad a la fecha de rectificación o cancelación y sigan siendo tratados por terceros, la OPERADORA podrá {"\n"}
hacer de conocimiento de tales terceros dicha solicitud de rectificación o cancelación, sin ninguna otra obligación adicional de su parte. La OPERADORA no estará obligada a cancelar los Datos cuando:{"\n"}
• Deban ser tratados por disposición legal;{"\n"}
• Obstaculice actuaciones judiciales o administrativas vinculadas a obligaciones fiscales, la investigación y persecución de delitos o la {"\n"}
actualización de sanciones administrativas;{"\n"}
• Sean necesarios para proteger los intereses jurídicamente tutelados del TITULAR;{"\n"}
• Sean necesarios para realizar una acción en función del interés público;{"\n"}
• Sean necesarios para cumplir con una obligación legalmente adquirida.{"\n"}
13) MODIFICACIONES. La OPERADORA se reserva el derecho de efectuar en cualquier momento, modificaciones en las presentes políticas de privacidad y adaptarla a novedades legislativas, jurisprudenciales, así como a prácticas del mercado. El TITULAR está de acuerdo y conforme en que cualquier cambio a este “Aviso de Privacidad” o a las políticas de privacidad se notifique mediante su publicación en la página de Internet www.logem.com.mx Es obligación del TITULAR visitar periódicamente dicho sitio a fin de verificar la versión más actual del Aviso de Privacidad.{"\n"}
Con éstas políticas de protección y manejo de datos personales, LOGEM Operadora Mexicana de Asistencia Universal, S.A. de C.V., reitera su compromiso en proteger su información, agradeciéndole su confianza y la oportunidad de estar cerca de Usted.{"\n"}
{"\n"}

         </Text>
         <TouchableOpacity 
            onPress={() => navigation.navigate('Inicio')}
            style ={styles.botonInicio}>
            <Text style={styles.textoBoton}>INICIO</Text> 
          </TouchableOpacity>
         </View>
        </View>
       </ScrollView>
         
      </View>
   <View style={styles.viewFoot}>  
         <Image 
         style={styles.logoFoot}
         resizeMode = 'cover'
         source={require('../assets/images/logo_foot.png')}></Image>
   </View>       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "#003266",
    flex: 1, 
    alignItems: 'center',
    color: 'white',
    //justifyContent: "flex-start",
    height: '100%',
    //textAlignVertical:'center',
    justifyContent: 'center',
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
    color: "#fff",
    padding: 15    
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
   //modal
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    padding:10,
    //marginTop: 10,
    height: 40,
    width:200,
    borderRadius:10,
    backgroundColor: '#2980b9' ,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    //marginBottom: 15,
    textAlign: "justify"
  }
});

export default CondicionesScreen;
