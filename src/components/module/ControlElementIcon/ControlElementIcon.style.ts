import { StyleSheet } from 'react-native';
import { THEME_OPTION } from 'store/settings';
import { COLORS } from 'theme';

const getStyles = (
  theme: THEME_OPTION = 'Light',
  props: { rotation: string; size: number; isHighlighted?: boolean },
) => {
  const colors = COLORS[theme];
  const styles = StyleSheet.create({
    container: {
      // Container style
      width: props.size,
      height: props.size,
      borderWidth: 2,
      borderRadius: 8,
      borderColor: COLORS[theme].BORDER,
      backgroundColor: props.isHighlighted
        ? COLORS[theme].PRIMARY
        : 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      transform: [
        {
          rotate: props.rotation,
        },
      ],
    },
  });

  return { styles, colors };
};

export default getStyles;
