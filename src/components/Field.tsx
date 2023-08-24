import {
  Form,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";

import { TrashFill } from "react-bootstrap-icons";

export interface IField {
  fieldIndex?: string;
  fieldName?: string;
  fieldType?: string;
  fieldDescription?: string;
  fieldCount?: number;
  removeField?: Function;
  handleChange?: Function;
}

const Field: React.FC<IField> = ({
  fieldIndex,
  fieldName,
  fieldType,
  fieldDescription,
  fieldCount,
  removeField,
  handleChange,
}) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Col sm="2">
        <Form.Control
          onChange={(e) => {
            handleChange && handleChange(fieldIndex, e);
          }}
          name="name"
        />
      </Col>
      <Col sm="1">
        <Form.Select
          aria-label="Default select example"
          name="type"
          onChange={(e) => {
            handleChange && handleChange(fieldIndex, e);
          }}
        >
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="object">Object</option>
          <option value="array">Array</option>
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
          <Form.Control
            defaultValue=""
            aria-describedby="description-block"
            name="description"
            onChange={(e) => {
              handleChange && handleChange(fieldIndex, e);
            }}
          />
        </OverlayTrigger>
      </Col>
      <Col sm="1">
        <Form.Control
          defaultValue=""
          name="count"
          onChange={(e) => {
            handleChange && handleChange(fieldIndex, e);
          }}
        />
      </Col>

      <Col sm="2"></Col>

      <Col sm="1" style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={() => {
            removeField && removeField(fieldIndex);
          }}
        >
          <TrashFill />
        </Button>
      </Col>
    </Form.Group>
  );
};

export default Field;
