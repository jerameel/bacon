import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const LetterB = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      aria-hidden="true"
      width={width || '1em'}
      height={height || '1em'}
      viewBox="0 0 48 48"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 12a2 2 0 012-2h10a8 8 0 015.292 14A8 8 0 0126 38H16a2 2 0 01-2-2V12zm12 10a4 4 0 000-8h-8v8h8zm-8 4h8a4 4 0 010 8h-8v-8z"
        fill={fill || '#000'}
      />
    </Svg>
  );
};

export default LetterB;
