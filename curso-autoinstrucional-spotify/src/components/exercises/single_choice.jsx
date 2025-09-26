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
  List,
  ListItem,
  Grow,
} from "@mui/material";

import RadioInput from "../radio_input/radio_input";
import { useState, useEffect } from "react";
import { ExercisePaper } from "./styles.js";
import { useParams } from "react-router-dom";

export default function SingleChoiceEx({ question }) {
  const [optionSelected, setOptionSelected] = useState("");
  const [error, setError] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [disableInputs, setDisableInputs] = useState(false);
  const [attempts, setAttempts] = useState(1);
  const [showCorrectAn, setShowCorrectAn] = useState("");
  
  // Pegando parâmetro da URL
  const { id } = useParams();
  const key = `modulo_${id}_questao_${question.id}`;

  // Variáveis de verificação
  let disable = false;
  let correct = null;
  let attemptQuestions = attempts;

  // Salvar no localStorage
  const saveToLocalStorage = (disable, correct, attempts) => {
    let userAnswer = {
      id: question.id,
      attempts: attempts,
      optionSelected: optionSelected,
      disableInputs: disable,
      correctAnswer: correct,
    };
    console.log(userAnswer);

    localStorage.setItem(key, JSON.stringify(userAnswer));
    // alert("Opções selecionadas salvas no local storage");
  };

  // Recuperar do localStorage
  const loadFromLocalStorage = () => {
    const storedUserAnswer = localStorage.getItem(key);
    if (storedUserAnswer) {
      let parsed = JSON.parse(storedUserAnswer);
      setAttempts(parsed.attempts);
      setDisableInputs(parsed.disableInputs);
      disable = parsed.disableInputs;
      correct = parsed.correctAnswer;
      if( disable && !correct ) {
        setOptionSelected(question.correct_answer);
        showCorrect(question);
        setFeedback("Resposta incorreta")
        setError(true);
      }
      else {
        setOptionSelected(parsed.optionSelected);
        setFeedback("Resposta correta!");
      }
    }
  };

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  // Lógica para verificação de alternativas
  const handleOption = () => {
    console.log("handleOption");
    // Sem seleção
    if (!optionSelected) {
      setFeedback("Selecione uma das opções");
      return;
    }

    // Verifica se o usuário acertou
    if (question.correct_answer[0] == optionSelected[0]) {
      setFeedback("Resposta correta!");
      disable = true;
      correct = true;
      setDisableInputs(disable);
      setError(false);
    } else {
      setFeedback("Resposta incorreta"); // Caso erre, menos 1 tentativa
      setError(true);
      attemptQuestions += 1;
      setAttempts(attemptQuestions);

      if (attemptQuestions >= 3) {
        disable = true;
        correct = false;
        setDisableInputs(disable);
        setFeedback("Acabaram suas tentativas!");
        let option = question.options.find(
          (opt) => opt.id == question.correct_answer[0]
        );
        setShowCorrectAn(option.label); // armazena as respostas corretas
      }
    }
    saveToLocalStorage(disable, correct, attemptQuestions);
  };

  const showCorrect = (question) => {
     let option = question.options.find(
          (opt) => opt.id == question.correct_answer[0]
        );
    setShowCorrectAn(option.label);
  }
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
      <ExercisePaper
        variant="outlined"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <FormControl sx={{ paddingBottom: "24px"}} error={error}>
          <FormLabel
            sx={{
              width: "100%",
              textAlign: "left",
              paddingTop: "24px",
              paddingBottom: "24px",
            }}
          >
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
          {/* Mostra as respostas corretas */}
          {showCorrectAn && (
            <Box sx={{ padding: "24px" }}>
              <Grow
                in={showCorrectAn}
                style={{
                  transformOrigin: "0,0,0",
                }}
                {...(showCorrectAn ? { timeout: 500 } : {})}
              >
                <Paper sx={{ padding: "12px"}} variant="outlined">
                  <Typography align="left">A alternativas correta é:</Typography>
                  <List>
                    <ListItem>{showCorrectAn}</ListItem>
                  </List>
                </Paper>
              </Grow>
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
