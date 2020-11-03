import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setname] = useState('theo')

  const clickHandler = ()=>{
    setname('Prasetio');
  }
  return (
      <View style={styles.container}>
        <Text>Namaku {name}</Text>
        <Text>Test</Text>
        <View>
          <Button title='Update' onPress={clickHandler}></Button>
        </View>
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
  hearder:{
    flex:1,
    backgroundColor: 'yellow',
    fontSize: 30,
  },
  body:{
    backgroundColor:'red'

  }
});
