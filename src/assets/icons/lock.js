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
      viewBox="0 0 24 24">
      <Path
        fill={props.fill}
        d="M12 1C8.676 1 6 3.676 6 7v1c-1.093 0-2 .907-2 2v10c0 1.093.907 2 2 2h12c1.093 0 2-.907 2-2V10c0-1.093-.907-2-2-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v1H8V7c0-2.276 1.724-4 4-4zm-6 7h12v10H6V10zm6 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></Path>
    </Svg>
  );
}

export default SvgComponent;
