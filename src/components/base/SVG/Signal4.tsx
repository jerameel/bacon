import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './SVG.props';

const Signal4 = (props: SVGProps) => {
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
        d="M503.785 124.254a432.019 432.019 0 00-495.57 0L8 124.4v27.437L237.778 480h36.444L504 151.841V124.4zm-100.458-18.088L213.968 390.2l-24.076-34.38L362.877 92.583a395.92 395.92 0 0140.45 13.583zM286.4 79.278a400.017 400.017 0 0143.232 5.631l-159.49 242.7-26.536-37.9zM123.963 261.664l-22.8-32.563 97.97-146.955a402.727 402.727 0 0149.324-3.946zm30.751-170.579l-73.253 109.88-41.6-59.418a398.09 398.09 0 01114.853-50.462zM256 450.232l-22.331-31.892 199.315-298.972a401.8 401.8 0 0139.16 22.179z"
      />
    </Svg>
  );
};

export default Signal4;
