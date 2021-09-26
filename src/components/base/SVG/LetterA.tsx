import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const LetterA = (props: SVGProps) => {
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
        d="M24 10a2 2 0 011.846 1.23l7.483 17.96.035.084 2.482 5.957a2 2 0 01-3.692 1.538L30.167 32H17.833l-1.987 4.77a2 2 0 01-3.692-1.54l2.482-5.956a2.01 2.01 0 01.035-.085l7.483-17.958A2 2 0 0124 10zm-4.5 18h9L24 17.2 19.5 28z"
        fill={fill || '#000'}
      />
    </Svg>
  );
};

export default LetterA;
