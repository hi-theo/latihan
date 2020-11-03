import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput, ScrollView } from 'react-native';

export default function App() {

  const [nama, setname] = useState([
    {nama: 'Theo', key: '1'},
    {nama: 'Prasetio', key: '2'},
    {nama: 'Bagas', key: '3'},
    {nama: 'Jerome', key: '4'},
    {nama: 'Anisa', key: '5'},
    {nama: 'Theo', key: '6'},
    {nama: 'Prasetio', key: '7'},
    {nama: 'Bagas', key: '8'},
    {nama: 'Jerome', key: '9'},
    {nama: 'Anisa', key: '10'},
  ])

  return (
    <ScrollView>
      <View style={styles.container}>
        
        { nama.map((item) => {
          return(
            <View style={styles.item}>
              <Text>{item.nama}</Text>
            </View>
          )
         })}
         
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    paddingTop:40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    padding: 30,
    fontSize: 30,
    backgroundColor:'blue',
    marginTop:24,
  }
});
