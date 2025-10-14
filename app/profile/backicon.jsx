import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 15L4.64645 14.6464L4.29289 15L4.64645 15.3536L5 15ZM23.75 15.5C24.0261 15.5 24.25 15.2761 24.25 15C24.25 14.7239 24.0261 14.5 23.75 14.5V15V15.5ZM12.5 7.5L12.1464 7.14645L4.64645 14.6464L5 15L5.35355 15.3536L12.8536 7.85355L12.5 7.5ZM5 15L4.64645 15.3536L12.1464 22.8536L12.5 22.5L12.8536 22.1464L5.35355 14.6464L5 15ZM5 15V15.5H23.75V15V14.5H5V15Z"
      fill="#222222"
    />
  </Svg>
);
export default BackIcon;
