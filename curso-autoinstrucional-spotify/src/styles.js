import { createTheme, alpha, getContrastRatio, styled } 
from "@mui/material/styles";
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

const frenchGrayBase = "#34D399";
const frenchGrayMain = alpha(frenchGrayBase, 0.7);

export const theme = createTheme({
    colorSchemes: { 
        dark: true,
    },
    palette: {
        french_gray: {
            main: frenchGrayMain,
            light: alpha(frenchGrayBase, 0.5),
            dark: alpha(frenchGrayBase, 0.9),
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
            contrastText:
            getContrastRatio(blackMain, "#fff") > 4.5 ? "#fff" : "#111",
        },
    },
});