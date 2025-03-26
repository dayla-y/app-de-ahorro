import { fontFamilies } from "../../constant/fonts";

export const getFontFamily = (
  isLTR: boolean,
  weight: 'normal' | 'medium' | 'bold',
) => {
  const selectedFontFamily = isLTR
    ? fontFamilies.Pixeloid
    : fontFamilies.Idk;
  return selectedFontFamily[weight];
};