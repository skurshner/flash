import React from "react";
import Icon from "./Icons";

const Button = ({
  variant,
  fullWidth = false,
  type = "button",
  text = "",
  icon = "",
  clickHandler,
}) => {
  // determine which variant of button to use
  const defaultButtonStyle =
    "flex justify-center text-base font-semibold rounded-md";

  const buttonStyle = {
    primary: `${defaultButtonStyle} py-3 px-4 bg-indigo-50 text-indigo-600 shadow hover:bg-indigo-100 active:bg-indigo-200`,
    secondary: `${defaultButtonStyle} py-3 px-4 bg-indigo-600 text-indigo-50 shadow`,
    icon: `${defaultButtonStyle} p-3 text-indigo-50 hover:bg-indigo-600`,
    utility: `${defaultButtonStyle} p-3 text-indigo-600 hover:bg-indigo-200`,
  };

  const getFullWidth = fullWidth ? "w-full sm:w-auto" : "";

  return (
    <button
      type={type}
      className={` ${buttonStyle[variant]} ${getFullWidth}`}
      onClick={clickHandler}
    >
      <Icon
        name={icon}
        margin={!!text}
        color={
          variant === "primary" || variant === "utility" ? "dark" : "light"
        }
      />
      {text}
    </button>
  );
};

export default Button;
