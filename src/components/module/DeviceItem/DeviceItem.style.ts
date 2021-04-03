import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // Container style
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#E6F7FF',
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 8,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 8,
  },
  textName: {
    color: '#000',
  },
  textId: {
    color: '#0050B3',
  },
});

export default styles;
