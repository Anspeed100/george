import React from "react";
import PropTypes from "prop-types";

const Divider = ({ height, color, width, marginY  }) => {
  return (
    <div
      className="mx-auto"
      style={{
        height,
        backgroundColor: color,
        width,
        margin: `${marginY} auto`,
      }}
    ></div>
  );
};

Divider.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  marginY: PropTypes.string,
};

Divider.defaultProps = {
  height: "3px",
  color: "#b91f26",
  width: "70%",
  marginY: "8px",
};

export default Divider;
