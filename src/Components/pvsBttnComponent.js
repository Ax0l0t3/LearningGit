import React, { useState } from "react";
import '../Styles/prvsButtnComponent.css';

export const PrvsButtn = () => {
  
  const [oldRadius, setOldRadius] = useState(3);
  
  const handleMouseEnter = () => {
    setOldRadius(3.5);
  };
  const handleMouseLeave = () => {
    setOldRadius(3);
  };
  
  return (
    <svg onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }
      className="prevs"
      width={27}
      height={27}
      viewBox="0 0 7.144 7.144"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-101.379 -92.442)">
        <circle
          style={{
            fillOpacity: 1,
            strokeWidth: 0.170832,
          }}
          cx={-104.951}
          cy={96.014}
          r={oldRadius}
          transform="scale(-1 1)"
          fill= "#e88e64"
        />
        <path
          style={{
            fill: "#fff",
            strokeWidth: 0.0599972,
          }}
          d="M105.782 93.86a.566.566 0 0 1 .298 1.058l-1.898 1.096 1.898 1.097a.566.566 0 1 1-.567.982l-2.714-1.568-.016-.009a.574.574 0 0 1-.11-.076l-.003-.002-.03-.03-.01-.01-.002-.002a.695.695 0 0 1-.038-.046l-.003-.003-.006-.01a.456.456 0 0 1-.024-.038v-.001l-.004-.005-.02-.04-.01-.02a.388.388 0 0 1-.012-.034l-.006-.016a.446.446 0 0 1-.01-.036l-.005-.021a.285.285 0 0 1-.005-.03l-.003-.026-.003-.03V95.989l.003-.03c0-.01.002-.018.003-.027 0-.01.003-.02.005-.029 0-.007.003-.014.005-.021a.377.377 0 0 1 .01-.037l.003-.01.002-.004c.004-.013.01-.026.015-.038l.007-.017.021-.04c0-.002.002-.004.003-.005l.001-.002.024-.038.006-.01.003-.002.02-.026.018-.02.002-.003.009-.009.03-.03h.001l.003-.002a.56.56 0 0 1 .11-.076l.016-.01 2.714-1.567a.567.567 0 0 1 .269-.076z"
        />
      </g>
    </svg>
  );
}
