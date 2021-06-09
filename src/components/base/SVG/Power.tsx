import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const Power = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      aria-hidden="true"
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        fill="none"
        stroke={fill || '#626262'}
        strokeWidth={2}
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-13v8"
      />
    </Svg>
  );
};

export default Power;
