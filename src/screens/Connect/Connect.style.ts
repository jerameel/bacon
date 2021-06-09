import { StyleSheet } from 'react-native';
import { COLORS, STYLES } from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: STYLES.HEADER,
  headerTitleContainer: {
    marginHorizontal: 8,
    flex: 1,
  },
  headerTitle: {
    color: '#000',
  },
  headerAction: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  disconnectButton: {
    width: '100%',
    marginTop: 16,
  },
  content: {
    flex: 1,
  },
  label: {
    color: '#000',
  },
  labelContainer: {
    marginTop: 16,
  },
  deviceName: {
    color: COLORS.PRIMARY,
  },
  deviceNameError: {
    color: '#cf1322',
  },
  deviceNameContainer: {
    marginTop: 8,
  },
  action: {
    padding: 16,
  },
  secondaryActionButton: {
    marginBottom: 8,
  },
  itemContainer: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  spacer: {
    height: 8,
  },
  emptyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    color: '#595959',
    marginTop: 8,
  },
});

export default styles;
