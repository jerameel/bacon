import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // Container style
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 24,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  actionContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
