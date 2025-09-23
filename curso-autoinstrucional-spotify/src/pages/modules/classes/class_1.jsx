import Class from "../../../components/class/class";
import SingleChoiceEx from "../../../components/exercises/single_choice";
import MultipleChoiceEx from "../../../components/exercises/multiple_choice";
import { Typography, Grid, Skeleton, List, ListItem, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
// import classDrawer from "../../../components/classDrawer";

const Paragraph = styled('p') (({theme}) => ({
  padding: theme.spacing(1),
}));

export default function Class1() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(
          "https://python-apis-learn.onrender.com/json?filename=example.json"
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

  // let data = {
  //   items: [
  //     {
  //       id: 1,
  //       type: "multiple",
  //       title: "Pergunta 1",
  //       correct_answer: [2, 5],
  //       options: [
  //         {
  //           id: 1,
  //           label: "Alternativa A",
  //           feedback: "",
  //         },
  //         {
  //           id: 2,
  //           label: "Alternativa B",
  //           feedback: "",
  //         },
  //         {
  //           id: 3,
  //           label: "Alternativa C",
  //           feedback: "",
  //         },
  //         {
  //           id: 4,
  //           label: "Alternativa D",
  //           feedback: "",
  //         },
  //         {
  //           id: 5,
  //           label: "Alternativa E",
  //           feedback: "",
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       type: "single",
  //       title: "Pergunta 2",
  //       correct_answer: [3],
  //       options: [
  //         {
  //           id: 1,
  //           label: "Alternativa A",
  //           feedback: "",
  //         },
  //         {
  //           id: 2,
  //           label: "Alternativa B",
  //           feedback: "",
  //         },
  //         {
  //           id: 3,
  //           label: "Alternativa C",
  //           feedback: "",
  //         },
  //         {
  //           id: 4,
  //           label: "Alternativa D",
  //           feedback: "",
  //         },
  //         {
  //           id: 5,
  //           label: "Alternativa E",
  //           feedback: "",
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       type: "single",
  //       title: "Pergunta 2",
  //       correct_answer: [3],
  //       options: [
  //         {
  //           id: 1,
  //           label: "Alternativa A",
  //           feedback: "",
  //         },
  //         {
  //           id: 2,
  //           label: "Alternativa B",
  //           feedback: "",
  //         },
  //         {
  //           id: 3,
  //           label: "Alternativa C",
  //           feedback: "",
  //         },
  //         {
  //           id: 4,
  //           label: "Alternativa D",
  //           feedback: "",
  //         },
  //         {
  //           id: 5,
  //           label: "Alternativa E",
  //           feedback: "",
  //         },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       type: "combo",
  //       title: "Pergunta 3",
  //       correct_answer: [1, 3],
  //       options: [
  //         {
  //           id: 1,
  //           label: "Alternativa A",
  //           feedback: "",
  //         },
  //         {
  //           id: 2,
  //           label: "Alternativa B",
  //           feedback: "",
  //         },
  //         {
  //           id: 3,
  //           label: "Alternativa C",
  //           feedback: "",
  //         },
  //         {
  //           id: 4,
  //           label: "Alternativa D",
  //           feedback: "",
  //         },
  //         {
  //           id: 5,
  //           label: "Alternativa E",
  //           feedback: "",
  //         },
  //       ],
  //     },
  //   ],
  // };

  console.log(questions);
  let singleQuestions = questions.filter((q) => q.type == "single");
  console.log("questoes single \n", singleQuestions);

  let coverImg = "https://images2.alphacoders.com/109/thumb-1920-1093974.jpg";
  return (
    <Class cover={coverImg} title={"O que é e como planejar"}>
      <article>
        <Typography className="py-5" variant="h2" component="h1" gutterBottom>
          O que é e como planejar
        </Typography>
        <section className="py-5 m-2">
          <Typography variant="h4" component="h2">
            Objetivo
          </Typography>

          <Typography component="p" variant="body1" sx={{ padding: 1}}>
            Entender o que é uma playlist temática e aprender a escolher um tema
            que faça sentido para você.
          </Typography>
        </section>

        <section className="py-5 m-2">
          <Typography variant="h4" component="h2">
            O que é uma playlist temática?
          </Typography>
          <Typography component="p" variant="body1" sx={{ padding: 1}}>
            Uma playlist temática é um{" "}
            <strong>
              conjunto de músicas organizadas a partir de um tema, situação ou
              mood
            </strong>{" "}
            (estado de espírito).
          </Typography>
         <Box component="ul" sx={{ listStyleType: "disc" ,pl: 4 }}>
            <li>Não é apenas juntar músicas que você gosta.</li>
            <li>
              É criar uma experiência para quem escuta, como se fosse uma trilha
              sonora para um momento específico.
            </li>
          </Box>
          <Paragraph>Exemplo:</Paragraph>
         <Box component="ul" sx={{ listStyleType: "disc" ,pl: 4 }}>
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
          <Typography variant="h4" component="h2">
            Por que escolher um tema?
          </Typography>
          <Paragraph>
            Escolher um tema não é só um detalhe — é o que vai dar “alma” para a
            sua playlist.
          </Paragraph>
          
          {/* Dá para fazer slide aqui */}
         <Box component="ul" sx={{ listStyleType: "disc" ,pl: 4 }}>
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

        <Grid
          container
          columns={{ xs: 8, md: 12 }}
          sx={{ justifyContent: "center", alignContent: "center" }}
        >
          <Grid size={{ xs: 8, md: 8 }}>
            <section className="py-5">
              {/* <SingleChoiceEx question={} /> */}
            </section>
          </Grid>
        </Grid>

        <Grid
          container
          columns={{ xs: 8, md: 12 }}
          sx={{ justifyContent: "center", alignContent: "center" }}
        >
          <Grid size={{ xs: 8, md: 8 }}>
            <section className="py-5 w-full">
              {loading ? (
                <Skeleton animation="wave" width="100%" height="300px" />
              ) : (
                <MultipleChoiceEx question={questions[0]} />
              )}
            </section>
          </Grid>
        </Grid>

        <Grid
          container
          columns={{ xs: 8, md: 12 }}
          sx={{ justifyContent: "center", alignContent: "center" }}
        >
          <Grid size={{ xs: 8, md: 8 }}>
            <section className="py-5">
              {/* <SingleChoiceEx question={ } /> */}
              {loading ? (
                <Skeleton animation="wave" width="100%" height="300px" />
              ) : (
                singleQuestions.map((q) => (
                  <SingleChoiceEx key={q.id} question={q} />
                ))
              )}
            </section>
          </Grid>
        </Grid>
      </article>
    </Class>
  );
}
