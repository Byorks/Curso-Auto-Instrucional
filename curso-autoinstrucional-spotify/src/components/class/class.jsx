import { Box, Typography } from "@mui/material";

export default function Class({ cover, children, title }) {
  return (
    <main className="w-dvw">
      {/* imagem */}
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
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "40vh",
            position: "absolute",
            background:
              "linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.33) 44%, rgba(0, 0, 0, .6) 76%)",
          }}
        ></Box>

        {/* Titulo na capa
         <Typography className="py-5" variant="h2" component="h1" color="white">{title}</Typography> */}
      </Box>

      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          maxWidth: 1128,
          paddingTop: "10vh",
          paddingBottom: "10vh",
        }}
      >
        {children}
      </Box>
    </main>
  );
}
