import {
  Box,
  Typography,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  Button,
  Paper,
  ThemeProvider,
  createTheme,
  List,
  ListItem
} from "@mui/material";

import RadioInput from "../radio_input/radio_input";
import { useState } from "react";
import { ExercisePaper } from "./styles.js";
import { useRadioGroup } from "@mui/material";

// const theme = createTheme();

export default function SingleChoiceEx({ question }) {
  // Lógica para verificação de alternativas
  const [optionSelected, setOptionSelected] = useState("");
  const [error, setError] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [disableInputs, setDisableInputs] = useState(false);
  const [attempts, setAttempts] = useState(1);
  const [showCorrectAn, setShowCorrectAn] = useState("");

  const handleOption = () => {
    // Sem seleção
    if (!optionSelected) {
      setFeedback("Selecione uma das opções");
      return;
    }

    // Verifica se o usuário acertou
    if (question.correct_answer == optionSelected) {
      setFeedback("Resposta correta!");
      setError(false);
      setDisableInputs(true);
    } else {
      setFeedback("Resposta incorreta");
      setError(true);
      setAttempts(attempts + 1);

      if (attempts == 3) {
        setDisableInputs(true);
        setFeedback("Acabaram suas tentativas!");
        let option = question.options.find(
          (opt) => opt.id == question.correct_answer[0]
        );
        setShowCorrectAn(option.label);
      }
    }
  };

  /*  Exemplo com useEffect
    useEffect(() => {
    if (!optionSelected)
        return
    
    if (question.correct_answer == optionSelected){
        setFeedback("Correto!")
    }
    else{
        setFeedback("Incorreto!")
    }
    }, [optionSelected])
  */

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
            {question.id.toString()} - {question.title}
          </FormLabel>
          <RadioGroup
            value={optionSelected}
            onChange={(e) => setOptionSelected(e.target.value)}
          >
            {question.options.map((option) => (
              <RadioInput
                key={option.id}
                disabled={disableInputs}
                option={option}
              />
            ))}
          </RadioGroup>
          <FormHelperText>{feedback}</FormHelperText>
          {showCorrectAn && (
            <Box sx={{ padding: "12px"}}>
              <Typography>As alternativas corretas são:</Typography>
              <List>
                <ListItem> {showCorrectAn}</ListItem>
              </List>
            </Box>
          )}
        </FormControl>
        <Button
          disabled={disableInputs}
          onClick={() => handleOption()}
          type="submit"
        >
          Enviar
        </Button>
      </ExercisePaper>
    </Box>
  );
}
