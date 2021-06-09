import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#fafafa',
    backgroundColor: '#fafafa',
    height: 80,
    borderRadius: 5,
    padding: 5,
  },
  containerActive: {
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  label: {
    height: 20,
    color: COLORS.PRIMARY,
  },
  input: {
    height: 50,
    fontFamily: 'Heebo-Bold',
    fontSize: 18,
  },
});

export default styles;
