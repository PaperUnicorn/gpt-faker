import {
  Form,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";

import { TrashFill } from "react-bootstrap-icons";

export interface IFieldWrapper {
  data: IField;
  removeField?: Function;
  handleChange?: Function;
}

export interface IField {
  fieldIndex?: string;
  fieldName?: string;
  fieldType?: string;
  fieldDescription?: string;
  fieldCount?: number;
}

const Field: React.FC<IFieldWrapper> = ({
  data,
  removeField,
  handleChange,
}) => {
  const { fieldIndex, fieldName, fieldType, fieldDescription, fieldCount } =
    data;
  return (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Col sm="2">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="button-tooltip">field name</Tooltip>}
        >
          <Form.Control
            onChange={(e) => {
              handleChange && handleChange(fieldIndex, e);
            }}
            name="name"
            defaultValue={fieldName}
          />
        </OverlayTrigger>
      </Col>
      <Col sm="1">
        <Form.Select
          aria-label="Default select example"
          name="type"
          onChange={(e) => {
            handleChange && handleChange(fieldIndex, e);
          }}
          defaultValue={fieldType}
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
            defaultValue={fieldDescription}
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
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="button-tooltip">delete field</Tooltip>}
        >
          <Button
            onClick={() => {
              removeField && removeField(fieldIndex);
            }}
          >
            <TrashFill />
          </Button>
        </OverlayTrigger>
      </Col>
    </Form.Group>
  );
};

export default Field;
