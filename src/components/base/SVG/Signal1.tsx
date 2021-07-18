import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const Signal1 = (props: SVGProps) => {
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
        d="M237.778 480h36.444L504 151.842V124.4l-.215-.15a432.019 432.019 0 00-495.57 0L8 124.4v27.438zm-58.911-139.925a158.219 158.219 0 01154.266 0L256 450.232zM256 78.128a397.867 397.867 0 01216.144 63.419L351.561 313.758a190.142 190.142 0 00-191.122 0L39.856 141.547A397.867 397.867 0 01256 78.128z"
      />
    </Svg>
  );
};

export default Signal1;
