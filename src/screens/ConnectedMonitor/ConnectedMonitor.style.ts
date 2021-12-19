import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { COLORS, getGlobalStyles } from 'theme';

const useStyles = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const { selectedTheme } = settings;
  const STYLES = getGlobalStyles(selectedTheme);
  const colors = COLORS[selectedTheme];
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
      paddingHorizontal: 16,
    },
    logText: {
      color: colors.SECONDARY_TEXT,
      fontSize: 14,
      marginTop: 4,
    },
    inputContainer: {
      borderTopColor: colors.BORDER,
      borderTopWidth: 1,
      paddingHorizontal: 8,
      alignItems: 'center',
      flexDirection: 'row',
    },
    input: {
      height: 50,
      fontFamily: 'Heebo-Bold',
      fontSize: 18,
      color: colors.PRIMARY_TEXT,
      flex: 1,
    },
  });

  return { styles, selectedTheme, colors };
};

export default useStyles;
