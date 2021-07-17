import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { COLORS, getGlobalStyles } from 'theme';

const useStyles = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const { selectedTheme } = settings;
  const STYLES = getGlobalStyles(selectedTheme);
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
      color: COLORS[selectedTheme].SECONDARY_TEXT,
    },
    labelContainer: {
      marginTop: 16,
    },
    deviceName: {
      color: COLORS.LIGHT.PRIMARY,
    },
    deviceNameError: {
      color: COLORS[selectedTheme].ERROR,
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
      color: COLORS[selectedTheme].SECONDARY_TEXT,
      marginTop: 8,
    },
  });

  return { styles, selectedTheme };
};

export default useStyles;
