import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const Terminal = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      aria-hidden="true"
      width={width || '1em'}
      height={height || '1em'}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M5 4h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm0 1a2 2 0 0 0-2 2h17a2 2 0 0 0-2-2H5zM3 18a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8H3v10zm14 0h-5v-1h5v1zM6 10.5l.707-.707L10.914 14l-4.207 4.207L6 17.5 9.5 14 6 10.5z"
        fill={fill || '#000'}
      />
    </Svg>
  );
};

export default Terminal;
