import { Button, Col, Form, Row, Stack } from "react-bootstrap";

import {
  PlusCircleFill,
  Download,
  EyeFill,
  ArchiveFill,
} from "react-bootstrap-icons";
import { getRandomValueFromDescription } from "../api/OpenAI.api";

const Heading: React.FC<{
  addField: Function;
}> = ({ addField }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Col sm="2">
        <Form.Control defaultValue="untitled" />
      </Col>
      <Col sm="1">
        <Form.Control readOnly />
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
        <Button onClick={() => addField()}>
          <Download />
        </Button>
        <Button onClick={() => addField()}>
          <EyeFill />
        </Button>
        <Button
          onClick={() =>
            getRandomValueFromDescription("indian phone number", 1)
          }
        >
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
