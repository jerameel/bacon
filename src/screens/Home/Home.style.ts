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
  action: {
    padding: 16,
  },
});

export default styles;
