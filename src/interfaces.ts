export enum FieldTypes {
  Text,
  Number,
  Select,
}
export interface Field {
  type: FieldTypes;
  name: string;
  label: string;
  defaultValue?: string | number;
  value?: string | number | any[];
  placeholder?: string;
}

export interface Form {
  country: string;
  fields: Field[];
}
