import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/system"; // Import from @mui/system for sx prop

export const StyledDatePicker = styled(DatePicker)((props) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 7,
    height: 50,
    overflow: "hidden",
    border: `1.2px solid ${`${props.theme.COLORS.lightest}`}`,
    transition: "border 0.3s, box-shadow 0.3s",

    ":hover": {
      border: `0.5px solid ${`${props.theme.COLORS.lightest}`} !important`,
      boxShadow: `-1px 1px 4px 4px ${(props) => props.theme.COLORS.lightest}`,
    },

    ":focus-within": {
      border: `0.5px solid ${`${props.theme.COLORS.lightest}`} !important`,
    },
  },

  "& .MuiOutlinedInput-root.Mui-disabled": {
    padding: "0.5em 0.5em 0.5em 0.5em",
    ":hover": {
      border: `1px solid ${`${props.theme.COLORS.orange}`} !important`,
      boxShadow: "none",
    },
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSvgIcon-root": {
    color: `${`${props.theme.COLORS.lightest}`}`,
    paddingRight: 4,
  },
}));
