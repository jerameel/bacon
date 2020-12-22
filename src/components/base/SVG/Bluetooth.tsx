import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const Bluetooth = (props: SVGProps) => {
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
        d="M16 30a1.06 1.06 0 01-.42-.09A1 1 0 0115 29V18.41L8.41 25 7 23.59 14.59 16 7 8.41 8.41 7 15 13.59V3a1 1 0 01.58-.91 1 1 0 011.07.15l7 6A1 1 0 0124 9a1 1 0 01-.29.75L17.41 16l6.3 6.29A1 1 0 0124 23a1 1 0 01-.35.72l-7 6A1 1 0 0116 30zm1-11.59v8.42l4.53-3.89zm0-13.24v8.42l4.53-4.53z"
        fill={fill || '#000'}
      />
      <Path fill="rgba(0, 0, 0, 0)" d="M0 0h32v32H0z" />
    </Svg>
  );
};

export default Bluetooth;
