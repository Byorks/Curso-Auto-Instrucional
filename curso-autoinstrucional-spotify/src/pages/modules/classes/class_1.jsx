import Class from "../../../components/class/class";
import SingleChoiceEx from "../../../components/exercises/single_choice";
import MultipleChoiceEx from "../../../components/exercises/multiple_choice";
import { Typography, Grid, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import classDrawer from "../../../components/classDrawer";

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
    <Class cover={coverImg}>
      <article>
        <Typography className="py-5" variant="h2" component="h2">
          O que é e como planejar
        </Typography>

        <Typography variant="h3" component="h3">
          Objetivo
        </Typography>
        <Typography col="p" variant="body1">
          Entender o que é uma playlist temática e aprender a escolher um tema
          que faça sentido para você.
        </Typography>


        <Typography variant="h3" component="h3">
          O que é uma playlist temática?
        </Typography>
        <Typography component="p" variant="body1">
          Uma playlist temática é um <strong>conjunto de músicas organizadas a partir de um tema, situação ou mood</strong> (estado de espírito).
        </Typography>
        <ul>
          <li>Não é apenas juntar músicas que você gosta.</li>
          <li>É criar uma experiência para quem escuta, como se fosse uma trilha sonora para um momento específico.</li>
          <li>Ajuda a manter a playlist coerente, sem músicas que “quebram o clima</li>
          <li>Torna mais divertido criar, como se fosse contar uma história com músicas.</li>
 
        </ul>

        <Typography className="pb-3" variant="body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

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
