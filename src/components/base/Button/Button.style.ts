import { StyleSheet } from 'react-native';
import { THEME_OPTION } from 'store/settings';
import { COLORS, getGlobalStyles } from 'theme';

const getStyles = (theme: THEME_OPTION = 'Light') => {
  const STYLES = getGlobalStyles(theme);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS[theme].PRIMARY,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      flexDirection: 'row',
    },
    containerDisabled: {
      backgroundColor: COLORS[theme].DISABLE,
    },
    text: {
      fontFamily: 'Heebo-Bold',
      fontSize: 14,
      color: COLORS.DARK.PRIMARY_TEXT,
      textTransform: 'uppercase',
      letterSpacing: 1.5,
    },
    outlineContainer: {
      backgroundColor: COLORS[theme].BACKGROUND,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderColor: COLORS[theme].SECONDARY_TEXT,
      borderWidth: 2,
      flexDirection: 'row',
    },
    outlineContainerDisabled: {
      backgroundColor: COLORS[theme].DISABLE,
    },
    outlineText: {
      fontFamily: 'Heebo-Bold',
      fontSize: 14,
      color: COLORS[theme].PRIMARY_TEXT,
      textTransform: 'uppercase',
      letterSpacing: 1.5,
    },
  });

  return styles;
};

export default getStyles;
