import Class from "../../../components/class/class";
import SingleChoiceEx from "../../../components/exercises/single_choice";
import MultipleChoiceEx from "../../../components/exercises/multiple_choice";
import { Typography, Grid, Skeleton, List, ListItem, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import HeaderNav from "../../../components/header/header";
import StyledArticle from "../../../components/styled_article";
// import classDrawer from "../../../components/classDrawer";

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

export default function Class1() {
  // TODO -> Fazer um hook para pegar os exercícios
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(
          "https://python-apis-learn.onrender.com/json?filename=questions_1.json"
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
  console.log(singleQuestions);
  let coverImg = "https://images2.alphacoders.com/109/thumb-1920-1093974.jpg";
  return (
    <Class cover={coverImg} title={"O que é e como planejar"}>
      <StyledArticle>
        {/* <Typography className="py-5" variant="h2" component="h1" gutterBottom>
          O que é e como planejar
        </Typography> */}
        <section className="py-5 m-2">
          <Typography variant="h2" component="h2">
            Objetivo
          </Typography>

          <Typography component="p" variant="body1" sx={{ padding: 1 }}>
            Entender o que é uma playlist temática e aprender a escolher um tema
            que faça sentido para você.
          </Typography>
        </section>

        <section className="py-5 m-2">
          <Typography variant="h2" component="h2">
            O que é uma playlist temática?
          </Typography>
          <Typography component="p" variant="body1" sx={{ padding: 1 }}>
            Uma playlist temática é um{" "}
            <strong>
              conjunto de músicas organizadas a partir de um tema, situação ou
              mood
            </strong>{" "}
            (estado de espírito).
          </Typography>
          <Box component="ul" sx={{ listStyleType: "disc", pl: 4 }}>
            <li>Não é apenas juntar músicas que você gosta.</li>
            <li>
              É criar uma experiência para quem escuta, como se fosse uma trilha
              sonora para um momento específico.
            </li>
          </Box>
          <Paragraph>Exemplo:</Paragraph>
          <Box component="ul" sx={{ listStyleType: "disc", pl: 4 }}>
            <li>
              Se você cria uma playlist chamada “<em>Noite de Chuva 🌧️</em>”,
              quem for ouvir espera encontrar músicas calmas, suaves, talvez
              acústicas ou lo-fi.
            </li>
            <li>
              Se o nome for “<em>Pré-treino Insano 💪</em>”, a expectativa são
              batidas fortes, eletrônicas ou rap motivacional.
            </li>
          </Box>
        </section>

        <section className="py-5 m-2">
          <Typography variant="h2" component="h2">
            Por que escolher um tema?
          </Typography>
          <Paragraph>
            Escolher um tema não é só um detalhe — é o que vai dar “alma” para a
            sua playlist.
          </Paragraph>

          {/* Dá para fazer slide aqui */}
          <Box component="ul" sx={{ listStyleType: "disc", pl: 4 }}>
            <li>
              <strong>Dá identidade à sua playlist:</strong> <br /> Uma playlist
              chamada <em>“Chill vibes”</em> transmite imediatamente calma e
              relaxamento. Já <em>“Explosão do treino”</em> mostra energia e
              intensidade. O nome e o tema já dizem o que esperar.
            </li>
            <li>
              <strong>Facilita para quem procura um clima específico:</strong>{" "}
              <br />
              Quando alguém está estudando, quer algo diferente de quem vai para
              uma festa. O tema ajuda a pessoa certa a encontrar sua playlist
              com mais facilidade.
            </li>
            <li>
              <strong>Ajuda a manter coerência:</strong> <br />
              Se o tema é “Relaxar”, uma música de funk pesado pode quebrar o
              clima. O tema funciona como um guia para você manter a mesma vibe.
            </li>
            <li>
              <strong>Torna mais divertido criar:</strong>
              <br />É como montar uma trilha sonora para um filme: você conta
              uma história só com músicas.
            </li>
          </Box>
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
          </Grid>
        </section>
      </StyledArticle>
    </Class>
  );
}
