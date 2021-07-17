import { StyleSheet } from 'react-native';
import { THEME_OPTION } from 'store/settings';
import { COLORS, getGlobalStyles } from 'theme';

const getStyles = (theme: THEME_OPTION = 'Light') => {
  const STYLES = getGlobalStyles(theme);
  const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      backgroundColor: COLORS[theme].AREA_HIGHLIGHT,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    content: {
      flexDirection: 'column',
    },
    label: {
      color: COLORS[theme].PRIMARY,
    },
    description: {
      color: COLORS[theme].SECONDARY_TEXT,
      marginTop: 8,
    },
  });

  return styles;
};

export default getStyles;
