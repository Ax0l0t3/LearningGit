import React from "react";
import '../Styles/dtailsButtnComponent.css';

const DtailsButtn = () => {
  
  return (
    <svg
    className="dtls"
    width={27}
    height={27}
    viewBox="0 0 7.144 7.144"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
    className="crcle"
      style={{
        fillOpacity: 1,
        strokeWidth: 0.170832,
      }}
      cx={3.572}
      cy={3.572}
      r={3}
      fill= "#e88e64"
    />
    <circle
      style={{
        fill: "#fff",
        strokeWidth: 0.18233,
      }}
      cx={3.572}
      cy={3.572}
      r={0.8}
    />
    <circle
      style={{
        fill: "#fff",
        strokeWidth: 0.18233,
      }}
      cx={1.659}
      cy={3.572}
      r={0.8}
    />
    <circle
      style={{
        fill: "#fff",
        strokeWidth: 0.18233,
      }}
      cx={5.536}
      cy={3.572}
      r={0.8}
    />
  </svg>
  );
}

export default DtailsButtn;