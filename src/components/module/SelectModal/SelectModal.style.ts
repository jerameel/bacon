import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#00000022',
  },
  title: {
    color: '#000',
  },
  titleContainer: {
    backgroundColor: '#ffff',
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#ffff',
    padding: 16,
  },
  itemLabel: {
    color: '#000',
  },
  itemLabelActive: {
    color: COLORS.PRIMARY,
  },
});

export default styles;
