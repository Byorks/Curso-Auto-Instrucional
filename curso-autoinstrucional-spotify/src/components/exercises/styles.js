import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

// Componentes MUI customizados
// Posso colocar em um arquivo a parte e só importar para ficar mais organizado
// Components estilizados
export const ExercisePaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "auto",
  padding: theme.spacing(2),
  textAlign: "center",
  // backgroundColor: theme.palette.marian_blue.main,
}));
