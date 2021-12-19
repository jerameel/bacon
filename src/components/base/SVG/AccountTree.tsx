import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const AccountTree = (props: SVGProps) => {
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
        d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"
        fill={fill || '#000'}
      />
    </Svg>
  );
};

export default AccountTree;
