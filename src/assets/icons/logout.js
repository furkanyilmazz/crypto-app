import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G, Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
      width={props.width}
      height={props.height}
      style={props.style}>
      <Path
        fill={props.fill2}
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"></Path>
    </Svg>
  );
}

export default SvgComponent;
