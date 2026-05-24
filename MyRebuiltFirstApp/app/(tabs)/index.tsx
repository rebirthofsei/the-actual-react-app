import { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={s.screen}>
  
      {/* Profile picture */}
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/e3/be/30/e3be3081d56e8f0e31dbef11a83273ea.jpg' }}
        style={s.photo}
      />
  
      {/* Name input */}
      <TextInput
        placeholder="Enter your name"
        onChangeText={setName}
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width: 200,
          backgroundColor:'#e9e9e9',
          borderColor:'#878787',
        }}
      />
  
      {/* Greeting */}
      <Text style={s.name}>
        Hello, {name}!
      </Text>
  
    </View>
  );
}

// Changed stylesheet to make profile screen look better - 05/23/26
const s = StyleSheet.create({
  screen: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#151515', padding:20 },
  photo: { width:120, height:120, borderRadius:60 },
  name: { fontSize:22, fontWeight:'bold', marginTop:12, color:'#ecdfdf' },
  bio: { fontSize:14, color:'#c1699d', textAlign:'center' }
});