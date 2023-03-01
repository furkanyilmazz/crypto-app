import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G, Rect, Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      style={props.style}
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512">
      <Rect
        width="416"
        height="384"
        x="48"
        y="80"
        fill="none"
        stroke={props.fill}
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"></Rect>
      <Circle cx="296" cy="232" r="24"></Circle>
      <Circle cx="376" cy="232" r="24"></Circle>
      <Circle cx="296" cy="312" r="24"></Circle>
      <Circle cx="376" cy="312" r="24"></Circle>
      <Circle cx="136" cy="312" r="24"></Circle>
      <Circle cx="216" cy="312" r="24"></Circle>
      <Circle cx="136" cy="392" r="24"></Circle>
      <Circle cx="216" cy="392" r="24"></Circle>
      <Circle cx="296" cy="392" r="24"></Circle>
      <Path
        fill={props.fill}
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M128 48v32m256-32v32"></Path>
      <Path
        fill={props.fill2}
        stroke={props.stroke2}
        strokeLinejoin="round"
        strokeWidth="32"
        d="M464 160H48"></Path>
    </Svg>
  );
}

export default SvgComponent;
