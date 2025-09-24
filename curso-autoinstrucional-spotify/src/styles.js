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

const marianBlueBase = "#1E3A8A";
const marianBlueMain = alpha(marianBlueBase, 0.7);

const emeraldBase = "#34D399";
const emeraldMain = alpha(emeraldBase, 0.7);

const frenchGrayBase = "#D1D5DB";
const frenchGrayMain = alpha(frenchGrayBase, 0.7);

export const theme = createTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },
  palette: {
    primary: {
      main: marianBlueBase,
    },
    french_gray: {
      main: frenchGrayMain,
      light: alpha(frenchGrayBase, 0.5),
      dark: alpha(frenchGrayBase, 0.9),
      bgcolor: alpha(frenchGrayBase, 0.3),
      contrastText:
        getContrastRatio(frenchGrayMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    emerald: {
      main: emeraldMain,
      light: alpha(emeraldBase, 0.5),
      dark: alpha(emeraldBase, 0.9),
      contrastText:
        getContrastRatio(emeraldMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    marian_blue: {
      main: marianBlueMain,
      light: alpha(marianBlueBase, 0.5),
      dark: alpha(marianBlueBase, 0.9),
      bgcolor: alpha(marianBlueBase, 0.2),
      contrastText:
        getContrastRatio(marianBlueMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    black: {
      main: blackMain,
      light: alpha(blackBase, 0.5),
      dark: alpha(blackBase, 0.9),
      contrastText: getContrastRatio(blackMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
  typography : { 
  fontFamily: 'Roboto, sans-serif',
  h1: {
    fontFamily: "Roboto",
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: 1.2,
    letterSpacing: -0.5,
  }
},
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: (theme) => ({
  //       h1: {
  //         ...theme.typography.h1,
  //       },
  //       h2: {
  //         ...theme.typography.h2,
  //       },
  //       h3: {
  //         ...theme.typography.h3,
  //       },
  //       h4: {
  //         ...theme.typography.h4,
  //       },
  //       h5: {
  //         ...theme.typography.h5,
  //       },
  //       h6: {
  //         ...theme.typography.h6,
  //       },
  //     }),
  //   },
  // },
});

