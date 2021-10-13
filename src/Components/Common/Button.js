import React from "react";

const Button = ({ variant, type, text = "", icon = "" }) => {
  const getButtonStyle = variant => {
    if (variant === "secondary") {
      return "btn btn-secondary btn-lg";
    }
    if (variant === "primary") {
      return "btn btn-primary btn-lg";
    }
    if (variant === "danger") {
      return "btn btn-danger btn-lg";
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
    if (icon === "trash") {
      return "bi bi-trash-fill";
    } else {
      return "";
    }
  };

  return (
    <button type={type} className={getButtonStyle(variant)}>
      <i style={{ paddingRight: "12px" }} className={getIcon(icon)}></i>
      {text}
    </button>
  );
};

export default Button;
