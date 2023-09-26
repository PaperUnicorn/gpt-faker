import { load } from "js-yaml";
import { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import {
  PlusCircleFill,
  Download,
  EyeFill,
  ArchiveFill,
} from "react-bootstrap-icons";
import { IField } from "./Field";

interface Preset {
  fields: IField[];
}
const Heading: React.FC<{
  filename: string;
  setFilename: Function;
  rowCount: number;
  setRowCount: Function;
  addField: Function;
  generateFile: Function;
  setFields: Function;
}> = ({
  filename,
  setFilename,
  rowCount,
  setRowCount,
  addField,
  generateFile,
  setFields,
}) => {
  const inputFile = useRef<HTMLInputElement | null>(null);
  const loadPreset = () => {
    inputFile.current?.click();
  };
  const fileSelected = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const reader = new FileReader();
    const file = event?.target?.files;
    reader.onload = async (e) => {
      const text: string = e.target?.result! as string;
      const fields: any = load(text) as Preset;
      console.log(fields.fields);
      setFields(fields.fields);
    };
    const read = reader.readAsText(event?.target?.files[0]);
  };
  return (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Col sm="2">
        <Form.Control
          defaultValue={filename}
          onChange={(e) => setFilename(e.target.value)}
        />
      </Col>
      <Col sm="1">
        <Form.Control
          defaultValue={rowCount}
          onChange={(e) => setRowCount(e.target.value)}
        />
      </Col>
      <Col sm="1">
        <Form.Control readOnly />
      </Col>
      <Col sm="1">
        <Form.Control readOnly />
      </Col>
      <Col sm="4"></Col>
      <Col
        sm="2"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={(e) => fileSelected(e)}
        />
        <Button onClick={() => generateFile()}>
          <Download />
        </Button>
        <Button onClick={() => addField()}>
          <EyeFill />
        </Button>
        <Button onClick={() => loadPreset()}>
          <ArchiveFill />
        </Button>
      </Col>
      <Col sm="1" style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => addField()}>
          <PlusCircleFill />
        </Button>
      </Col>
    </Form.Group>
  );
};

export default Heading;
