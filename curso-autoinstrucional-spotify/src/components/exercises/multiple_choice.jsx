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

import RadioInput from "../radio_input/radio_input.jsx";
import { ExercisePaper } from "./styles";
import { useState } from "react";

export default function MultipleChoiceEx({
  id,
  title,
  correct_answer,
  options,
}) {
  const [error, setError] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [feedback, setFeedback] = useState("");

  const handleChoices = (event) => {
    if (!selectedList.includes(parseInt(event.target.name))) {
      setSelectedList([...selectedList, parseInt(event.target.name)]);
    } else {
      let toRemove = parseInt(event.target.name);
      setSelectedList((items) => items.filter((item) => item != toRemove));
    }
  };

  console.log(selectedList);
  const isOnTheList = () => {};

  const verifyChoices = () => {
    if (selectedList.every((item) => correct_answer.includes(item))) {
      setFeedback("Correto!");
      setError(false);
    } else {
      setFeedback("Incorreto!");
      setError(true);
    }
  };

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
      <ExercisePaper sx={{ display: "flex", flexDirection: "column" }}>
        <FormControl error={error}>
          <FormLabel sx={{ width: "100%", textAlign: "left" }}>
            {id} - {title}
          </FormLabel>
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                name={option.id}
                key={option.id}
                label={option.label}
                control={<Checkbox />}
                onChange={handleChoices}
              />
            ))}
          </FormGroup>
          <FormHelperText>{feedback}</FormHelperText>
        </FormControl>
        <Button type="input" onClick={() => verifyChoices()}>
          Enviar
        </Button>
      </ExercisePaper>
    </Box>
  );
}
