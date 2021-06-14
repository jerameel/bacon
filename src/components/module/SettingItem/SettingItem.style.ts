import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    flexDirection: 'column',
  },
  label: {
    color: COLORS.PRIMARY,
  },
  description: {
    color: COLORS.BLACK,
    marginTop: 8,
  },
});

export default styles;
