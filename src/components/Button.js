import React from "react";
import "./css/Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--small", "btn--medium", "btn--large"];

function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  disabled,
  ...props
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];
  return (
    <button
      className={"btn " + checkButtonStyle + " " + checkButtonSize}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
