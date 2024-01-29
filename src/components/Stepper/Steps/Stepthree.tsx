import React from "react";
import { IStepProps } from "./Stepone";

export const Stepthree: React.FC<IStepProps> = ({ changeActiveStep }) => {
  const completeSteps = () => {
    changeActiveStep(4);
    console.log("check conditions and/or push to new route");
  };

  return (
    <div>
      <section>
        <div>
          <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
      </section>

      <div>
        <button type="submit" onClick={() => completeSteps()}>
          Next step
        </button>
      </div>
    </div>
  );
};
