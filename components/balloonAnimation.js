import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BalloonAnimation({navigation}) {
  const [animation] = useState(new Animated.Value(0));
  //const navigation = useNavigation();

  const inflateBalloon = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const balloonSize = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 200],
  });


  const navigateToUserForm = () => {
    navigation.navigate('UserForm');
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={inflateBalloon}>
        <View style={styles.button}>
          <Button title='Inflate Balloon'/>
        </View>
      </TouchableOpacity>

      <Animated.View style={[styles.balloon, { width: balloonSize, height: balloonSize }]} />

      

      <TouchableOpacity onPress={navigateToUserForm}>
        <View style={styles.navigateButton}>
        <Button title='Go to User Form' onPress={navigateToUserForm}/>
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
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  balloon: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
  navigateButton: {
    backgroundColor: 'green',
    marginTop:25,
    padding: 10,
    borderRadius: 5,
  },
});
