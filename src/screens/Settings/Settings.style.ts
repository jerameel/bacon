import { StyleSheet } from 'react-native';
import { STYLES } from 'theme';

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

export default styles;
