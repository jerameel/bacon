import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const BluetoothOff = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 32 32"
      {...props}>
      <Path
        d="M28 26.59L5.41 4 4 5.41 14.59 16 7 23.59 8.41 25 15 18.41V29a1 1 0 00.58.91A1.06 1.06 0 0016 30a1 1 0 00.65-.24l6.3-5.4L26.59 28zm-11 .24v-8.42l4.53 4.53zM17 12.75V5.17l4.53 3.89-4.11 4.11 1.41 1.41 4.88-4.87A1 1 0 0024 9a1 1 0 00-.35-.72l-7-6a1 1 0 00-1.07-.15A1 1 0 0015 3v7.75z"
        fill={fill || '#626262'}
      />
      <Path fill="rgba(0, 0, 0, 0)" d="M0 0h32v32H0z" />
    </Svg>
  );
};

export default BluetoothOff;
