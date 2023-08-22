import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import Field, { IField } from "../components/Field";
import { v4 as uuidv4 } from "uuid";

const MainLayout: React.FC = () => {
  const [fields, setFields] = useState<IField[]>([
    {
      fieldName: "",
      fieldIndex: uuidv4(),
    },
  ]);
  const addField = () => {
    const rowId = uuidv4();
    const newFields = [...fields];

    newFields.push({
      fieldDescription: "",
      fieldName: "",
      fieldIndex: rowId,
    });
    console.log(fields);
    setFields(newFields);
  };

  const removeField = (index: string) => {
    let rows = [...fields];
    console.log(index);
    rows = fields.filter((field) => {
      console.log(field);
      return field.fieldIndex !== index;
    });
    console.log(rows);
    setFields(rows);
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const list: IField[] = [...fields];
    list[index].fieldValue = value;
    setFields(list);
  };

  return (
    <Container style={{ padding: "2rem 2.8rem" }} fluid={true}>
      <Heading addField={addField} />
      {fields.map((data, index) => {
        const { fieldName } = data;
        return (
          <Field
            key={index}
            fieldIndex={data.fieldIndex}
            removeField={removeField}
            handleChange={handleChange}
          />
        );
      })}
    </Container>
  );
};
export default MainLayout;
