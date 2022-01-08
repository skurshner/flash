import React from "react";
import Icon from "./Icons";

const Button = ({
  variant,
  fullWidth = false,
  type,
  text = "",
  icon = "",
  clickHandler,
}) => {
  // determine which variant of button to use
  const defaultButtonStyle =
    "py-3 px-4 text-base font-semibold rounded-md shadow";

  const getButtonStyle = variant =>
    variant === "primary"
      ? `${defaultButtonStyle} bg-indigo-50 text-indigo-600`
      : "";

  const getFullWidth = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      className={`flex justify-center ${getButtonStyle(
        variant
      )} ${getFullWidth}`}
      onClick={clickHandler}
    >
      <Icon
        name={icon}
        margin={!!text}
        color={variant === "primary" ? "dark" : "light"}
      />
      {text}
    </button>
  );
};

export default Button;
