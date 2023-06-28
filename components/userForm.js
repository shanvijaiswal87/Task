import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity , Button} from 'react-native';

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = () => {
    
    console.log('Name:', name);
    console.log('Email:', email);
    
    fetch('https://example.com/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log('API response:', data);
      })
      .catch((error) => {
        
        console.error('API request failed:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TouchableOpacity onPress={submitForm}>
        <View style={styles.button}>
          <Button title='Submit'/>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
