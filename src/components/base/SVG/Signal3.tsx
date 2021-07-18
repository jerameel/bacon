import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const Signal3 = (props: SVGProps) => {
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
        d="M503.785 124.254a432.019 432.019 0 00-495.57 0L8 124.4v27.438l33 47.126L237.778 480h36.444l196.783-281.036 33-47.122V124.4zM189.87 355.789l125.621-192.127a317.213 317.213 0 0142.184 10.981L213.968 390.2zm-19.77-28.236l-26.453-37.778 89.523-130.843q11.354-.8 22.83-.8 12.2 0 24.276.918zm-46.064-65.786l-38.248-54.622a317.977 317.977 0 01104.534-42.258zm109.633 156.574l154.47-231.7a320.459 320.459 0 0138.073 20.509L256 450.232zm210.91-237.427a351.947 351.947 0 00-377.158 0l-27.565-39.367a400.039 400.039 0 01432.288 0z"
      />
    </Svg>
  );
};

export default Signal3;
