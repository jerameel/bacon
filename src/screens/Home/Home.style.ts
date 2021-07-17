import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { COLORS, getGlobalStyles } from 'theme';

const useStyles = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const { selectedTheme } = settings;
  const STYLES = getGlobalStyles(selectedTheme);
  const styles = StyleSheet.create({
    container: STYLES.CONTAINER,
    header: STYLES.HEADER,
    headerTitle: STYLES.HEADER_TITLE,
    emptyContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyTitle: {
      color: COLORS[selectedTheme].SECONDARY_TEXT,
      marginTop: 8,
    },
    content: {
      flex: 1,
    },
    action: {
      padding: 16,
    },
    itemContainer: {
      marginTop: 16,
      marginHorizontal: 16,
    },
    spacer: {
      height: 8,
    },
    textDeviceCount: {
      marginHorizontal: 16,
      color: COLORS[selectedTheme].SECONDARY_TEXT,
      marginTop: 16,
    },
  });

  return { styles, selectedTheme };
};

export default useStyles;
