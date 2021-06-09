import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';

const styles = StyleSheet.create({
  container: {
    // Container style
    borderRadius: 10,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  contentIndicator: {
    backgroundColor: '#f5f5f5',
    width: 24,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentIndicatorActive: {
    backgroundColor: COLORS.PRIMARY,
    width: 24,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentDetails: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  textName: {
    color: '#000',
  },
  textId: {
    color: COLORS.PRIMARY,
  },
});

export default styles;
