import React from "react";
import PropTypes from "prop-types";

const QuoteStart = ({ fillColor, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 71) / 122}
      fill="none"
      viewBox="0 0 122 71"
    >
      <path
        fill={fillColor}
        d="M121.63.259a2602.364 2602.364 0 00-5.477 23.875 949.89 949.89 0 00-4.916 24.578c-1.498 7.959-2.762 15.262-3.792 21.91H68.12l-1.966-3.09c1.686-6.835 3.839-14.091 6.46-21.77a588.526 588.526 0 018.708-23.313c3.184-7.865 6.367-15.262 9.55-22.19h30.758zm-65.588 0a2622.033 2622.033 0 00-5.477 23.875 950.284 950.284 0 00-4.916 24.578c-1.498 7.959-2.762 15.262-3.792 21.91H2.533l-1.967-3.09c1.686-6.835 3.84-14.091 6.46-21.77a588.634 588.634 0 018.708-23.313c3.184-7.865 6.367-15.262 9.55-22.19h30.758z"
      ></path>
    </svg>
  );
};

QuoteStart.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number, 
};

QuoteStart.defaultProps = {
  fillColor: "#fff", 
  size: 122, 
};

export default QuoteStart;
