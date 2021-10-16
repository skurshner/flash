import React from "react";

const Button = ({ variant, type, text = "", icon = "", clickHandler }) => {
  // determine which variant of button to use
  const getButtonStyle = variant => `btn btn-${variant} btn-lg`;

  // set the icon for the button, trash icon has no margin
  const getIcon = icon => {
    if (icon === "trash-fill") {
      return `bi bi-${icon}`;
    } else if (icon) {
      return `bi bi-${icon} mr-2`;
    } else {
      return "";
    }
  };

  return (
    <button
      type={type}
      className={getButtonStyle(variant)}
      onClick={clickHandler}
    >
      <i className={getIcon(icon)}></i>
      {text}
    </button>
  );
};

export default Button;
