import React from 'react';
import { View } from 'react-native';
import getStyles from './ControlElementIcon.style';
import { BoxPlaceholder } from 'components/base/SVG';
import { ControlElementIconProps } from './ControlElementIcon.props';
import { IconMapping } from './ControlElementIcon.constants';
import { SVGProps } from 'components/base/SVG/SVG.props';

const ControlElementIcon = (props: ControlElementIconProps) => {
  const { id, size, theme, isHighlighted } = props;

  const iconSize = size * 0.75;

  const iconData: {
    icon: (props: SVGProps) => JSX.Element;
    rotation: string;
    // @ts-ignore
  } = IconMapping[id] || {
    icon: BoxPlaceholder,
    rotation: '0deg',
  };

  const Icon = iconData.icon;

  const { styles, colors } = getStyles(theme, {
    rotation: iconData.rotation,
    size,
    isHighlighted,
  });
  return (
    <View style={styles.container}>
      <Icon
        fill={isHighlighted ? colors.BACKGROUND : colors.PRIMARY}
        width={iconSize * 0.75}
        height={iconSize * 0.75}
      />
    </View>
  );
};

export default ControlElementIcon;
