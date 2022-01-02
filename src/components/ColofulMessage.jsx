import React from "react";

const ColofulMessage = (props) => {
  const { color, message, size } = props;
  const contentStyle = {
    color,
    /*本来、CSSはfont-sizeと記載するが、Reeactの場合、-は無しでキャメルケースで記載する */
    fontSize: size
  };

  return <p style={contentStyle}>{message}</p>;
};

export default ColofulMessage;
