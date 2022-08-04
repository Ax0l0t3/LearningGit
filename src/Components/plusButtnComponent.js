import React, { useState } from "react"
import '../Styles/plusButtnComponent.css';

const PlusButtn = () => {

  const [oldRadius, setOldRadius] = useState(19);
  
  const handleMouseEnter = () => {
    setOldRadius(20);
  };
  const handleMouseLeave = () => {
    setOldRadius(19);
  };
  
  return (
  <svg onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }
    className="plus"
    width={43}
    height={43}
    viewBox="0 0 11.377 11.377"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(.26458 0 0 .26458 -231.572 -33.142)">
      <circle
        cx={896.732}
        cy={146.761}
        r={oldRadius}
        fill= "#e88e64"
      />
      <path
        style={{
          fill: "#fff",
          strokeWidth: 0.324508,
        }}
        d="M896.733 134.496a3.06 3.06 0 0 0-3.067 3.066v6.132h-6.132a3.06 3.06 0 0 0-3.068 3.067 3.06 3.06 0 0 0 3.068 3.066h6.132v6.132a3.06 3.06 0 0 0 3.067 3.066 3.06 3.06 0 0 0 3.066-3.066v-6.132h6.132a3.06 3.06 0 0 0 3.066-3.066 3.06 3.06 0 0 0-3.066-3.067h-6.132v-6.132a3.06 3.06 0 0 0-3.066-3.066z"
      />
    </g>
  </svg>
  );
}

export default PlusButtn;
