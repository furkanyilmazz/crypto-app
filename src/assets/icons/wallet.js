import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G, Rect} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      style={props.style}
      fill={props.fill2}
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512
      512">
      <Rect
        width="416"
        height="288"
        x="48"
        y="144"
        fill="none"
        stroke={props.fill}
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
        ry="48"></Rect>
      <Path
        fill={props.fill2}
        stroke={props.fill}
        strokeLinejoin="round"
        strokeWidth="32"
        d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"></Path>
      <Path
        fill={props.fill}
        stroke={props.stroke}
        d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"></Path>
    </Svg>
  );
}

export default SvgComponent;
