import { Button, Col, Form, Row, Stack } from "react-bootstrap";

const Heading: React.FC = () => {
  return (
    // <Row>
    //   <Col md={1}>filename : </Col>
    //   <Col>
    //     <Form.Control size="sm" type="text" placeholder="Untitled" />
    //   </Col>
    // </Row>

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
        <Button>Add field</Button>
      </Col>
    </Form.Group>
  );
};

export default Heading;
