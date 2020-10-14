import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // Container style
  },
});

export const fontStyles = StyleSheet.create({
  title: {
    fontFamily: 'Heebo-Bold',
    fontSize: 24,
  },
  body: {
    fontFamily: 'Heebo-Light',
    fontSize: 18,
  },
  caption: {
    fontFamily: 'Heebo-Medium',
    fontSize: 14,
  },
  label: {
    fontFamily: 'Heebo-Bold',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 2.5,
  },
});

export default styles;
