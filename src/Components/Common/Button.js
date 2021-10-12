import React from "react";

const Button = ({ name, type, text, icon }) => {
  const getButtonStyle = name => {
    if (name === "create") {
      return "btn btn-secondary btn-lg";
    }
  };

  const getIcon = icon => {
    if (icon === "add") {
      return "bi bi-plus-lg";
    }
  };

  return (
    <button type={type} className={getButtonStyle(name)}>
      <i style={{ paddingRight: "8px" }} className={getIcon(icon)}></i>
      {text}
    </button>
  );
};

export default Button;
