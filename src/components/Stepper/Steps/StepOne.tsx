import React, { useState } from "react";

export interface IStepProps {
  changeActiveStep: (step: number) => void;
}

interface IFormData {
  name: string;
  email: string;
  phone: string;
}

export const StepOne: React.FC<IStepProps> = ({ changeActiveStep }) => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    changeActiveStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          ></input>
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          ></input>
        </div>

        <button type="submit">Next step</button>
      </form>
    </div>
  );
};
