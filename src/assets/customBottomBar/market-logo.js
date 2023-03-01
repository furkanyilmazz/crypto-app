import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      style={props.style}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M26.9922 28.9434H30.0098C31.0352 28.9434 31.5527 28.4258 31.5527 27.3418V12.5078C31.5527 11.4238 31.0352 10.8965 30.0098 10.8965H26.9922C25.957 10.8965 25.4395 11.4238 25.4395 12.5078V27.3418C25.4395 28.4258 25.957 28.9434 26.9922 28.9434ZM18.4961 28.9434H21.5137C22.5391 28.9434 23.0566 28.4258 23.0566 27.3418V15.3105C23.0566 14.2266 22.5391 13.709 21.5137 13.709H18.4961C17.4609 13.709 16.9434 14.2266 16.9434 15.3105V27.3418C16.9434 28.4258 17.4609 28.9434 18.4961 28.9434ZM10 28.9434H13.0176C14.043 28.9434 14.5605 28.4258 14.5605 27.3418V18.0449C14.5605 16.9707 14.043 16.4434 13.0176 16.4434H10C8.96484 16.4434 8.44727 16.9707 8.44727 18.0449V27.3418C8.44727 28.4258 8.96484 28.9434 10 28.9434Z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgComponent;
