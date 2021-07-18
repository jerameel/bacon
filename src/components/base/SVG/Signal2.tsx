import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const Signal2 = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      aria-hidden="true"
      width={width || '1em'}
      height={height || '1em'}
      viewBox="0 0 512 512"
      {...props}>
      <Path
        fill={fill || '#626262'}
        d="M503.785 124.254a432.019 432.019 0 00-495.57 0L8 124.4v27.438L86.881 264.5 237.778 480h36.444l150.9-215.5L504 151.842V124.4zm-313.961 231.47l75.96-117.392a240.089 240.089 0 0143.276 5.686l-95.22 146zm-19.809-28.291l-38.265-54.649a238.218 238.218 0 0194.9-32.873zm63.606 90.838l107.373-164.639a239.338 239.338 0 0139.256 19.152L256 450.232zm165.018-171.748a272.034 272.034 0 00-285.278 0l-73.5-104.976a400.039 400.039 0 01432.288 0z"
      />
    </Svg>
  );
};

export default Signal2;
