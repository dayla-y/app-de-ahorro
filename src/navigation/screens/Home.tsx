import { Button, Text } from '@react-navigation/elements';
import { Animated, Image, ImageBackground, StyleSheet, View } from 'react-native';
import Cabeceras from '../../../components/Cabecera';
import colors from '../../../constant/colors';
import len from '../../assets/len.png';
import fondo from '../../assets/fondo.png';
import React, { useEffect, useRef } from 'react'; // Añadidos hooks
import { getFontFamily } from '../../utils/fontFamily';

export function Home() {
  // Animación para el movimiento
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const translateY = moveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20], // Rango de movimiento
  });
  
  return (
    <View>
    <View style={estilo.container}>
      <View style={estilo.card}>
        <Text style={estilo.text}>Gastos</Text>
      </View>

      <View style={[estilo.card]}>
        <Text style={estilo.text}>Ingresos</Text>
      </View>

      <View style={estilo.card}>
        <Text style={estilo.text}>Saldo</Text>
      </View>
      
    </View>

    <View style={[estilo.secondCard]}>
    <ImageBackground
        source={fondo} // Ruta de la imagen
        style={[estilo.background1, {marginLeft: -70}, {marginTop: -45}]}
        resizeMode="stretch"
        
      >
        <Text
        style={[
          estilo.text,
          {marginLeft: 70},
          {marginTop: '15%'}
        ]
          }
          >Consejo</Text>
        {/* //Corregir para hacerlo dinámico */}
        <Animated.Image
        source={len}
        style={[estilo.image,
        {
          transform: [{translateY},{rotate: '10deg'}]
        }
        ]}/>
        </ImageBackground>
      </View>
      
      <View style={[estilo.scrollView, { marginTop: 80 }]}>
    
        <Text style={[estilo.text]}>Mi historial</Text>
        
      </View>

    </View>
  );
}

const size= 100;

const estilo = StyleSheet.create({
  
  container: {
    flexDirection: 'row', // Alinea los elementos horizontalmente
    justifyContent: 'space-between', // Distribuye el espacio entre los elementos
    marginTop: '15%',
    paddingHorizontal: 20, // Añade un padding horizontal para no pegar los elementos a los bordes
  },
  card: {
    padding: 20,
    backgroundColor: colors.PRIMARY,
    height: 150,
    width: '30%', // Usa un porcentaje del ancho para que sea más dinámico
    justifyContent: 'center', // Centra el texto verticalmente
    alignItems: 'center', // Centra el texto horizontalmente
  },
  secondCard:{
    margin: '5%',
    // backgroundColor: colors.PRIMARY,
    height: 150,
    width: '90%', // Usa un porcentaje del ancho para que sea más dinámico
    justifyContent: 'center', // Centra el texto verticalmente
    alignItems: 'center', // Centra el texto horizontalmente
    paddingHorizontal:20,
    paddingTop: 40,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    width: '90%',
    marginHorizontal: '5%',
    padding: '10%',
  },
  image: {
    position: 'absolute', // Posición absoluta dentro del contenedor
    right: 20,
    top: '50%', // Centrado vertical inicial
    width: size,
    height: size,
    
  },
  background1: {
    position: 'relative', // Necesario para el posicionamiento absoluto de la imagen
    width: '131%',
    height: '180%',
    padding: 20,
  },
  text: {
    position: 'absolute',
    fontFamily: 'PixeloidSans-Bold',
  },
});