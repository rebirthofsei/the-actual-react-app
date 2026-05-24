import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function App() {
return (
  <View style={s.screen}>
    <Image
      source={{ uri: 'https://i.pinimg.com/736x/e3/be/30/e3be3081d56e8f0e31dbef11a83273ea.jpg' }}
      style={s.photo}
    />
    <Text style={s.name}>Melde May / Sei</Text>
    <Text style={s.course}>Multimedia Arts • CS126-1</Text>
    <Text style={s.bio}>Graphic designer, Dead by Daylight enthusiast, really enjoys noodles and soup a bit too much than normal.</Text>
  </View>
  );
}

// Changed stylesheet to make profile screen look better - 05/23/26
const s = StyleSheet.create({
  screen: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#151515', padding:20 },
  photo: { width:120, height:120, borderRadius:60 },
  name: { fontSize:22, fontWeight:'bold', marginTop:12, color:'#ecdfdf' },
  course: { fontSize:14, color:'#cf4897', textAlign:'center' },
  bio: { fontSize:14, color:'#c1699d', textAlign:'center' }
});