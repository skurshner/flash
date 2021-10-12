import React from "react";

const Button = ({ name, type, text, icon }) => {
  const getButtonStyle = name => {
    if (name === "create" || name === "view") {
      return "btn btn-secondary btn-lg";
    }
    if (name === "study") {
      return "btn btn-primary btn-lg";
    }
  };

  const getIcon = icon => {
    if (icon === "add") {
      return "bi bi-plus-lg";
    }
    if (icon === "view") {
      return "bi bi-eye-fill";
    }
    if (icon === "study") {
      return "bi bi-book-half";
    }
  };

  return (
    <button type={type} className={getButtonStyle(name)}>
      <i style={{ paddingRight: "12px" }} className={getIcon(icon)}></i>
      {text}
    </button>
  );
};

export default Button;
