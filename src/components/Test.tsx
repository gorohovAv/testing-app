//import Question from "./Question";
//import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

const Test = () => {
  return (
    <>
      <header className="flex flex-row m-0">
        <div className="text-4xl inline m-0">Название теста</div>
        <Timer initialSeconds={300}></Timer>
      </header>
      {/*<ProgressBar props={[]}></ProgressBar>
      <Question></Question>*/}
    </>
  );
};

export default Test;
