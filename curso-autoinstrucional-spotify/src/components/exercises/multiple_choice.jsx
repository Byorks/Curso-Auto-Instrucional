import {
  Box,
  Checkbox,
  Typography,
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  FormHelperText,
  Button,
} from "@mui/material";

import RadioInput from "../radio_input/radio_input";

export default function MultipleChoiceEx({
  id,
  title,
  correct_answer,
  options,
}) {
  console.log(options);
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormControl>
        <FormLabel>
            {id} - {title}
          </FormLabel>
        <FormGroup>
          
          {options.map((option) =>  (
            <FormControlLabel
              key={option.id}
              label={option.label}
              control={<Checkbox />}
            />
          ))}
          
        </FormGroup>
      </FormControl>
      <Button type="input">Enviar</Button>
     </Box>
  );
}
