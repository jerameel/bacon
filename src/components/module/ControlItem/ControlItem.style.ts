import { StyleSheet } from 'react-native';
import { THEME_OPTION } from 'store/settings';
import { COLORS, getGlobalStyles } from 'theme';

const getStyles = (theme: THEME_OPTION = 'Light') => {
  const STYLES = getGlobalStyles(theme);
  const styles = StyleSheet.create({
    container: {
      // Container style
      borderRadius: 10,
      backgroundColor: COLORS[theme].AREA_HIGHLIGHT,
      paddingVertical: 28,
      paddingHorizontal: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    labelContainer: {
      flex: 1,
      marginHorizontal: 8,
    },
    label: {
      color: COLORS[theme].PRIMARY_TEXT,
    },
  });

  return styles;
};

export default getStyles;
