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
  Grow,
  Paper,
  List,
  ListItem,
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
  const [attempts, setAttempts] = useState(1);
  const [disableInputs, setDisableInputs] = useState();
  const [showCorrectAn, setShowCorrectAn] = useState(false);
  const [correctAn, setCorrectAn] = useState([]);

  const handleChoices = (event) => {
    if (!selectedList.includes(parseInt(event.target.name))) {
      setSelectedList([...selectedList, parseInt(event.target.name)]);
    } else {
      let toRemove = parseInt(event.target.name);
      setSelectedList((items) => items.filter((item) => item != toRemove));
    }
  };

  const verifyChoices = () => {
    if (selectedList.length == 0) {
      setFeedback("Selecione uma das opções");
      return;
    }
    if (
      selectedList.every(item => correct_answer.includes(item)) &&
      selectedList.length === correct_answer.length
    ) {
      setFeedback("Correto!");
      setDisableInputs(true);
      setError(false);
    } else {
      setFeedback("Incorreto!");
      setAttempts(attempts + 1);
      setError(true);
      if (attempts == 3) {
        setDisableInputs(true);
        setFeedback("Incorreto! Acabaram suas tentativas");
        setShowCorrectAn(true);
        setCorrectAn(options.filter((opt) => correct_answer.includes(opt.id)));
      }
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
                disabled={disableInputs}
              />
            ))}
          </FormGroup>
          <FormHelperText>{feedback}</FormHelperText>
          {/* Mostra as respostas corretas */}
          {showCorrectAn && (
            <Box sx={{ padding: "12px" }}>
              <Grow
                in={showCorrectAn}
                style={{
                  transformOrigin: "0,0,0",
                }}
                {...(showCorrectAn ? { timeout: 500 } : {})}
              >
                <Paper variant="outlined">
                  <Typography>As alternativas corretas são:</Typography>
                  <List>
                    {correctAn.map((option) => (
                      <ListItem key={option.id} >{option.label}</ListItem>
                    ))}
                  </List>
                </Paper>
              </Grow>
            </Box>
          )}
        </FormControl>
        <Button type="input" onClick={() => verifyChoices()}>
          Enviar
        </Button>
      </ExercisePaper>
    </Box>
  );
}
