import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const LetterY = (props: SVGProps) => {
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
        d="M35.28 10.464a2 2 0 01.256 2.816L26 24.724V36a2 2 0 01-4 0V24.724L12.464 13.28a2 2 0 113.072-2.56L24 20.876l8.464-10.156a2 2 0 012.816-.256z"
        fill={fill || '#000'}
      />
    </Svg>
  );
};

export default LetterY;
