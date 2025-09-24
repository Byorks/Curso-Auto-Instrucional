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
} from "@mui/material";
import CardModule from "../../components/card_module/card_module";
import ToggleColorMode from "../../components/toggle_color_mode";
import capa1 from "../../assets/imgs/capa-mod-1.webp";
import capa2 from "../../assets/imgs/capa-mod-2.jpg";
import capa3 from "../../assets/imgs/capa-mod-3.jpg";

export default function ModulesPage() {
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
      imgpath:
        capa2,
    },
    {
      id: 3,
      title: "Módulo 3 – Compartilhar e Manter",
      description:
        "Descubra como compartilhar sua playlist com amigos ou nas redes sociais, torná-la colaborativa, receber sugestões e manter sua playlist atualizada e relevante ao longo do tempo.",
      imgpath:
       capa3,
    },
  ];

  return (
    <main className="h-dvh flex items-center">
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          maxWidth: 1128,
        }}
      >
       
        <Grid container spacing={5}>
          <Typography variant="h4" component="h2">
            Módulos
          </Typography>
          {MODULESCARD.map((card) => (
            <CardModule key={card.id} {...card} />
          ))}

          <ToggleColorMode   />
        </Grid>
      </Box>
    </main>
  );
}
