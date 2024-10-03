import { Step } from "../types/progress";
//import { useState } from "react";

const ProgressBar = (props: Step[]) => {
  //const [progress, setProgress] = useState(props);
  return (
    <div className="flex justify-between w-full">
      {props.map((step) => {
        if (step.isDone) {
          return <div className="h-1 bg-gray-900"></div>;
        } else if (step.isActive) {
          return <div className="h-1 bg-red-500"></div>;
        } else {
          return <div className="h-1 bg-gray-500"></div>;
        }
      })}
    </div>
  );
};

export default ProgressBar;
