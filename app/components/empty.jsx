import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg
    width={68}
    height={68}
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M25.5 19.8333L36.8333 19.8333"
      stroke="#222222"
      strokeLinecap="round"
    />
    <Path d="M25.5 42.5L34 42.5" stroke="#222222" strokeLinecap="round" />
    <Path
      d="M25.5 31.1667L42.5 31.1667"
      stroke="#222222"
      strokeLinecap="round"
    />
    <Path
      d="M53.8333 31.1667V14.5C53.8333 11.6716 53.8333 10.2574 52.9546 9.37868C52.0759 8.5 50.6617 8.5 47.8333 8.5H20.1666C17.3382 8.5 15.924 8.5 15.0453 9.37868C14.1666 10.2574 14.1666 11.6716 14.1666 14.5V53.5C14.1666 56.3284 14.1666 57.7426 15.0453 58.6213C15.924 59.5 17.3382 59.5 20.1666 59.5H34"
      stroke="#222222"
      strokeLinecap="round"
    />
    <Circle
      cx={49.5833}
      cy={49.5833}
      r={7.08333}
      stroke="#222222"
      strokeLinecap="round"
    />
    <Path d="M59.5 59.5L55.25 55.25" stroke="#222222" strokeLinecap="round" />
  </Svg>
);
export default SVGComponent;
