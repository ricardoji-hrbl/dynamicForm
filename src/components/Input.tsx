import React, { FC } from "react";
import { Field, FieldTypes } from "../interfaces";

interface props {
  fieldData: Field;
}

const Input: FC<props> = ({ fieldData }): JSX.Element => {
  return (
    <>
      {
        {
          [FieldTypes.Text]: (
            <>
              <label>{fieldData.label}</label>
              <input
                name={fieldData.name}
                placeholder={fieldData.placeholder}
                type="text"
              />
            </>
          ),
          [FieldTypes.Select]: (
            <>
              <label>{fieldData.label}</label>
              <select name={fieldData.name} defaultValue="">
                <option disabled value="">
                  {fieldData.placeholder}
                </option>
                {fieldData.value &&
                  Array.isArray(fieldData.value) &&
                  fieldData.value.map((el) => (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  ))}
              </select>
            </>
          ),
          [FieldTypes.Number]: (
            <>
              <label>{fieldData.label}</label>
              <input
                name={fieldData.name}
                placeholder={fieldData.placeholder}
                defaultValue={fieldData.defaultValue}
                type="number"
              />
            </>
          ),
        }[fieldData.type]
      }
      <br />
    </>
  );
};

export default Input;
