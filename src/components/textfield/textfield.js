import React from "react";
import { useTheme } from "styled-components";
import { StyledTextField } from "./style";
import { InputAdornment } from "@mui/material";

function TextInput({ label, icon, error, helperText, control, onChange }) {
  const theme = useTheme();
  const lightest = theme.COLORS.lightest;

  return (
    <div>
      <div
        style={{
          fontFamily: theme.FONTS.join(", "),
          fontSize: "0.8rem ",
          fontWeight: "600",
          color: lightest,
          marginBottom: -10,
          marginTop: 10,
        }}
      >
        {label}
      </div>
      <StyledTextField
        theme={theme}
        sx={{ input: { color: lightest } }}
        id="outlined-basic"
        focused
        fullWidth
        variant="outlined"
        margin="normal"
        InputProps={{
          endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
        }}
        error={error}
        helperText={helperText || ""}
        control={control}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
