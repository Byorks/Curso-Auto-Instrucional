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
} from "@mui/material";
import RadioInput from "../radio_input/radio_input";
import { useState } from "react";

export default function SingleChoiceEx({ question }) {
  const [optionSelected, setOptionSelected] = useState("");
  const [error, setError] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleOption = () => {
    if (!optionSelected) {
      setFeedback("Selecione uma das opções");
      return;
    }

    if (question.correct_answer == optionSelected) {
      setFeedback("Resposta correta!");
      setError(false);
    } else {
      setFeedback("Resposta incorreta");
      setError(true);
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
      <FormControl error={error}>
        <FormLabel>
          {question.id.toString()} - {question.title}
        </FormLabel>
        <RadioGroup
          value={optionSelected}
          onChange={(e) => setOptionSelected(e.target.value)}
        >
          {question.options.map((option) => (
            <RadioInput key={option.id} option={option} />
          ))}
        </RadioGroup>
        <FormHelperText>{feedback}</FormHelperText>
      </FormControl>
      <Button onClick={() => handleOption()} type="submit">
        Enviar
      </Button>
    </Box>
  );
}
