import { Toolbar, Typography, Container, AppBar, Box } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ClassButton from "../class_button";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ToggleColorMode from "../toggle_color_mode";

function MyButtons() {
  const { id } = useParams();
  console.log("param id -> " + id);
  const [active, setActive] = useState(false);

  return (
    <>
      <NavLink className={"px-1"} relative="path" to={"../1"}>
        {({ isActive }) => {
          console.log("Aula 1 isActive:", isActive);
          return (
            <ClassButton active={isActive} id="1">
              Aula 1
            </ClassButton>
          );
        }}
      </NavLink>
      <NavLink className={"px-1"} relative="path" to={"../2"}>
        {({ isActive }) => {
          console.log("Aula 2 isActive:", isActive);
          return (
            <ClassButton active={isActive} id="2">
              Aula 2
            </ClassButton>
          );
        }}
      </NavLink>
      <NavLink className={"px-1"} relative="path" to={"../3"}>
      {({ isActive }) => {
        console.log("Aula 2 isActive: ", isActive);
        return (
          <ClassButton active={isActive} id={"3"}>
            Aula 3
          </ClassButton>
        )
      }}
      </NavLink>
    </>
  );
}

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
            <Link to=".." relative="path">
              <ArrowBackIosNewRoundedIcon />
            </Link>
          </Box>
          <Box component={"div"}>
            <MyButtons />
          </Box>
          {/* <Box component={"div"} sx={{visibility: "hidden"}}>
            <MenuRoundedIcon />
          </Box> */}
          <Box component={"div"} >
            <ToggleColorMode />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderNav;
