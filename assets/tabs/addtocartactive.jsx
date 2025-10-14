import * as React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";
const CartActive = (props) => (
  <Svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={40} height={40} rx={20} fill="white" fillOpacity={0.05} />
    <Path
      d="M16.4 14.5H23.6C27 14.5 27.34 16.09 27.57 18.03L28.47 25.53C28.76 27.99 28 30 24.5 30H15.51C12 30 11.24 27.99 11.54 25.53L12.44 18.03C12.66 16.09 13 14.5 16.4 14.5Z"
      fill="#FDFDFD"
    />
    <Path
      d="M16 16V12.5C16 11 17 10 18.5 10H21.5C23 10 24 11 24 12.5V16"
      fill="#FDFDFD"
    />
    <Rect x={22} y={12} width={8} height={8} rx={4} fill="#F13658" />
    <Rect x={22} y={12} width={8} height={8} rx={4} stroke="white" />
    <Circle cx={20} cy={36} r={2} fill="white" />
  </Svg>
);
export default CartActive;