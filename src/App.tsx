import React, { ChangeEvent, useState } from "react";
import { Form } from "./interfaces";
import "./App.css";

// data
import forms from "./data";

// Components
import DynamicForm from "./components/DynamicForm";

function App() {
  const [formData, setFormData] = useState<Form | null>(null);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const [data] = forms.filter((el) => el.country === e.currentTarget.value);
    setFormData(data);
  };

  return (
    <div className="App">
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Select a country
        </option>

        {forms.map((el) => (
          <option key={el.country} value={el.country}>
            {el.country}
          </option>
        ))}
      </select>

      {formData && <DynamicForm formData={formData} />}
    </div>
  );
}

export default App;
