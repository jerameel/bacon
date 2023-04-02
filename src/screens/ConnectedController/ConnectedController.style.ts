import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { COLORS, getGlobalStyles } from 'theme';

const useStyles = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const { selectedTheme } = settings;
  const colors = COLORS[selectedTheme];
  const STYLES = getGlobalStyles(selectedTheme);
  const styles = StyleSheet.create({
    container: STYLES.CONTAINER,
    header: STYLES.HEADER,
    headerTitleContainer: {
      marginHorizontal: 8,
      flex: 1,
    },
    headerTitle: STYLES.HEADER_TITLE,
    headerAction: {
      width: 48,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
    },
    logTextContainer: {
      paddingHorizontal: 4,
    },
    logText: {
      color: colors.SECONDARY_TEXT,
      fontSize: 14,
      marginTop: 1,
    },
  });

  return { styles, selectedTheme };
};

export default useStyles;
