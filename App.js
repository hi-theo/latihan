import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {

  const [nama, setname] = useState('Theo')
  const [umur, setumur] = useState('20')

  return (
      <View style={styles.container}>
        <Text>Masukan nama : </Text>
        <TextInput style={styles.input} placeholder='e.g John Doe'
        onChangeText={(val)=>setname(val)}></TextInput>
        <Text>Masukan Umur : </Text>
        <TextInput style={styles.input} placeholder='20'
        onChangeText={(val)=>setumur(val)}></TextInput>
        <Text>Nama {nama}. Umur: {umur}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin:10,
    width:200,
  }
});
