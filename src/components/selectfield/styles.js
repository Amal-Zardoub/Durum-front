import Select from "@mui/material/Select";
import { styled } from "@mui/system"; // Import from @mui/system for sx prop

export const StyledSelect = styled(Select)((props) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 7,
    overflow: "hidden",
    border: `1.2px solid ${props.lightcolor}`,
    transition: "border 0.3s, box-shadow 0.3s",

    ":hover": {
      border: `0.5px solid ${props.lightcolor} !important`,
      boxShadow: `-1px 1px 4px 4px ${props.lightcolor}`,
    },

    ":focus-within": {
      border: `0.5px solid ${props.lightcolor}!important`,
    },
  },

  "& .MuiOutlinedInput-root.Mui-disabled": {
    padding: "0.5em 0.5em 0.5em 0.5em",
    ":hover": {
      border: `1px solid ${props.orangecolor} !important`,
      boxShadow: "none",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: `0.5px solid ${props.lightcolor}!important`,
  },
  "& .MuiSvgIcon-root": {
    color: props.lightcolor,
    paddingRight: 8,
  },
}));
