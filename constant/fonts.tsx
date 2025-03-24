import {useFonts} from "expo-font"

export default function RootLayout() {

  useFonts({
    'PixeloidMono': require('./../assets/fonts/PixeloidMono.ttf'),
    'PixeloidSans': require('./../assets/fonts/PixeloidSans.ttf'),
    'PixeloidSans-Bold': require('./../assets/fonts/PixeloidSans-Bold.ttf'),
  });
  
}
