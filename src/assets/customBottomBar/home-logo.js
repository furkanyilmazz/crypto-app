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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.1476 28.0144C31.1476 30.9519 28.6521 33.3333 25.5738 33.3333H14.4262C11.3479 33.3333 8.85242 30.9519 8.85242 28.0144V21.5107C8.85242 20.5664 8.45932 19.6608 7.7596 18.9931C6.13843 17.446 6.34918 14.8827 8.20336 13.5959L16.7217 7.68398C18.6761 6.32755 21.3239 6.32755 23.2784 7.68398L31.7967 13.5959C33.6509 14.8827 33.8616 17.446 32.2404 18.9931C31.5407 19.6608 31.1476 20.5664 31.1476 21.5107V28.0144ZM20 28C21.4728 28 22.6667 26.8061 22.6667 25.3333C22.6667 23.8606 21.4728 22.6667 20 22.6667C18.5273 22.6667 17.3334 23.8606 17.3334 25.3333C17.3334 26.8061 18.5273 28 20 28Z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgComponent;
