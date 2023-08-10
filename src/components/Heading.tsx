import { Col, Form, Row, Stack } from "react-bootstrap";

const Heading: React.FC = () => {
  return (
    // <Row>
    //   <Col md={1}>filename : </Col>
    //   <Col>
    //     <Form.Control size="sm" type="text" placeholder="Untitled" />
    //   </Col>
    // </Row>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="1">
        filename
      </Form.Label>
      <Col sm="2">
        <Form.Control readOnly defaultValue="email@example.com" />
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
    </Form.Group>
  );
};

export default Heading;
