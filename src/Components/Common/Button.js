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
    secondary: `${defaultButtonStyle} py-3 px-4 bg-indigo-600 text-indigo-50 hover:bg-indigo-700 active:bg-indigo-800 shadow`,
    outline: `${defaultButtonStyle} py-2.5 px-3.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 active:bg-indigo-200 shadow border-2 border-indigo-600`,
    icon: `${defaultButtonStyle} p-3 text-indigo-50 hover:bg-indigo-600`,
    utility: `${defaultButtonStyle} p-3 text-indigo-600 hover:bg-indigo-200 active:bg-indigo-300`,
  };

  const getFullWidth = fullWidth ? "w-full sm:w-auto" : "";

  const iconStyle = {
    primary: "dark",
    secondary: "light",
    outline: "dark",
    icon: "light",
    utility: "dark",
  };

  return (
    <button
      type={type}
      className={` ${buttonStyle[variant]} ${getFullWidth}`}
      onClick={clickHandler}
    >
      <Icon name={icon} margin={!!text} color={iconStyle[variant]} />
      {text}
    </button>
  );
};

export default Button;
