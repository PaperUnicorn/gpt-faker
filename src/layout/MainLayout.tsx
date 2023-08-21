import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import Field, { IField } from "../components/Field";

const MainLayout: React.FC = () => {
  const [fields, setFields] = useState<IField[]>([
    {
      fieldName: "field 1",
      fieldIndex: 0,
    },
  ]);
  const addField = () => {
    const lastField = fields.length;
    console.log(lastField);
    setFields([...fields, { fieldIndex: lastField }]);
  };

  const removeField = (index: number) => {
    const rows = [...fields];
    rows.splice(index, 1);
    console.log(rows);
    setFields(rows);
  };

  return (
    <Container style={{ padding: "2rem 2.8rem" }} fluid={true}>
      <Heading addField={addField} />
      {fields.map((data, index) => {
        const { fieldName } = data;
        return (
          <Field key={index} fieldIndex={index} removeField={removeField} />
        );
      })}
    </Container>
  );
};
export default MainLayout;
