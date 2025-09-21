// import styled from "@emotion/styled";
import { styled } from "@mui/material/styles";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

// Theme está sendo inserida para caso eu queira alguma cor customizada 
const Alternative = styled(FormControlLabel)(({ theme }) => ({
  width: "100%",
  height: "auto",
  // Exemplo -> pegando cor
  // backgroundColor: theme.palette.violet 
}));

export default function RadioInput({ option, disabled = false }) {
  return (
    <Alternative
      value={option.id}
      label={option.label}
      disabled={disabled}
      control={<Radio />}
    />
  );
}
