import {
  Grid,
  Container,
  Box,
  Typography,
  Card,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  styled,
  Slide,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import CardModule from "../../components/card_module/card_module";
import ToggleColorMode from "../../components/toggle_color_mode";
import capa1 from "../../assets/imgs/capa-mod-1.webp";
import capa2 from "../../assets/imgs/capa-mod-2.jpg";
import capa3 from "../../assets/imgs/capa-mod-3.jpg";
import modBg from "../../assets/imgs/mod-bg.png";
import { Height } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";

// Transformar card em lista
let MODULESCARD = [
  {
    id: 1,
    title: "Módulo 1 – Planejando sua Playlist",
    description:
      "Entenda o que é uma playlist temática, escolha um tema que combine com você e comece a definir as primeiras músicas. Descubra como dar identidade e coerência para sua coleção musical.",
    imgpath: capa1,
  },
  {
    id: 2,
    title: "Módulo 2 – Criando no Spotify",
    description:
      "Aprenda a criar sua playlist no Spotify, personalizar nome, descrição e capa, adicionar músicas de forma estratégica e organizar a ordem para manter a vibe coerente com o tema escolhido.",
    imgpath: capa2,
  },
  {
    id: 3,
    title: "Módulo 3 – Compartilhar e Manter",
    description:
      "Descubra como compartilhar sua playlist com amigos ou nas redes sociais, torná-la colaborativa, receber sugestões e manter sua playlist atualizada e relevante ao longo do tempo.",
    imgpath: capa3,
  },
];

// Componentes personalizados
const MainContainer = styled(Box)(({ theme }) => ({
  minHeight: "100dvh",
  display: "flex",
  alignItems: "center",
  paddingBottom: "3.5rem",
  paddingTop: "3.5rem",
  [theme.breakpoints.up("xs")]: {
    paddingBottom: "1.5rem",
    paddingTop: "1.5rem",
  },
  // Corrigir, é bgImg, n vai so cor rsrs
  backgroundImage:
    theme.palette.mode === "dark"
      ? `linear-gradient(rgba(33, 36, 44, 0.6), rgba(33, 36, 44, 0.6)), url(${modBg})`
      : "",
  backgroundSize: "cover",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  borderRadius: "1rem",
  backgroundColor: alpha(theme.palette.secondary.main, 0.65),
  padding: "0.75rem",
  backdropFilter: "blur(17px)",
  [theme.breakpoints.up("md")]: {
    padding: "1.5rem",
  },
}));

export default function ModulesPage() {
  const [load, setLoad] = useState(true);

  return (
    <MainContainer variant="main">
      <Box
        sx={{
          width: { xs: "95%", sm: "80%" },
          margin: "0 auto",
          maxWidth: 1128,
        }}
      >
        <StyledGrid>
          <Box sx={{width: "100%", display:"flex", justifyContent: "space-between", alignContent: "center"}}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Módulos
            </Typography>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <ToggleColorMode />
            </Box>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {MODULESCARD.map((card, i) => (
              <Slide
                key={card.id}
                direction="left"
                in={load}
                unmountOnExit
                timeout={1000 / (i + 1) / 1.5}
              >
                <div>
                  <CardModule {...card} />
                </div>
              </Slide>
            ))}
          </Grid>
        </StyledGrid>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: "100%",
            justifyContent: "center",
            paddingTop: "12px",
          }}
        >
          <ToggleColorMode />
        </Box>
      </Box>
    </MainContainer>
  );
}
