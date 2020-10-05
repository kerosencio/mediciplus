import * as React from 'react';
import { Button, View, Text, SafeAreaView,Image,TouchableOpacity,FlatList,StyleSheet  } from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';

const _MembresiasScreen = ({ navigation }) => {
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
            Memberesías
          </Text>
          <View style={styles.container}>
              <FlatList
                  data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                  ]}
                  renderItem={({item}) => 
                    <Text style={styles.item}>{item.key}</Text>
                }
              />
          </View>
          <Button
            title="Inicio"
            onPress={() => navigation.navigate('Inicio')}
          />          
        </View>
        
      </View>
    </SafeAreaView>
  );
}

export default _MembresiasScreen;

/* */

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   justifyContent: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})