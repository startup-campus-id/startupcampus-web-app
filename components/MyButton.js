import { Button } from "@mui/material";
import React from "react";

const MyButton = ({
  children,
  variant = "contained",
  color = "sc_blue",
  padding,
  shadow,
  width,
  borderRadius,
  isDropdown,
  textAlign,
  ...args
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      sx={{
        width: width ?? "unset",
        padding: padding ?? "13px 28px",
        borderRadius: borderRadius ?? "5px",
        textTransform: "capitalize",
        textAlign: textAlign??"start",
        boxShadow: shadow ?? "0px 16px 40px rgba(112, 144, 176, 0.2)",
        "&:hover": {
          backgroundColor: isDropdown ? "unset" : null,
        },
      }}
      {...args}
    >
      {children}
    </Button>
  );
};

export default MyButton;
