import React from "react";
import Svg, { Circle, Path, G,Text,TSpan,Rect,Ellipse,Defs,Stop } from "react-native-svg"


function LockIcon({height=24,width=24,style}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Layer 2"
      viewBox="0 0 24 24"
      {...style}
    >
      <G fill="#444251">
        <Path
          d="M17 8h-7V6a2 2 0 014 0 1 1 0 002 0 4 4 0 00-8 0v2H7a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3v-8a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H7a1 1 0 01-1-1v-8a1 1 0 011-1h10a1 1 0 011 1z"
          data-name="Path 134"
        ></Path>
        <Path
          d="M12 12a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1z"
          data-name="Path 135"
        ></Path>
      </G>
    </Svg>
  );
}

export default LockIcon;
