import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    padding: 16,
    backgroundColor: '#000',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  itemContainer: {
    marginTop: 8,
    marginHorizontal: 16,
  },
  action: {
    padding: 16,
  },
  spacer: {
    height: 8,
  },
});

export default styles;
