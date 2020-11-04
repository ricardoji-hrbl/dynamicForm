import React, { FC } from "react";
import { Form } from "../interfaces";
import Input from "./Input";

interface props {
  formData: Form;
}

/**
 * This component receives the data from the selected country to create dynamically the form.
 *
 * @function
 * @param {Form} formData - Data to create the form (fields).
 *
 */
const DynamicForm: FC<props> = ({ formData }): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // get the data from the form fields
    const result: object = {};

    for (let field of formData.fields) {
      // assign the values on the result
      Object.assign(result, {
        [field.name]: e.currentTarget[field.name].value,
      });
    }

    console.log(result);

    // handle and validate the data here....
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{formData.country}</h1>
      {formData.fields.map((field) => (
        <Input key={field.name} fieldData={field} />
      ))}
      <button type="submit">Send</button>
    </form>
  );
};

export default DynamicForm;
