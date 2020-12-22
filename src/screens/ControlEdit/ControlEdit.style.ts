import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    paddingLeft: 8,
    backgroundColor: '#fff',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  headerTitleContainer: {
    marginHorizontal: 8,
    flex: 1,
  },
  headerTitle: {
    color: '#000',
  },
  headerAction: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  inputContainer: { marginTop: 8, marginHorizontal: 16 },
  action: {
    padding: 16,
  },
  spacer: {
    height: 8,
  },
});

export default styles;
