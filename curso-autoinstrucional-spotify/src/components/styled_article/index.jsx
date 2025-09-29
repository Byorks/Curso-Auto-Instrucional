import { Box, styled } from "@mui/material";

const Article = styled(Box)(({ theme }) => ({
  borderRadius: "1rem",
  background: theme.palette.mode === "dark" ? `linear-gradient(180deg, ${theme.palette.marian_blue.main} 0%, ${theme.palette.secondary.main} 12.5%)` : `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary[50]} 12.5%)`,
  padding: "1rem",
  marginBottom: "4.5rem", 
  [theme.breakpoints.up("md")]: {
    padding: "2rem",
  },
}));

export default function StyledArticle({ children, props }) {
  return <Article props component={"article"}>{children}</Article>;
}
