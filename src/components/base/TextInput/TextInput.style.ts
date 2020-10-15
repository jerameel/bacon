import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#f0f0f0',
    backgroundColor: '#f0f0f0',
    height: 80,
    borderRadius: 5,
    padding: 5,
  },
  containerActive: {
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  label: {
    height: 20,
    color: '#595959',
  },
  input: {
    height: 50,
    fontFamily: 'Heebo-Bold',
    fontSize: 18,
  },
});

export default styles;
