import React from "react";
import Svg, { Circle, Path, G,Text,TSpan,Rect,Ellipse } from "react-native-svg"


export default function DollarSvg({height=20,width=12}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 20"
    >
      <Path
        fill="#444251"
        d="M14 11h-4a2 2 0 010-4h5a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-2V3a1 1 0 00-2 0v2h-1a4 4 0 000 8h4a2 2 0 010 4H9a1 1 0 01-1-1 1 1 0 00-2 0 3 3 0 003 3h2v2a1 1 0 002 0v-2h1a4 4 0 000-8z"
        transform="translate(-6 -2)"
      ></Path>
    </Svg>
  );
}


