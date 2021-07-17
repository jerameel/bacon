import { StyleSheet } from 'react-native';
import { THEME_OPTION } from 'store/settings';
import { COLORS, getGlobalStyles } from 'theme';

const getStyles = (theme: THEME_OPTION = 'Light') => {
  const STYLES = getGlobalStyles(theme);
  const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderColor: COLORS[theme].BORDER,
      backgroundColor: COLORS[theme].BACKGROUND,
      height: 80,
      borderRadius: 5,
      padding: 5,
    },
    containerActive: {
      borderColor: COLORS[theme].PRIMARY,
      backgroundColor: COLORS[theme].AREA_HIGHLIGHT,
    },
    label: {
      height: 20,
      color: COLORS[theme].PRIMARY,
    },
    input: {
      height: 50,
      fontFamily: 'Heebo-Bold',
      fontSize: 18,
      color: COLORS[theme].PRIMARY_TEXT,
    },
  });

  return styles;
};

export default getStyles;
