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

  const removeField = (index: string | undefined) => {
    let rows = [...fields];
    console.log(index);
    rows = fields.filter((field) => {
      return field.fieldIndex !== index;
    });
    setFields(rows);
  };

  const handleChange = (
    index: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const list: IField[] = [...fields];
    list.find((e) => {
      if (e.fieldIndex === index) {
        e.fieldValue = value;
      }
    });
    setFields(list);
  };

  return (
    <Container style={{ padding: "2rem 2.8rem" }} fluid={true}>
      <Heading addField={addField} />
      {fields.map((data, index) => {
        const { fieldName } = data;
        return (
          <Field
            key={data.fieldIndex}
            fieldIndex={data.fieldIndex}
            removeField={() => removeField(data.fieldIndex)}
            handleChange={handleChange}
          />
        );
      })}
    </Container>
  );
};
export default MainLayout;
