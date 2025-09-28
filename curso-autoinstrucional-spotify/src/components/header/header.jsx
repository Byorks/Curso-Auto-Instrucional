import { Toolbar, Typography, Container, AppBar, Box } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ClassButton from "../class_button";

export const HeaderNav = () => {
  return (
    <AppBar
      position="sticky"
      sx={(theme) => ({
        borderBottom: `solid 1px ${theme.palette.primary.main}`,
      })}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={(theme) => ({
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          })}
        >
          <Box component={"div"} sx={{}}>
            <ArrowBackIosNewRoundedIcon />
          </Box>
          <Box component={"div"}>
            <ClassButton>Aula 1</ClassButton>
            <ClassButton>Aula 2</ClassButton>
            <ClassButton>Aula 3</ClassButton>
          </Box>
          <Box component={"div"}>
            <MenuRoundedIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderNav;
