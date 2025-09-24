import { Box, Typography, Fade } from "@mui/material";
import MainButton from "../../components/main_button/main_button";
import videoBg from "../../assets/videos/spotify-jam.mp4";

export default function IndexPage() {
  return (
    <Box
      component="main"
      sx={(theme) => ({
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      })}
      //   className="flex items-center justify-center h-dvh flex-col gap-5"
    >
      <Box
        component="video"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        sx={(theme) => ({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
          opacity: 0.7,
        })}
      ></Box>
      <Box
        sx={(theme) => ({
          position: "relative",
          zIndex: 1,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          gap: 2,
          //   bgcolor: "rgba(0,0,0,0.4)", // overlay escuro

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 1,
            zIndex: -1,
            bgcolor: theme.palette.marian_blue.main,
          },
        })}
      >
        <Fade in={"show"} timeout={1500}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Como criar uma playlist temática no Spotify{" "}
          </Typography>
        </Fade>
        <Box
          variant="div"
          sx={{
            opacity: 0,
            animation: "fadeIn 1s forwards",
            animationDelay: "1s", // espera 1s antes de começar
            "@keyframes fadeIn": {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          <MainButton path={"/modules"} color="emerald" variant="contained">
            Bora começar esse Curso
          </MainButton>
        </Box>
      </Box>
    </Box>
  );
}
