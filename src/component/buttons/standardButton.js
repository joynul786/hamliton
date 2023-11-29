import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StandardButton = ({
  type,
  link,
  buttonText,
  color,
  variant,
  startIcon,
  endIcon,
  onClick,
  ...props
}) => {
  const ButtonComponent = () => (
    <Button
      type={type}
      disableElevation
      variant={variant || "contained"}
      color={color || "secondary"}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      {...props}
    >
      {buttonText}
    </Button>
  );

  return (
    <>
      {link ? (
        <Link to={link}>
          <ButtonComponent />
        </Link>
      ) : (
        <ButtonComponent />
      )}
    </>
  );
};

export default StandardButton;
