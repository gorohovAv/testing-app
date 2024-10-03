import { Step } from "../types/progress";
//import { useState } from "react";

interface ProgressInterface {
  props: Step[];
}

const ProgressBar: React.FC<ProgressInterface> = (props) => {
  //const [progress, setProgress] = useState(props);
  return (
    <div className="flex justify-between w-full h-5">
      {props.props.map((step, index) => {
        if (step.isDone) {
          return <div className="h-2 bg-gray-900" key={index}></div>;
        } else if (step.isActive) {
          return <div className="h-2 bg-red-500" key={index}></div>;
        } else {
          return <div className="h-2 bg-gray-500" key={index}></div>;
        }
      })}
    </div>
  );
};

export default ProgressBar;
