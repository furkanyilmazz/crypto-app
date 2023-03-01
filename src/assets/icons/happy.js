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
      <Circle cx="184" cy="232" r="24" fill={props.fill}></Circle>
      <Path
        fill={props.fill}
        d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z"></Path>
      <Circle fill={props.fill} cx="328" cy="232" r="24"></Circle>
      <Circle
        cx="256"
        cy="256"
        r="208"
        stroke={props.fill}
        strokeMiterlimit="10"
        strokeWidth="32"></Circle>
    </Svg>
  );
}

export default SvgComponent;
