import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = ({color = "#292526", size = 20, ...props}) => (
  <Svg
    width={13}
    height={21}
    viewBox="0 0 36 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M24 6L18 10L12 6C10.8285 7.01882 8.14141 8.58687 8.00697 10.2913C7.94868 11.0302 8.25767 11.4343 8.87564 12.2424C10.2233 14.0048 11.7598 15.0402 11.7598 18H24.2402C24.2402 15.0402 25.7767 14.0048 27.1244 12.2424C27.7423 11.4343 28.0513 11.0302 27.993 10.2913C27.8586 8.58687 25.1715 7.01883 24 6Z"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M33.7264 33.6164C32.3178 28.2358 28.7315 23.3004 26.3621 20.4737C24.6627 18.4463 23.4082 18 20.7408 18H15.2592C12.5918 18 11.3373 18.4463 9.63786 20.4737C7.26846 23.3004 3.68221 28.2358 2.27355 33.6164C1.41366 36.9008 2.58128 38.6985 5.77292 39.8601C8.64248 40.9045 12.8742 42 18 42C23.1258 42 27.3575 40.9045 30.2271 39.8601C33.4187 38.6985 34.5863 36.9008 33.7264 33.6164Z"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 6V2"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M24 6V2"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 28C22 28 26 34 26 41M14 28C14 28 10 34 10 41"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
