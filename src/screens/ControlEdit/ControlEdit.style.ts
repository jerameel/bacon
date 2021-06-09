import { StyleSheet } from 'react-native';
import { STYLES } from 'theme';

const styles = StyleSheet.create({
  container: STYLES.CONTAINER,
  header: STYLES.HEADER,
  headerTitleContainer: {
    marginHorizontal: 8,
    flex: 1,
  },
  headerTitle: STYLES.HEADER_TITLE,
  headerAction: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteAction: {
    width: 32,
    height: 32,
    borderColor: '#f5222d',
    borderWidth: 2,
    borderRadius: 7,
  },
  content: {
    flex: 1,
  },
  elements: {
    flex: 1,
  },
  inputContainer: { marginTop: 8, marginHorizontal: 16 },
  editLayoutButton: {
    margin: 16,
  },
  action: {
    padding: 16,
  },

  spacer: {
    height: 8,
  },
  layoutActions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalClickableLayer: {
    backgroundColor: '#fff',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  modalContentLayer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },
  modalTextInput: {
    marginTop: 8,
  },
  modalLabel: {
    marginTop: 16,
  },
  modalSliderContainer: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default styles;
