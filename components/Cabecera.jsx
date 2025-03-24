import { Button, Header, Text } from '@react-navigation/elements';
import { StyleSheet, View, Image } from 'react-native';

const len = 'assets/len.png'

export default function Cabeceras() {
  // Lógica para cargar la imagen del usuario.

  return (
    <View>
      <Image
      source={len}
      style ={{
        width: 50,
        height: 50,
      }}/>
    </View>
  );
}
