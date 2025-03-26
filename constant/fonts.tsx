import {Platform} from 'react-native';


export const isAndroid = () => {
  return Platform.OS === 'android';
};


export const fontFamilies = {
  Pixeloid: {
    medium: isAndroid() ? 'PixeloidMono': 'PixeloidMono',
    normal: isAndroid() ? 'PixeloidSans': 'PixeloidSans',
    bold: isAndroid() ? 'PixeloidSans-Bold': 'PixeloidSansBold',
  },
  Idk: {
    medium: isAndroid() ? 'PixeloidMono': 'PixeloidMono',
    normal: isAndroid() ? 'PixeloidSans': 'PixeloidSans',
    bold: isAndroid() ? 'PixeloidSans-Bold': 'PixeloidSansBold',
  }  
}
