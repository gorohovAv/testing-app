import Question from "./Question";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";
import {Step} from "../types/progress";

const steps: Step[] = [
  { isDone: false, isActive: true },
  { isDone: false, isActive: false },
  { isDone: true, isActive: false },
  { isDone: false, isActive: true },
  { isDone: true, isActive: true },
  { isDone: false, isActive: false },
  { isDone: false, isActive: true },
  { isDone: true, isActive: false },
  { isDone: false, isActive: false },
  { isDone: true, isActive: false },
];

const Test = () => {

  return (
    <>
      <header className="flex flex-row m-0 gap-3">
        <div className="text-4xl inline m-0">Название теста</div>
        <Timer initialSeconds={300}></Timer>
      </header>
      <ProgressBar props={steps}></ProgressBar>
      <Question question={}></Question>
    </>
  );
};

export default Test;
