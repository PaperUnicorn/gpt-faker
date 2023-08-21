import { Button, Col, Form, Row, Stack } from "react-bootstrap";

const Heading: React.FC<{
  addField: Function;
}> = ({ addField }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Col sm="2">
        <Form.Control defaultValue="untitled" />
      </Col>
      <Col sm="2">
        <Form.Control readOnly defaultValue="email@example.com" />
      </Col>
      <Col sm="2">
        <Form.Control readOnly defaultValue="email@example.com" />
      </Col>
      <Col sm="2">
        <Form.Control readOnly defaultValue="email@example.com" />
      </Col>
      <Col sm="3"></Col>
      <Col sm="1">
        <Button onClick={() => addField()}>Add field</Button>
      </Col>
    </Form.Group>
  );
};

export default Heading;
