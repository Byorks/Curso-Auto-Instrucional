import { Toolbar, Typography, Container, AppBar, Box } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ClassButton from "../class_button";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const HeaderNav = () => {
  const [activeButton, setActiveButton] = useState(false);

  // const activateButton = () => {

  // }

  useEffect(() => {
    
  }, [])

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
            <Link to=".." relative="path"> 
              <ArrowBackIosNewRoundedIcon />
            </Link>
          </Box>
          <Box component={"div"}>
            <NavLink active={({isActive}) => isActive ?  setActiveButton(true) : setActiveButton(false)} relative="path" to={"../1"}>
              <ClassButton active={activeButton} >Aula 1</ClassButton>
            </NavLink>
            <NavLink  relative="path" to={"../2"}>
              <ClassButton>Aula 2</ClassButton>
            </NavLink>
            <NavLink  relative="path" to={"../3"}>
              <ClassButton>Aula 3</ClassButton>
            </NavLink>
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
