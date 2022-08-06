import React, {useState} from "react";
import '../Styles/doneButtnComponent.css';

export const DoneButtn = () => {
  
  const [oldRadius, setOldRadius] = useState(12);
  
  const handleMouseEnter = () => {
    setOldRadius(13);
  };
  const handleMouseLeave = () => {
    setOldRadius(12);
  };
  
  return (
    <svg onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }
      className="doneB"
      width={27}
      height={27}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1 0 0 1 -1322.92 -328.852)">
        <circle
          style={{
            fillOpacity: 1,
            strokeWidth: 0.645666,
          }}
          cx={1336.421}
          cy={342.352}
          r={oldRadius}
          fill= "#e85b58"
        />
        <path
          style={{
            fill: "#fff",
            strokeWidth: 0.194236,
          }}
          d="M1342.944 335.752a1.503 1.503 0 0 0-1.344.754l-6.01 10.41-4.588-4.587a1.504 1.504 0 0 0-2.131 0c-.59.59-.59 1.54 0 2.13l5.967 5.968a1.5 1.5 0 0 0 1.02.44l.028.002c.021 0 .041 0 .063-.002.033 0 .067-.003.1-.005a1.502 1.502 0 0 0 1.174-.747l6.987-12.102a1.504 1.504 0 0 0-.551-2.059 1.506 1.506 0 0 0-.714-.203z"
        />
      </g>
    </svg>
  );
}
