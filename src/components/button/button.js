import React from "react";
import Button from "@mui/material/Button";

function ContainedButton({ text, disable, color, width, bgcolor, type }) {
  return (
    <Button
      variant="contained"
      disabled={disable}
      type={type}
      sx={{
        backgroundColor: color,
        color: bgcolor,
        width: width,
        height: 50,
        marginTop: 2,
        transition: "background-color 0.3s, color 0.3s",
        ":hover": {
          bgcolor: "transparent",
          boxShadow: 0,
          border: `1px solid ${color}`,
          color: { color },
        },
      }}
    >
      {text}
    </Button>
  );
}

export default ContainedButton;
