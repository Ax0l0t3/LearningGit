import React, {useState} from "react";
import '../Styles/nxtButtnComponent.css';

const NxtButtn = () => {
  
  const [oldRadius, setOldRadius] = useState(3);
  
  const handleMouseEnter = () => {
    setOldRadius(3.5);
  };
  const handleMouseLeave = () => {
    setOldRadius(3);
  };
  
  return (
    <svg onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }
      className="next"
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
          cx={104.951}
          cy={96.014}
          r={oldRadius}
          fill= "#e88e64"
        />
        <path
          style={{
            fill: "#fff",
            strokeWidth: 0.0599972,
          }}
          d="M104.12 93.86a.566.566 0 0 0-.299 1.058l1.899 1.096-1.9 1.097a.566.566 0 1 0 .567.982l2.715-1.568.016-.009a.574.574 0 0 0 .11-.076l.003-.002h.001l.03-.03.009-.01.002-.002a.695.695 0 0 0 .038-.046l.003-.003.006-.01a.456.456 0 0 0 .024-.038l.001-.001c0-.002.002-.004.003-.005l.02-.04.01-.02a.388.388 0 0 0 .013-.034l.006-.016a.446.446 0 0 0 .01-.036l.005-.021a.285.285 0 0 0 .005-.03l.003-.026.003-.03V95.989l-.003-.03-.003-.027-.005-.029-.005-.021a.377.377 0 0 0-.01-.037l-.004-.01-.002-.004c-.004-.013-.01-.026-.015-.038l-.007-.017-.02-.04-.004-.005v-.002l-.025-.038-.006-.01-.003-.002-.02-.026-.018-.02c0-.001 0-.002-.002-.003l-.009-.009-.03-.03-.004-.002a.56.56 0 0 0-.11-.076l-.015-.01-2.715-1.567a.567.567 0 0 0-.269-.076z"
        />
      </g>
    </svg>
  );
}

export default NxtButtn;
