import React, { useState } from "react";
import Dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StyledDatePicker } from "./style";
import { useTheme } from "styled-components";
function Date({ width, label }) {
  const theme = useTheme();
  const lightest = theme.COLORS.lightest;

  const [value, setValue] = useState(Dayjs);
  return (
    <div>
      <div
        style={{
          fontFamily: theme.FONTS.join(", "),
          fontSize: "0.8rem ",
          fontWeight: "600",
          color: lightest,
          marginTop: 10,
        }}
      >
        {label}
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <div style={{ width: width }}>
            <StyledDatePicker
              theme={theme}
              sx={{
                input: { color: lightest },
                width: "100%",
              }}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default Date;
