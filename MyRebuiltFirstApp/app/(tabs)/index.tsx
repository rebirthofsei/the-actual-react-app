import { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  // State variables
  const [name, setName] = useState('');
  const [count, setCount] = useState('');

  // Message based on counter
  const message =
    count > 0
      ? `${name}, you tapped ${count} times!`
      : "Tap the + button to start";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Profile picture */}
      <Image source={{ uri: 'https://i.pinimg.com/736x/e3/be/30/e3be3081d56e8f0e31dbef11a83273ea.jpg' }} style={styles.image}/>
      {/* Name input */}
      <TextInput placeholder="Enter your name" onChangeText={setName} style={styles.input}/>
      {/* Greeting */}
      <Text style={styles.text}>{name === '' ? "Please enter your name" : `Hello, ${name}!`}</Text>
      {/* Counter message */}
      <Text style={styles.text}>{message}</Text>
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>

    </ScrollView>
  );
}

// Changed stylesheet - 05/23/26
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c9c9c9'
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBotton: 10,
    backgroundColor:'#e9e9e9',
    borderColor:'#878787',
  },

  text: { fontSize: 16, marginVertical: 5 },
  buttonContainer: { marginTop: 10, width: '60%' }
});