import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      style={props.style}
      fill={props.fill2}
      stroke={props.stroke}
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512">
      <Path
        fill={props.fill2}
        stroke={props.fill}
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"></Path>
      <Path
        fill={props.fill2}
        stroke={props.fill}
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"></Path>
      <Path
        fill={props.fill2}
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"></Path>
      <Path
        fill={props.fill}
        stroke={props.fill}
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M256 48v416m208-208H48"></Path>
    </Svg>
  );
}

export default SvgComponent;
