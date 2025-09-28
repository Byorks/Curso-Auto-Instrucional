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
  styled
} from "@mui/material";
import CardModule from "../../components/card_module/card_module";
import ToggleColorMode from "../../components/toggle_color_mode";
import capa1 from "../../assets/imgs/capa-mod-1.webp";
import capa2 from "../../assets/imgs/capa-mod-2.jpg";
import capa3 from "../../assets/imgs/capa-mod-3.jpg";
import modBg from "../../assets/imgs/mod-bg.png";
import { Height } from "@mui/icons-material";

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

const MainContainer = styled(Box) (({theme}) => ({ 
  height: '100dvh',
  display: 'flex',
  alignItems: 'center',
  // Corrigir, é bgImg, n vai so cor rsrs
  backgroundImage: theme.palette.mode === 'dark' ? `linear-gradient(rgba(33, 36, 44, 0.6), rgba(33, 36, 44, 0.6)), url(${modBg})` : "",
  backgroundSize: 'cover',
}));

export default function ModulesPage() {
  return (
    <MainContainer variant='main'>
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          maxWidth: 1128,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
        >
          Módulos
        </Typography>
        <Grid container spacing={{xs: 2, md: 3}}>
          {MODULESCARD.map((card) => (
            <CardModule key={card.id} {...card} />
          ))}

          <ToggleColorMode />
        </Grid>
      </Box>
    </MainContainer>
  );
}
