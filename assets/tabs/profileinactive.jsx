import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const ProfileInactive = (props) => (
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
      d="M20.1601 18.87C20.0601 18.86 19.9401 18.86 19.8301 18.87C17.4501 18.79 15.5601 16.84 15.5601 14.44C15.5601 11.99 17.5401 10 20.0001 10C22.4501 10 24.4401 11.99 24.4401 14.44C24.4301 16.84 22.5401 18.79 20.1601 18.87Z"
      stroke="#FDFDFD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.16 22.56C12.74 24.18 12.74 26.82 15.16 28.43C17.91 30.27 22.42 30.27 25.17 28.43C27.59 26.81 27.59 24.17 25.17 22.56C22.43 20.73 17.92 20.73 15.16 22.56Z"
      stroke="#FDFDFD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ProfileInactive;