import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const myName = name;

  const [text, setText] = useState('');

  function handleChange() {
      setText(myName);
  }

  return (
    <View style={styles.container}>
      <Image source={require('./Picture/mediologokek.png')} 
        style={{
          alignSelf: 'center',
          resizeMode:'contain',
          width: 300,
        }}
      />
      <Text
        style={{
          margin: 24,
          fontSize: 18,
          textAlign: 'center',
        }}
      >
      Üdv, {text} !
      </Text>
      <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TextInput
          style={{
            padding: 8,
            marginRight: 10,
            height: 40,
            width: 200,
            borderColor: '#2c9bf8',
            borderWidth: 2,
          }}
          placeholder="Név"
          onChangeText={name => setName(name)}
        />
        <Button title="Küldés" onPress={handleChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
