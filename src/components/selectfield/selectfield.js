import React, { useState } from "react";
import { useTheme } from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { StyledSelect } from "./styles";
function Selectfield({ label, values }) {
  const theme = useTheme();
  const lightest = theme.COLORS.lightest;
  const orangecolor = theme.COLORS.orange;

  const List_values = values;
  const [selectedValue, setSelectedValue] = useState(List_values[0]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const MenuProps = {
    PaperProps: {},
  };
  return (
    <div>
      <InputLabel
        style={{
          fontFamily: theme.FONTS.join(", "),
          fontSize: "0.8rem",
          fontWeight: "600",
          color: lightest,
          marginTop: 10,
        }}
      >
        {label}
      </InputLabel>
      <StyledSelect
        lightcolor={lightest}
        orangecolor={orangecolor}
        sx={{
          color: lightest,
          height: 50,
          width: "100%",
          marginBottom: 1,
        }}
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={selectedValue}
        onChange={handleChange}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
      >
        {List_values.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </StyledSelect>
    </div>
  );
}

export default Selectfield;
