import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'row',
  },
  containerDisabled: {
    backgroundColor: '#434343',
  },
  text: {
    fontFamily: 'Heebo-Bold',
    fontSize: 14,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  outlineContainer: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
    borderColor: '#000',
    borderWidth: 2,
    flexDirection: 'row',
  },
  outlineContainerDisabled: {
    backgroundColor: '#434343',
  },
  outlineText: {
    fontFamily: 'Heebo-Bold',
    fontSize: 14,
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});

export default styles;
