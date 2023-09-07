import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import Field, { IField } from "../components/Field";
import { v4 as uuidv4 } from "uuid";
import { getRandomValueFromDescription } from "../api/OpenAI.api";
import FileModal from "../components/FileModal";

const MainLayout: React.FC = () => {
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const [generatedData, setGeneratedData] = useState<string>("");
  const [modalTitle, setModalTitle] = useState("title");

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
    rows = fields.filter((field) => {
      return field.fieldIndex !== index;
    });
    setFields(rows);
  };

  const generateFile = async (fields: IField[]) => {
    const result: any = {};
    for (var field of fields) {
      const value = await getRandomValueFromDescription(
        field.fieldDescription || field.fieldName || "",
        field.fieldCount || 1
      );

      result[field.fieldName || "field"] = value;
    }

    openModal();
    setGeneratedData(JSON.stringify(result));
  };

  const handleChange = (
    index: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    console.log(name);
    const list: IField[] = [...fields];
    list.find((e) => {
      if (e.fieldIndex === index) {
        switch (name) {
          case "name":
            e.fieldName = value;
            break;
          case "type":
            e.fieldType = value;
            break;
          case "description":
            e.fieldDescription = value;
            break;
          case "count":
            e.fieldCount = +value;
            break;
        }
      }
    });
    setFields(list);
  };

  return (
    <Container style={{ padding: "2rem 2.8rem" }} fluid={true}>
      <Heading
        addField={addField}
        generateFile={() => {
          generateFile(fields);
        }}
      />
      <FileModal
        show={show}
        handleClose={closeModal}
        title={modalTitle}
        data={generatedData}
      />
      <hr></hr>
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
