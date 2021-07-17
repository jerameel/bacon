import { StyleSheet } from 'react-native';
import { THEME_OPTION } from 'store/settings';
import { COLORS, getGlobalStyles } from 'theme';

const getStyles = (theme: THEME_OPTION = 'Light') => {
  const STYLES = getGlobalStyles(theme);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: '#00000022',
    },
    title: {
      color: COLORS[theme].TITLE,
    },
    titleContainer: {
      backgroundColor: COLORS[theme].AREA_HIGHLIGHT,
      padding: 16,
    },
    itemContainer: {
      backgroundColor: COLORS[theme].AREA_HIGHLIGHT,
      padding: 16,
    },
    itemLabel: {
      color: COLORS[theme].PRIMARY_TEXT,
    },
    itemLabelActive: {
      color: COLORS[theme].PRIMARY,
    },
  });

  return styles;
};

export default getStyles;
