import { Form, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

const Field: React.FC = () => {
  return (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Col sm="2">
        <Form.Control defaultValue="Field 1" />
      </Col>
      <Col sm="1">
        <Form.Select aria-label="Default select example">
          <option value="1">String</option>
          <option value="2">Number</option>
          <option value="3">Object</option>
          <option value="3">Array</option>
        </Form.Select>
      </Col>
      <Col sm="5">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="button-tooltip">
              Add some description about your field, for example write email if
              you want to generate email addresses
            </Tooltip>
          }
        >
          <Form.Control defaultValue="" aria-describedby="description-block" />
        </OverlayTrigger>
      </Col>
      <Col sm="1">
        <Form.Control defaultValue="" />
      </Col>
    </Form.Group>
  );
};

export default Field;
