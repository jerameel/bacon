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
    contentScroll: {
      paddingHorizontal: 16,
    },
    settingItem: {
      marginTop: 16,
    },
  });

  return { styles, selectedTheme };
};

export default useStyles;
