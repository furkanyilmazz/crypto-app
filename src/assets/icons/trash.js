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
        d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"></Path>
      <Path
        fill={props.fill}
        stroke={props.fill}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 112h352"></Path>
      <Path
        fill={props.fill}
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40m-64 64v224m-72-224l8 224m136-224l-8 224"></Path>
    </Svg>
  );
}

export default SvgComponent;
