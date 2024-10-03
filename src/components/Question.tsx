import { Selection, TextInput } from "../types/question";

interface QuestionProps {
  props: Selection | TextInput;
}

const QuestionForm: React.FC<QuestionProps> = ({ props }) => {
  if ("variants" in props) { // проверка типа
    return (
      <form action="">
        {props.variants.map((element, index) => {
          return (
            <div key={index}>
              <input type="radio" value={element} name="variant" />
              <label>{element}</label>
            </div>
          );
        })}
      </form>
    );
  } else {
    return (
      <form action="">
        <input type="text" />
      </form>
    );
  }
};

const Question: React.FC<QuestionProps> = ({ props }) => {
  return (
    <>
      <h2>{props.header}</h2>
      <QuestionForm props={props} />
    </>
  );
};

export default Question;