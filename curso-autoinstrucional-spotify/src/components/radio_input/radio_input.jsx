import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

export default function RadioInput({ option }) {
  return (
   <FormControlLabel 
        value={option.id}
        label={option.label} 
        control={<Radio />} 
    />
  );
}
