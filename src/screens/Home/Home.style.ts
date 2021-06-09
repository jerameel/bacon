import { StyleSheet } from 'react-native';
import { STYLES } from 'theme';

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
    color: '#595959',
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
    color: '#595959',
    marginTop: 16,
  },
});

export default styles;
