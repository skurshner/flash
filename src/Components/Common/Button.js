import React from "react";

const Button = ({ variant, type, text = "", icon = "", clickHandler }) => {
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
      return "bi bi-plus-lg mr-2";
    }
    if (icon === "view") {
      return "bi bi-eye-fill mr-2";
    }
    if (icon === "study") {
      return "bi bi-book-half mr-2";
    }
    if (icon === "trash") {
      return "bi bi-trash-fill";
    }
    if (icon === "edit") {
      return "bi bi-pencil-fill mr-2";
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
