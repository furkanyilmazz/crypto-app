import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

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
      <Path
        fill={props.fill}
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></Path>
      <Path
        fill={props.fill2}
        stroke={props.stroke2}
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></Path>
    </Svg>
  );
}

export default SvgComponent;
