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
      flexDirection: 'row',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      flexDirection: 'row',
    },
    contentIndicator: {
      backgroundColor: COLORS[theme].DIVIDER,
      width: 24,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    contentIndicatorActive: {
      backgroundColor: COLORS[theme].PRIMARY,
      width: 24,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    contentDetails: {
      flex: 1,
      flexDirection: 'column',
      paddingVertical: 24,
      paddingHorizontal: 16,
    },
    textName: {
      color: COLORS[theme].PRIMARY_TEXT,
    },
    textId: {
      color: COLORS[theme].PRIMARY,
    },
    signalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 64,
    },
  });

  return styles;
};

export default getStyles;
