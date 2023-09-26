import React, { useState } from "react";
import { Container, Toast, ToastContainer } from "react-bootstrap";
import Heading from "../components/Heading";
import Field, { IField } from "../components/Field";
import { v4 as uuidv4 } from "uuid";
import { getRandomValueFromDescription } from "../api/OpenAI.api";
import FileModal from "../components/FileModal";

const MainLayout: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const [generatedData, setGeneratedData] = useState<string>("");
  const [modalTitle, setModalTitle] = useState("title");
  const [filename, setFilename] = useState("untitled");
  const [rowCount, setRowCount] = useState(1);
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
    setFields(newFields);
  };

  const removeField = (index: string | undefined) => {
    let rows = [...fields];
    rows = fields.filter((field) => {
      return field.fieldIndex !== index;
    });
    setFields(rows);
  };

  const generateFile = async (fields: IField[], rowCount: number) => {
    const result: any = [];
    for (var i = 0; i < rowCount; i++) {
      for (var field of fields) {
        const value = await getRandomValueFromDescription(
          field.fieldDescription || field.fieldName || "",
          field.fieldCount || 1
        );
        const { fieldName } = field;
        result.push({
          [fieldName || "field"]: value,
        });
      }
    }
    setModalTitle(filename);
    openModal();
    if (modalTitle == "untitled") setShowToast(true);

    setGeneratedData(JSON.stringify(result, null, "\t"));
  };

  const handleChange = (
    index: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
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
        filename={filename}
        setFilename={setFilename}
        rowCount={rowCount}
        setRowCount={setRowCount}
        addField={addField}
        generateFile={() => {
          generateFile(fields, rowCount);
        }}
        setFields={setFields}
      />
      <FileModal
        show={show}
        handleClose={closeModal}
        title={modalTitle}
        data={generatedData}
      />
      <hr></hr>
      {fields &&
        fields.map((data) => {
          return (
            <Field
              key={data.fieldIndex}
              data={data}
              removeField={() => removeField(data.fieldIndex)}
              handleChange={handleChange}
            />
          );
        })}
      <ToastContainer
        className="p-3"
        position={"bottom-start"}
        style={{ zIndex: 1 }}
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg={"warning"}
        >
          <Toast.Header>
            <strong className="me-auto">File name</strong>
          </Toast.Header>
          <Toast.Body>Good idea to change filename !</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};
export default MainLayout;
