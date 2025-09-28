import { Box, Typography, styled } from "@mui/material";
import HeaderNav from "../header/header";

const StyledMain = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary[1000]
  
}));

export default function Class({ cover, children, title }) {
  return (
    <StyledMain
      component="main"
    >
      {/* imagem cover */}
      <Box
        component="div"
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "40vh",
          position: "relative",
        }}
      >
        <Box // Componente para efeito de gradient
          component="div"
          sx={{
            width: "100%",
            height: "40vh",
            position: "absolute",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #21242C 100%)",
          }}
        ></Box>

        {/* Titulo na capa */}
        <Typography
          className="py-5"
          variant="h1"
          component="h1"
          color="white"
          sx={{
            fontSize: { xs: "2rem", md: "4rem" },
            fontWeight: "800",
            position: "absolute",
            bottom: 0,
            left: { xs: "5%", lg: "10%" },
          }}
        >
          {title}
        </Typography>
      </Box>
      <HeaderNav />

      <Box
        sx={{
          width: { xs: "95%", sm: "80%" },
          margin: "0 auto",
          maxWidth: 1128,
          paddingTop: {xs: "5vh",sm:"10vh"},
          paddingBottom: {xs: "5vh",sm:"10vh"},
        }}
      >
        {children}
      </Box>
    </StyledMain>
  );
}
