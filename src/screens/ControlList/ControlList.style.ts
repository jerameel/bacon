import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { getGlobalStyles } from 'theme';

const useStyles = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const { selectedTheme } = settings;
  const STYLES = getGlobalStyles(selectedTheme);
  const styles = StyleSheet.create({
    container: STYLES.CONTAINER,
    header: STYLES.HEADER,
    headerTitle: STYLES.HEADER_TITLE,
    content: {
      flex: 1,
    },
    itemContainer: {
      marginTop: 16,
      marginHorizontal: 16,
    },
    action: {
      padding: 16,
    },
    spacer: {
      height: 8,
    },
    emptyContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyTitle: {
      color: '#595959',
      marginTop: 8,
    },
  });

  return { styles, selectedTheme };
};

export default useStyles;
