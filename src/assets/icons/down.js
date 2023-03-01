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
        d="M352 368h112V256"></Path>
      <Path
        fill={props.fill2}
        stroke={props.stroke2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M48 144l121.37 121.37a32 32 0 0045.26 0l50.74-50.74a32 32 0 0145.26 0L448 352"></Path>
    </Svg>
  );
}

export default SvgComponent;
