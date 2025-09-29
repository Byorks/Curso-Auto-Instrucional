import Class from "../../../components/class/class";
import { Typography, Box, styled, Grid, Skeleton } from "@mui/material";
import StyledArticle from "../../../components/styled_article";
import { useState, useEffect } from "react";
import MultipleChoiceEx from "../../../components/exercises/multiple_choice";
import SingleChoiceEx from "../../../components/exercises/single_choice";

const Paragraph = styled("p")(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
}));

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  border: "1px solid",
  borderColor: "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
    borderColor: "#444d58",
  }),
}));

export default function Class3() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(
          "https://python-apis-learn.onrender.com/json?filename=questions_3.json"
        );
        const data = await res.json();
        setQuestions(data.items);
        setLoading(false);
      } catch (error) {
        console.error("Request error:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  let singleQuestions = questions.filter((q) => q.type == "single");
  let multiQuestions = questions.filter((q) => q.type == "multiple");
  let cover3 =
    "https://p0.piqsels.com/preview/473/1013/227/netherlands-neede-galaxy-s8.jpg";
  return (
    <Class title={"Compartilhar e manter sua playlist"} cover={cover3}>
      <StyledArticle>
        <section className="py-5 m-2">
          <Typography variant="h2" component="h2" gutterBottom>
            Objetivo
          </Typography>
          <Paragraph>
            Compartilhar sua playlist é uma forma de mostrar seu estilo, se
            conectar com amigos e até ganhar seguidores que gostam da mesma vibe
            musical que você. Além disso, uma playlist não precisa ser estática:
            com pequenas atualizações, ela pode continuar relevante e atrativa
            ao longo do tempo.
          </Paragraph>
        </section>

        <section className="py-5 m-2">
          <Typography variant="h2" component="h2" gutterBottom>
            Como compartilhar sua playlist
          </Typography>

          <Paragraph>
            Criar é só o primeiro passo. Para que sua playlist tenha impacto,
            você precisa divulgá-la. O Spotify oferece diferentes formas de
            compartilhamento tanto no celular quanto no computador.
          </Paragraph>
        </section>

        <section className="py-5 m-2">
          <Typography variant="h3" component="h3" gutterBottom>
            No celular
          </Typography>
          <Box
            component="ol"
            sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "16px" }}
          >
            <li>Abra sua playlist.</li>
            <li>Toque nos três pontinhos (⋮).</li>
            <li>
              Clique em <strong>Compartilhar</strong>.
            </li>
            <li>
              Escolha o destino:{" "}
              <em>Copiar link, WhatsApp, Instagram Stories, Twitter…</em>.
            </li>
          </Box>
        </section>
        <section className="py-5 m-2">
          <Typography variant="h3" component="h3" gutterBottom>
            No computador
          </Typography>
          <Box
            component="ol"
            sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "16px" }}
          >
            <li>Clique com o botão direito na playlist.</li>
            <li>
              Selecione <strong>Compartilhar.</strong>
            </li>
            <li>Copie o link ou publique direto em uma rede social.</li>

            {/* Inserir Box de dica */}
          </Box>
          <Paragraph>
            💡 <strong>Dica</strong>: No Instagram, a playlist aparece com a
            capa personalizada, tornando a divulgação mais bonita e chamativa.
          </Paragraph>
        </section>

        <section className="py-5 m-2">
          <Typography variant="h2" component="h2" gutterBottom>
            Playlists colaborativas
          </Typography>
          <Paragraph>
            Além de compartilhar, você pode tornar sua playlist{" "}
            <strong>colaborativa</strong>. Nesse formato, amigos podem adicionar
            músicas, tornando a experiência coletiva e mais dinâmica.
          </Paragraph>
          <Box
            component="ul"
            sx={{ listStyleType: "disc", pl: 4, display: "grid", gap: "16px" }}
          >
            <li>As playlists colaborativas são vivas, sempre se renovando.</li>
            <li>
              Podem ser usadas em grupos de amigos, festas ou equipes de
              trabalho.
            </li>
            <li>
              Exemplo: <em>“Som do rolê da galera 🎉”</em>, onde cada pessoa
              adiciona músicas que curte.
            </li>
          </Box>
        </section>

        <section className="py-5 m-2">
          <Typography variant="h2" component="h2" gutterBottom>
            Como manter sua playlist viva
          </Typography>
          <Paragraph>
            Uma boa playlist não é criada apenas uma vez — ela evolui. Para que
            continue atraente, siga algumas práticas de manutenção:
          </Paragraph>
          <Box
            component="ol"
            sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "16px" }}
          >
            <li>
              <strong>Atualize regularmente</strong> – troque ou adicione
              músicas a cada semana ou mês.
            </li>
            <li>
              <strong>Crie versões sazonais</strong> – por exemplo, Summer Vibes
              2025 e depois Summer Vibes 2026.
            </li>
            <li>
              <strong>Peça feedback</strong> – amigos podem sugerir faixas
              novas.
            </li>
            <li>
              <strong>Monitore o mood</strong> – se alguma música já não combina
              mais, remova.
            </li>
          </Box>
        </section>

        <section className="py-5 m-2">
          <Typography variant="h2" component="h2" gutterBottom>
            Atividade prática: compartilhando e atualizando
          </Typography>
          <Paragraph>
            Para fixar o aprendizado, você vai realizar uma atividade simples e
            prática:
          </Paragraph>

          <section className="py-4">
            <Typography variant="h3" component="h3" gutterBottom>
              Passo a passo
            </Typography>
            <Box
              component="ol"
              sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "16px" }}
            >
              <li>
                <strong>Compartilhe sua playlist</strong> com pelo menos uma
                pessoa.
              </li>
              <li>
                <strong>Peça uma sugestão de música</strong> para adicionar.
              </li>
              <li>
                <strong>Inclua essa música</strong>, se fizer sentido para a
                vibe da playlist.
              </li>
            </Box>
            <Paragraph>✅ Ao final, você terá:</Paragraph>
            <Box
              component="ul"
              sx={{
                listStyleType: "disc",
                pl: 4,
                display: "grid",
                gap: "16px",
              }}
            >
              <li>Uma playlist publicada e acessível.</li>
              <li>Uma primeira interação real com outra pessoa.</li>
              <li>
                <strong>Um plano de atualização contínua</strong> para mantê-la
                viva.
              </li>
            </Box>
          </section>
        </section>
        <section className="py-4">
          <Typography variant="h2" component="h2">
            Bora praticar
          </Typography>

          <Grid
            container
            columns={{ xs: 8, md: 12 }}
            sx={{ justifyContent: "center", alignContent: "center" }}
          >
            <Grid
              container
              columns={{ xs: 8, md: 12 }}
              sx={{ justifyContent: "center", alignContent: "center" }}
            >
              <Grid size={{ xs: 8, md: 8 }}>
                {loading ? (
                  <Skeleton animation="wave" width="100%" height="300px" />
                ) : (
                  multiQuestions.map((q) => (
                    <section className="py-5 w-full">
                      <Item>
                        <MultipleChoiceEx key={q.id} question={q} />
                      </Item>
                    </section>
                  ))
                )}
              </Grid>
              <Grid size={{ xs: 8, md: 8 }} spacing={4}>
                {loading ? (
                  <Skeleton animation="wave" width="100%" height="300px" />
                ) : (
                  singleQuestions.map((q) => (
                    <section className="py-5 w-full">
                      <Item>
                        <SingleChoiceEx key={q.id} question={q} />
                      </Item>
                    </section>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </section>
      </StyledArticle>
    </Class>
  );
}
