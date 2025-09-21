import Class from "../../../components/class/class";
import SingleChoiceEx from "../../../components/exercises/single_choice";
import MultipleChoiceEx from "../../../components/exercises/multiple_choice";
import { Typography } from "@mui/material";

export default function Class1() {
  let data = {
    items: [
      {
        id: 1,
        type: "multiple",
        title: "Pergunta 1",
        correct_answer: [2,5],
        options: [
          {
            id: 1,
            label: "Alternativa A",
            feedback: ""
          },
          {
            id: 2,
            label: "Alternativa B",
            feedback: ""
          },
          {
            id: 3,
            label: "Alternativa C",
            feedback: ""
          },
          {
            id: 4,
            label: "Alternativa D",
            feedback: ""
          },
          {
            id: 5,
            label: "Alternativa E",
            feedback: ""
          },
        ],
      },
      {
        id: 2,
        type:"single",
        title: "Pergunta 2",
        correct_answer: [3],
        options: [
          {
            id: 1,
            label: "Alternativa A",
            feedback: ""
          },
          {
            id: 2,
            label: "Alternativa B",
            feedback: ""
          },
          {
            id: 3,
            label: "Alternativa C",
            feedback: ""
          },
          {
            id: 4,
            label: "Alternativa D",
            feedback: ""
          },
          {
            id: 5,
            label: "Alternativa E",
            feedback: ""
          },
        ],
      },
      {
        id: 1,
        type: "combo",
        title: "Pergunta 3",
        correct_answer: [1,3],
        options: [
          {
            id: 1,
            label: "Alternativa A",
            feedback: ""
          },
          {
            id: 2,
            label: "Alternativa B",
            feedback: ""
          },
          {
            id: 3,
            label: "Alternativa C",
            feedback: ""
          },
          {
            id: 4,
            label: "Alternativa D",
            feedback: ""
          },
          {
            id: 5,
            label: "Alternativa E",
            feedback: ""
          },
        ],
      }
    ],
  };

  let coverImg = "https://images2.alphacoders.com/109/thumb-1920-1093974.jpg";
  return (
    <Class cover={coverImg}>

    <article>
        <Typography className="py-5" variant="h2" component="h2">
        Aula 1
      </Typography>


      <Typography className="pb-3" variant="body1" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      
      <section className="py-5">
        <SingleChoiceEx question={data.items[1]} /> 
      </section>

      <section className="py-5">
        <MultipleChoiceEx  {...data.items[0]} />
      </section>    

    </article>
      
    </Class>
  );
}
