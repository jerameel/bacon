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
    contentArea: {
      backgroundColor: COLORS[theme].AREA_HIGHLIGHT,
      padding: 16,
      borderRadius: 10,
    },
    title: {
      color: COLORS[theme].TITLE,
    },

    descriptionContainer: {
      marginTop: 8,
    },

    description: {
      color: COLORS[theme].PRIMARY_TEXT,
    },

    actionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 16,
    },

    actionButton: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginLeft: 8,
    },

    actionLabel: {
      color: COLORS[theme].TITLE,
      textTransform: 'uppercase',
    },
  });

  return styles;
};

export default getStyles;
