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
        <Typography variant="h2" component="h1" gutterBottom>
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
        </section>

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
              <ul type="disc"></ul>
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
            A capa + nome + descrição já passam{" "}
            <strong>a sensação antes mesmo da pessoa dar play</strong>.
          </Paragraph>
        </section>
      </article>

      <article>
        <section className="py-5 m-2">
          <Typography variant="h4" component="h2">
            Como adicionar músicas de forma estratégica em sua playlist
          </Typography>
          <Paragraph>
            Criar uma playlist vai muito além de simplesmente juntar músicas
            favoritas. Quando bem estruturada, ela transmite emoções, mantém um
            clima envolvente e até se torna uma experiência memorável para quem
            escuta. Por isso, é importante pensar de maneira estratégica ao
            adicionar músicas.
          </Paragraph>
        </section>
        <section className="py-5 m-2">
          <Typography variant="h5" component="h3">
            1. Busque de diferentes formas
          </Typography>
          <Paragraph>
            Você pode encontrar músicas no Spotify utilizando:
          </Paragraph>
          <Box
            component="ul"
            sx={{ listStyleType: "disc", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>
              <strong>Nome da música</strong>: quando já sabe exatamente o que
              procura.
            </li>
            <li>
              <strong>Artista ou banda</strong>: para explorar a discografia
              completa.
            </li>
            <li>
              <strong>Gênero musical</strong>: ótimo para expandir seu
              repertório.
            </li>
          </Box>
          <Paragraph>
            Além disso, aproveite as recomendações automáticas da plataforma,
            que sugerem faixas semelhantes ao estilo já selecionado.
          </Paragraph>
        </section>

        <section className="py-5 m-2">
          <Typography variant="h5" component="h3">
            2. Mantenha a coerência do tema
          </Typography>

          <Paragraph>
            Cada playlist transmite uma intenção. Pode ser relaxar, estudar, se
            exercitar ou animar uma festa. Nesse sentido, evite adicionar
            músicas que <strong>quebrem o clima</strong>. Uma faixa fora do tom
            pode causar estranhamento e atrapalhar a experiência.
          </Paragraph>
        </section>
        <section className="py-5 m-2">
          <Typography variant="h5" component="h3">
            3. Organize a ordem das músicas
          </Typography>
          <Paragraph>
            A ordem é tão importante quanto a seleção. Algumas formas de
            organizar:
          </Paragraph>
          <Box
            component="ul"
            sx={{ listStyleType: "disc", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>
              <strong>Início suave e progressivo</strong>: comece com músicas
              leves e vá aumentando a energia gradualmente.
            </li>
            <li>
              <strong>Ritmo constante</strong>: mantenha faixas no mesmo nível
              de energia, garantindo uma atmosfera contínua.
            </li>
          </Box>
          <Paragraph>
            Lembre-se: a playlist conta uma história. Você é o(a) curador(a) que
            decide como essa narrativa será percebida.
          </Paragraph>
        </section>
      </article>

      <article>
        <section className="py-5 m-2">
          <Typography variant="h4" component="h2">
            Atividade prática: construindo sua primeira playlist estratégica
          </Typography>
          <Paragraph>
            Depois de aprender os princípios de organização de músicas, é hora
            de colocar em prática. Essa atividade foi pensada para que você{" "}
            <strong>experimente o processo criativo</strong> de montar uma
            playlist e perceba como pequenos ajustes fazem diferença.
          </Paragraph>
          <Typography variant="h5" component="h3">
            Passo a passo da atividade
          </Typography>
          <Box
            component="ol"
            sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>
              <strong>Crie sua playlist no Spotify</strong>
              <Box
                component="ul"
                sx={{
                  listStyleType: "disc",
                  pl: 4,
                  display: "grid",
                  gap: "8px",
                }}
              >
                <li>O título deve transmitir a essência (ex.: Energia para treinar, Relaxamento ao pôr do sol).</li>
                <li>A descrição pode complementar, explicando a intenção ou o clima.</li>
              </Box>
            </li>
            <li>
              <strong>Nomeie e descreva de forma criativa</strong>
              <Box
                component="ul"
                sx={{
                  listStyleType: "disc",
                  pl: 4,
                  display: "grid",
                  gap: "8px",
                }}
              >
                <li>O título deve transmitir a essência (ex.: Energia para treinar, Relaxamento ao pôr do sol).</li>
                <li>A descrição pode complementar, explicando a intenção ou o clima.</li>
              </Box>
            </li>
            <li>
              <strong>Crie uma capa personalizada</strong>
              <Box
                component="ul"
                sx={{
                  listStyleType: "disc",
                  pl: 4,
                  display: "grid",
                  gap: "8px",
                }}
              >
                <li>Use imagens que representem o estilo musical ou a emoção da playlist.</li>
                <li>Essa identidade visual ajuda a destacar sua curadoria.</li>
              </Box>
            </li>
            <li>
              <strong>Adicione 10 músicas que combinem entre si</strong>
              <Box
                component="ul"
                sx={{
                  listStyleType: "disc",
                  pl: 4,
                  display: "grid",
                  gap: "8px",
                }}
              >
                <li>Teste diferentes combinações até encontrar a harmonia.</li>
              </Box>
            </li>
            <li>
              <strong>Teste a ordem e ajuste se necessário</strong>
              <Box
                component="ul"
                sx={{
                  listStyleType: "disc",
                  pl: 4,
                  display: "grid",
                  gap: "8px",
                }}
              >
                <li>Escute sua playlist em sequência.</li>
                <li>Se alguma música “quebrar a vibe”, troque de lugar ou substitua.</li>
              </Box>
            </li>
           
          </Box>
        </section>
      </article>
    </Class>
  );
}
