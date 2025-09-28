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

const frenchGrayBase = "#D1D5DB";
const frenchGrayMain = alpha(frenchGrayBase, 0.7);

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: emerald[300],
          light: emerald[100],
          dark: emerald[700],
          contrastText: "rgba(0, 0, 0, 0.87)",
          ...emerald,
        },
        marian_blue: {
          main: marianBlue[800],
          light: marianBlue[600],
          dark: marianBlue[900],
          contrastText: "#fff",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: emerald[600],
          light: emerald[100],
          dark: emerald[700],
          contrastText: "rgba(0, 0, 0, 0.87)",
          ...emerald,
        },
        marian_blue: {
          main: marianBlue[800],
          light: marianBlue[600],
          dark: marianBlue[900],
          contrastText: "#fff",
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
          fontFamily: 'Poppins, "Helvetica", "Roboto"',
          fontSize: "2rem",
          lineHeight: "normal"
        },
        body2: {
          fontFamily:
            '"DM Sans", "Poppins", "Helvetica", "Roboto",  "Arial", sans-serif',
        },
        h3: {
          fontFamily: 'Poppins, "Helvetica", "Roboto"',
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
    },
  },
  typography: {
    fontFamily:
      '"Poppins",, "Helvetica", "Roboto", "DM Sans", "Arial", sans-serif',
    h1: {
      fontSize: "4rem",
      fontFamily: '"Poppins", "Helvetica", "Roboto"',
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body2: {
      fontFamily:
        '"DM Sans", "Poppins", "Helvetica", "Roboto",  "Arial", sans-serif',
    },
    h3: {
      fontSize: "1.5rem",
    },
    subtitle1: {
      fontFamily:
        '"DM Sans","Poppins", "Helvetica", "Roboto", "Arial", sans-serif',
    },
    body1: {
      fontFamily:
        '"DM Sans", "Poppins",, "Helvetica", "Roboto", "DM Sans", "Arial", sans-serif',
    },
    button: {
      fontFamily:
        '"DM Sans","Poppins",, "Helvetica", "Roboto", "DM Sans", "Arial", sans-serif',
      fontWeight: 700,
    },
  },

  // palette: { // Pallete está sendo substituída, nesse caso vai substituir o que foi colocado em colorSchemes
  //   primary: {
  //     main: marianBlueBase,
  //   },
  //   french_gray: {
  //     main: frenchGrayMain,
  //     light: alpha(frenchGrayBase, 0.5),
  //     dark: alpha(frenchGrayBase, 0.9),
  //     bgcolor: alpha(frenchGrayBase, 0.3),
  //     contrastText:
  //       getContrastRatio(frenchGrayMain, "#fff") > 4.5 ? "#fff" : "#111",
  //   },
  //   emerald: {
  //     main: emeraldMain,
  //     light: alpha(emeraldBase, 0.5),
  //     dark: alpha(emeraldBase, 0.9),
  //     contrastText:
  //       getContrastRatio(emeraldMain, "#fff") > 4.5 ? "#fff" : "#111",
  //   },
  //   marian_blue: {
  //     main: marianBlueMain,
  //     light: alpha(marianBlueBase, 0.5),
  //     dark: alpha(marianBlueBase, 0.9),
  //     bgcolor: alpha(marianBlueBase, 0.2),
  //     contrastText:
  //       getContrastRatio(marianBlueMain, "#fff") > 4.5 ? "#fff" : "#111",
  //   },
  //   violet: {
  //     main: violetMain,
  //     light: alpha(violetBase, 0.5),
  //     dark: alpha(violetBase, 0.9),
  //     contrastText:
  //       getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
  //   },
  //   black: {
  //     main: blackMain,
  //     light: alpha(blackBase, 0.5),
  //     dark: alpha(blackBase, 0.9),
  //     contrastText: getContrastRatio(blackMain, "#fff") > 4.5 ? "#fff" : "#111",
  //   },
  // },
  // typography: {
  //   fontFamily: "Roboto, sans-serif",
  //   h1: {
  //     fontFamily: "Roboto",
  //     fontSize: "3rem",
  //     fontWeight: "bold",
  //     lineHeight: 1.2,
  //     letterSpacing: -0.5,
  //   },
  // },
  // CSSBaseLine serve para sobrescrever o style de forma global para elementos HTML tem o GlobalStyles também
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
