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

// Escrever forma de marcar as checkboxes corretas caso o usuário erre, 
// e deixar elas marcadas ao dar refresh

import RadioInput from "../radio_input/radio_input.jsx";
import { ExercisePaper } from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MultipleChoiceEx({ question }) {
  const [error, setError] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(1);
  const [disableInputs, setDisableInputs] = useState();
  const [showCorrectAn, setShowCorrectAn] = useState(false);
  const [correctAn, setCorrectAn] = useState([]);

  // Pegando parâmetro da URL
  const { id } = useParams();
  const key = `modulo_${id}_questao_${question.id}`;

  // Salva no localStorage
  const saveToLocalStorage = (disable, correct, attempts) => {
    let userAnswer = {
      id: question.id,
      attempts: attempts,
      selectedList: selectedList,
      disableInputs: disable,
      correctAnswer: correct,
    };
    localStorage.setItem(key, JSON.stringify(userAnswer));
  };

  // Recuperar do localStorage
  const loadFromLocalStorage = () => {
    const storedUserAnswer = localStorage.getItem(key);
    if (storedUserAnswer) {
      let parsed = JSON.parse(storedUserAnswer);
      setAttempts(parsed.attempts);
      setDisableInputs(parsed.disableInputs);
      setSelectedList(parsed.selectedList);
    }
  };

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const handleChoices = (event) => {
    if (!selectedList.includes(parseInt(event.target.name))) {
      setSelectedList([...selectedList, parseInt(event.target.name)]);
    } else {
      let toRemove = parseInt(event.target.name);
      setSelectedList((items) => items.filter((item) => item != toRemove));
    }
  };

  const verifyChoices = () => {
    let disable = false;
    let correct = false;
    let attemptsQuestions = attempts;

    if (selectedList.length == 0) {
      setFeedback("Selecione uma das opções");
      return;
    }
    if (
      selectedList.every((item) => question.correct_answer.includes(item)) &&
      selectedList.length === question.correct_answer.length
    ) {
      setFeedback("Correto!");
      disable = true;
      correct = true;
      setDisableInputs(disable);
      setError(false);
    } else {
      setFeedback("Incorreto!");
      attemptsQuestions += 1;
      setAttempts(attemptsQuestions);
      setError(true);
      if (attempts == 3) {
        disable = true;
        setDisableInputs(disable);
        setFeedback("Incorreto! Acabaram suas tentativas");
        setShowCorrectAn(true);
        setCorrectAn(
          question.options.filter((opt) =>
            question.correct_answer.includes(opt.id)
          )
        );
      }
    }
    saveToLocalStorage(disable, correct, attemptsQuestions);
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
            {question.id} - {question.title}
          </FormLabel>
          <FormGroup>
            {question.options.map((option) => (
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
            <Box sx={{ padding: "24px" }}>
              <Grow
                in={showCorrectAn}
                style={{
                  transformOrigin: "0,0,0",
                }}
                {...(showCorrectAn ? { timeout: 500 } : {})}
              >
                <Paper sx={{ padding: "12px"}} variant="outlined">
                  <Typography>As alternativas corretas são:</Typography>
                  <List>
                    {correctAn.map((option) => (
                      <ListItem key={option.id}>{option.label}</ListItem>
                    ))}
                  </List>
                </Paper>
              </Grow>
            </Box>
          )}
        </FormControl>
        <Button disabled={disableInputs} type="input" onClick={() => verifyChoices()}>
          Enviar
        </Button>
      </ExercisePaper>
    </Box>
  );
}
