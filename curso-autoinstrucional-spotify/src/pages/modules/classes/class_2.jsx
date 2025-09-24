import Class from "../../../components/class/class";
import { Typography, Box, styled } from "@mui/material";
const Paragraph = styled("p")(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
}));

export default function Class2() {
  let coverImg2 =
    "https://applescoop.org/image/wallpapers/mac/spotify-app-store-music-creative-gradient-28-10-2024-1730155583-hd-wallpaper.webp";
  return (
    <Class cover={coverImg2}>
      <article>
        <Typography variant="h2" component="h2" gutterBottom>
          Criando no Spotify
        </Typography>

        <section className="py-5 m-2">
          <Typography variant="h4" component="h2">
            Objetivo
          </Typography>

          <Typography component="p" variant="body1" sx={{ padding: 1 }}>
            Aprender o passo a passo para criar e personalizar sua playlist
            temática no Spotify.
          </Typography>
        </section>

        <section className="py-5 m-2">
          <Typography variant="h4" component="h2">
            Criando sua playlist
          </Typography>
          <Paragraph>No celular:</Paragraph>
          <Box
            component="ol"
            sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>Abra o Spotify.</li>
            <li>
              Vá em <strong>“Sua Biblioteca”</strong>.
            </li>
            <li>Dê um nome.</li>
            <li>
              Clique em <strong>“Adicionar músicas”</strong>.
            </li>
          </Box>
          <Paragraph>No computador:</Paragraph>
          <Box
            component="ol"
            sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>Abra o Spotify no app ou navegador.</li>
            <li>
              Clique em <strong>“+ Nova playlist”</strong>.
            </li>
            <li>Escolha um nome criativo.</li>
            <li>
              Em <strong>Editar detalhes</strong>, adicione capa e descrição.
            </li>
          </Box>

          <section className="py-5 m-2">
            <Typography variant="h4" component="h2">
              Personalizando
            </Typography>

            <Paragraph>Uma playlist bem feita tem:</Paragraph>
            <Box
              component="ul"
              sx={{ listStyleType: "disc", pl: 4, display: "grid", gap: "8px" }}
            >
              <li>
                <strong>Nome criativo</strong>: curto, memorável e com emoção.
                <ul type="disc">
                  
                </ul>
              </li>
              <li>
                <strong>Descrição clara</strong>: diga em 1 ou 2 frases o que a
                playlist entrega.
              </li>
              <li>
                <strong>Capa única</strong>: crie no Canva algo simples, que
                traduza a vibe.
              </li>
              <li>
                Clique em <strong>“Adicionar músicas”</strong>.
              </li>
            </Box>
            <Paragraph>
              A capa + nome + descrição já passam a sensação antes mesmo da
              pessoa dar play.
            </Paragraph>
          </section>
        </section>
      </article>
    </Class>
  );
}
