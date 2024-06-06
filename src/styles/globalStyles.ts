import {StyleSheet} from 'react-native';
import {appColors} from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },

  text: {
    color: appColors.text,
    fontSize: 16,
    fontFamily: fontFamilies.regular,
  },

  button: {
    backgroundColor: appColors.white,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 56,
    flexDirection: 'row',
  }
});
 