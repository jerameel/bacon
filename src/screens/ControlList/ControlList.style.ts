import { StyleSheet } from 'react-native';
import { STYLES } from 'theme';

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

export default styles;
