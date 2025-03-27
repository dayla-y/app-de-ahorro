import { Button, Text } from '@react-navigation/elements';
import { Animated, Image, ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import Cabeceras from '../../../components/Cabecera';
import colors from '../../../constant/colors';
import len from '../../assets/len.png';
import fondo from '../../assets/fondo.png';
import React, { useEffect, useRef, useState } from 'react'; // Añadidos hooks
import { getFontFamily } from '../../utils/fontFamily';
import { useFonts } from 'expo-font';
import { mockData } from '../../utils/mock-data';

export function Home() {

  const [currentAdviceIndex, setCurrentAdviceIndex] = useState(0);
  // Animación para el movimiento
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
    const adviceTimer = setInterval(() => {
      setCurrentAdviceIndex(prev => (prev + 1) % mockData.advice.length);
    }, 5000);
    return () => clearInterval(adviceTimer);
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

  const renderHistoryItem = ({ item }) => (
    <View style={estilo.historyItem}>
      <View>
        <Text style={estilo.historyTitle}>{item.title}</Text>
        <Text style={estilo.historyDate}>{item.date}</Text>
      </View>
      <Text style={[
        estilo.historyAmount,
        item.type === 'income' ? estilo.income : estilo.expense
      ]}>
        {mockData.balance.currency}{item.amount.toFixed(2)}
      </Text>
    </View>
  );
  
  return (
    <ScrollView >
     
      <View style={[estilo.secondcardInner,
        {backgroundColor: colors.PRIMARY},
        {width: '90%'},
        {marginTop: '7%'},
        {height: '14%'}
        ]}>
        <Text style={estilo.text}>Consejo del día</Text>
        <Text style={estilo.adviceText}>{mockData.advice[currentAdviceIndex]}</Text>      </View>


      <View style={estilo.container}>
        {/* Tarjeta 1 - Gastos */}
        <View style={estilo.cardOuter}>
          <View style={estilo.cardInner}>
            <Text style={estilo.text}>Gastos</Text>
            <Text style={estilo.amountText}>
              {mockData.balance.currency}{mockData.balance.expenses.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Tarjeta 2 - Ingresos */}
        <View style={estilo.cardOuter}>
          <View style={estilo.cardInner}>
            <Text style={estilo.text}>Ingresos</Text>
            <Text style={estilo.amountText}>
            {mockData.balance.currency}{mockData.balance.income.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Tarjeta 3 - Saldo */}
        <View style={estilo.cardOuter}>
          <View style={estilo.cardInner}>
            <Text style=
            {[estilo.text,
            ]}>Saldo</Text>
            <Text style={estilo.amountText}>
              {mockData.balance.currency}{mockData.balance.total.toFixed(2)}
            </Text>
            </View>
        </View>
      </View>


    <View style={[estilo.secondcardInner]}>
    <ImageBackground
        source={fondo} // Ruta de la imagen
        style={[estilo.background1, {marginLeft: -70}, {marginTop: -45}]}
        resizeMode="stretch"
        
      >
          <Text style={[estilo.text, { marginLeft: '35%' }, { marginTop: '15%' }]}>
            Balance Total
          </Text>
          {/* Arreglar para añadir  */}
          <Text style={estilo.balanceText}>
            {mockData.balance.currency}{mockData.balance.total.toFixed(2)}
          </Text>
        <Animated.Image
        source={len}
        style={[estilo.image,
        {
          transform: [{translateY},{rotate: '10deg'}]
        }
        ]}/>
        </ImageBackground>
      </View>
      
      <View style={[estilo.scrollView, { marginTop: 100 }]}>
    
        <Text style={[estilo.text,
          {marginLeft: '10%'},
          {marginTop: '5%'}
        ]}>Mi historial</Text>
        
      </View>

    </ScrollView>
  );
}

const size= 100;

const estilo = StyleSheet.create({
  
  container: {
    flexDirection: 'row', // Alinea los elementos horizontalmente
    justifyContent: 'space-between', // Distribuye el espacio entre los elementos
    // marginTop: '7%',
    paddingHorizontal: 20, // Añade un padding horizontal para no pegar los elementos a los bordes
  },
  cardOuter: {
    padding: 3, // Grosor del borde secundario
    backgroundColor: colors.SECONDARY, // Color del borde intermedio
    width: '30%', // Mismo ancho que cardInner
  },
  cardInner: {
    padding: 20,
    backgroundColor: colors.PRIMARY,
    height: 150,
    width: '100%', // Ahora ocupa todo el espacio del Outer
    // justifyContent: 'center',
    alignItems: 'center',
    },
  secondcardInner:{
    margin: '5%',
    // backgroundColor: colors.PRIMARY,
    height: 150,
    width: '90%', // Usa un porcentaje del ancho para que sea más dinámico
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
    // fontFamily: 'PixeloidSans',
  },

  amountText: {
    fontSize: 15,
    marginTop: 10,
    // fontFamily: 'PixeloidSans-Bold',
    color: colors.TEXT,
  },
  balanceText: {
    fontSize: 24,
    marginLeft: '35%',
    marginTop: 10,
    // fontFamily: 'PixeloidSans-Bold',
    color: colors.TEXT,
  },
  adviceText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
    // fontFamily: 'PixeloidSans',
    color: colors.TEXT,
  },
  historyList: {
    padding: 20,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.SECONDARY,
  },
  historyTitle: {
    fontSize: 16,
    // fontFamily: 'PixeloidSans',
    color: colors.TEXT,
  },
  historyDate: {
    fontSize: 12,
    color: colors.SECONDARY,
    // fontFamily: 'PixeloidMono',
  },
  historyAmount: {
    fontSize: 16,
    // fontFamily: 'PixeloidSans-Bold',
  },
  income: {
    color: '#4CAF50',
  },
  expense: {
    color: '#F44336',
  },
  
});