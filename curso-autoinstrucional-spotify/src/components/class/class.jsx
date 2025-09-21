import { Box } from "@mui/material";

export default function Class({ cover, children }) {
  return (
    <main className="w-dvw">
      {/* imagem */}
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "25vh",
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Box>

      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          maxWidth: 1128,
          paddingTop: "10vh",
          paddingBottom: "10vh"
        }}
      >
        {children}
      </Box>
    </main>
  );
}
