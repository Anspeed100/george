import React from "react";
import PropTypes from "prop-types";

const QuoteEnd = ({ fillColor, size }) => {
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
        d="M0 70.363a2622.867 2622.867 0 005.477-23.876 950.148 950.148 0 004.916-24.578C11.89 13.951 13.155 6.648 14.185 0H53.51l1.966 3.09c-1.686 6.835-3.84 14.091-6.46 21.769a588.37 588.37 0 01-8.708 23.314c-3.184 7.864-6.367 15.261-9.55 22.19H0zm65.588 0a2621.813 2621.813 0 005.477-23.876 950.194 950.194 0 004.916-24.578C77.479 13.951 78.743 6.648 79.773 0h39.324l1.966 3.09c-1.685 6.835-3.838 14.091-6.46 21.769a587.756 587.756 0 01-8.708 23.314c-3.183 7.864-6.366 15.261-9.55 22.19H65.588z"
      ></path>
    </svg>
  );
};

QuoteEnd.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number, 
};

QuoteEnd.defaultProps = {
  fillColor: "#fff", 
  size: 122,
};

export default QuoteEnd;
