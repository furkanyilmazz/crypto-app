import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G, Circle, Rect} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      width={props.width}
      height={props.height}
      style={props.style}
      viewBox="0 0 512 512">
      <Rect
        width="448"
        height="256"
        x="32"
        y="80"
        fill={props.fill2}
        stroke={props.fill}
        strokeLinejoin="round"
        strokeWidth="32"
        rx="16"
        ry="16"
        transform="rotate(180 256 208)"></Rect>
      <Path
        fill={props.fill}
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M64 384h384M96 432h320"></Path>
      <Circle
        cx="256"
        cy="208"
        r="80"
        fill={props.fill}
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"></Circle>
      <Path
        fill={props.fill}
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80m368 176a80 80 0 00-80 80M32 256a80 80 0 0180 80"></Path>
    </Svg>
  );
}

export default SvgComponent;
