import {
  createTheme,
  alpha,
  getContrastRatio,
  styled,
} from "@mui/material/styles";
import { Paper } from "@mui/material";

// Cores
const violetBase = "#7F00FF";
const violetMain = alpha(violetBase, 0.7);

const blackBase = "#000";
const blackMain = alpha(blackBase, 0.7);

// Criando paleta definida, o augmentColor não irá funcionar
const marianBlueBase = "#1E3A8A";
const marianBlueMain = alpha(marianBlueBase, 0.7);

const marianBlue = {
  50: "#e7ebf5",
  100: "#c3cbe6",
  200: "#9caad5",
  300: "#7589c3",
  400: "#576fb7",
  500: "#3656ac",
  600: "#304ea2",
  700: "#304ea2",
  800: "#1e3b8a", // Main
  900: "#304ea2",
  1000: "161B26",
};

const emeraldBase = "#34D399";
const emeraldMain = alpha(emeraldBase, 0.7);

const emerald = {
  50: "#e1f8ed",
  100: "#b6ecd3",
  200: "#81dfb6",
  300: "#34d399", // Main
  400: "#00c882",
  500: "#00bd6d",
  600: "#00ad61",
  700: "#009a54",
  800: "#008948",
  900: "#006931",
};

const gray = {
  50: "#edeef0",
  100: "#d1d5db", // Main
  200: "#b3b9c3",
  300: "#959dac",
  400: "#7e889a",
  500: "#687489",
  600: "#5b6678",
  700: "#4a5361",
  800: "#3a414c",
  900: "#282c35",
  1000: "#21242C",
};

const frenchGrayBase = "#D1D5DB";
const frenchGrayMain = alpha(frenchGrayBase, 0.7);

export const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: emerald[300],
          light: emerald[100],
          dark: emerald[300],
          contrastText: "rgba(0, 0, 0, 0.87)",
          ...emerald,
        },
        secondary: {
          main: gray[900],
          light: gray[50],
          dark: gray[1000],
          contrastText: "rgba(0, 0, 0, 0.87)",
          ...gray,
        },
        marian_blue: {
          main: marianBlue[800],
          light: marianBlue[600],
          dark: marianBlue[900],
          ...marianBlue,
          contrastText: "#fff",
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: emerald[300],
          light: emerald[100],
          dark: emerald[700],
          contrastText: "rgba(0, 0, 0, 0.87)",
          ...emerald,
        },
        secondary: {
          main: gray[100],
          light: gray[800],
          dark: gray[100],
          contrastText: "rgba(0, 0, 0, 0.87)",
          ...gray,
        },
        marian_blue: {
          main: marianBlue[800],
          light: marianBlue[600],
          dark: marianBlue[900],
          contrastText: "#fff",
        },
      },
    },
  },
  typography: {
    fontFamily:
      'Poppins, "Helvetica", "Roboto", "DM Sans", "Arial", sans-serif',
    h1: {
      fontSize: "4rem",
      fontFamily: '"Poppins", "Helvetica", "Roboto"',
    },
    h2: {
      fontWeight: 600,
      fontFamily: '"Poppins", "Helvetica", "Roboto"',
      fontSize: "2rem",
      lineHeight: "normal",
    },
    body2: {
      fontFamily:
        '"DM Sans", "Poppins", "Helvetica", "Roboto",  "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"Poppins", "Helvetica", "Roboto"',
      fontSize: "1.5rem",
    },
    subtitle1: {
      fontFamily:
        '"DM Sans","Poppins", "Helvetica", "Roboto", "Arial", sans-serif',
    },
    body1: {
      fontFamily:
        '"DM Sans", "Poppins", "Helvetica", "Roboto", "DM Sans", "Arial", sans-serif',
    },
    button: {
      fontFamily:
        '"DM Sans","Poppins", "Helvetica", "Roboto", "DM Sans", "Arial", sans-serif',
      fontWeight: 700,
    },
  },
});
