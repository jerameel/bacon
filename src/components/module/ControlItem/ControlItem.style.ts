import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // Container style
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#fff1f0',
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 8,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  label: {
    color: '#000',
  },
});

export default styles;
