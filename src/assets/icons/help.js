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
        strokeWidth="25"
        d="M256 80a176 176 0 10176 176A176 176 0 00256 80z"></Path>
      <Path
        fill={props.fill2}
        stroke={props.fill}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="27"
        d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296"></Path>
      <Circle
        fill={props.fill}
        stroke={props.fill}
        cx="250"
        cy="348"
        r="20"></Circle>
    </Svg>
  );
}

export default SvgComponent;
