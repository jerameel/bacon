import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const More = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 1024 1024"
      {...props}>
      <Path
        fill={fill || '#000'}
        d="M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"
      />
      <Path fill="rgba(0, 0, 0, 0)" d="M0 0h1024v1024H0z" />
    </Svg>
  );
};

export default More;
