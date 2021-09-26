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
    deleteAction: {
      width: 32,
      height: 32,
      borderColor: COLORS[selectedTheme].ERROR,
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
      backgroundColor: COLORS[selectedTheme].BACKGROUND,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
    },
    modalContentLayer: {
      backgroundColor: COLORS[selectedTheme].BACKGROUND,
      flex: 1,
      padding: 16,
    },
    modalIconsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 4,
    },
    modalIconButton: {
      margin: 4,
    },
    modalTextInput: {
      marginTop: 8,
    },
    modalLabelContainer: {
      marginTop: 16,
    },
    modalLabel: {
      color: COLORS[selectedTheme].PRIMARY_TEXT,
    },
    modalSliderContainer: {
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    modalDeleteContainer: {
      marginTop: 32,
    },
  });

  return { styles, selectedTheme };
};

export default useStyles;
