import React from "react";
import { IStepProps } from "./StepOne.tsx";

export const StepTwo: React.FC<IStepProps> = ({ changeActiveStep }) => {
  return (
    <div>
      <h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
        inventore.
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        provident velit quidem. Fugiat, earum. Expedita laboriosam consequuntur
        voluptatibus corporis asperiores culpa fugit pariatur odio quia alias
        tempore voluptatem cum, odit sequi in eum. Illo, debitis ipsa?
      </p>
      <div>
        <button type="submit" onClick={() => changeActiveStep(3)}>
          Next step
        </button>
      </div>
    </div>
  );
};
