import { createTheme, alpha, getContrastRatio, styled } 
from "@mui/material/styles";
import { Paper } from "@mui/material";


// Cores
const violetBase = "#7F00FF";
const violetMain = alpha(violetBase, 0.7);

const blackBase = "#000";
const blackMain = alpha(blackBase, 0.7);

export const theme = createTheme({
    palette: {
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