import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      style={props.style}
      fill={props.fill2}
      stroke={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512">
      <Path
        fill={props.fill2}
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"></Path>
      <Path
        fill={props.fill}
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 176v160m80-80H176"></Path>
    </Svg>
  );
}

export default SvgComponent;
