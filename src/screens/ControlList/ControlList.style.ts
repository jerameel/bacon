import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    display: 'flex',
    padding: 16,
    backgroundColor: '#fff',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  headerTitle: {
    color: '#000',
  },
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
});

export default styles;
