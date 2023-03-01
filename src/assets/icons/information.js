import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G, Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512">
      <Path
        fill={props.fill2}
        stroke={props.fill}
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"></Path>
      <Path
        fill={props.fill}
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M220 220h32v116"></Path>
      <Path
        fill={props.fill}
        stroke={props.fill}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M208 340h88"></Path>
      <Path
        fill={props.fill}
        stroke={props.fill}
        d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"></Path>
    </Svg>
  );
}

export default SvgComponent;
