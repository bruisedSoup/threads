import * as React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={40} height={40} rx={20} fill="white" fillOpacity={0.05} />
    <Path
      d="M24.884 10C22.893 10 21.111 10.9888 20 12.5056C18.889 10.9888 17.107 10 15.116 10C11.739 10 9 12.809 9 16.2809C9 17.618 9.209 18.8539 9.572 20C11.31 25.618 16.667 28.9775 19.318 29.8989C19.692 30.0337 20.308 30.0337 20.682 29.8989C23.333 28.9775 28.69 25.618 30.428 20C30.791 18.8539 31 17.618 31 16.2809C31 12.809 28.261 10 24.884 10Z"
      fill="white"
    />
    <Circle cx={20} cy={34} r={2} fill="white" />
  </Svg>
);
export default SVGComponent;
