import { load } from "js-yaml";
import { useRef, useState } from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Col,
  Form,
  OverlayTrigger,
  Row,
  ToggleButton,
  Tooltip,
} from "react-bootstrap";

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
  const [checked, setChecked] = useState(false);
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
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="button-tooltip">filename</Tooltip>}
        >
          <Form.Control
            defaultValue={filename}
            onChange={(e) => setFilename(e.target.value)}
          />
        </OverlayTrigger>
      </Col>
      <Col sm="1">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="button-tooltip">row count</Tooltip>}
        >
          <Form.Control
            defaultValue={rowCount}
            onChange={(e) => setRowCount(e.target.value)}
          />
        </OverlayTrigger>
      </Col>
      <Col sm="1">
        <ButtonGroup>
          <ToggleButton
            id="toggle-check-json"
            type="checkbox"
            variant="secondary"
            checked={checked}
            value="json"
            onChange={(e) => setChecked(true)}
          >
            JSON
          </ToggleButton>
          <ToggleButton
            id="toggle-check-csv"
            type="checkbox"
            variant="secondary"
            checked={!checked}
            value="csv"
            onChange={(e) => setChecked(false)}
          >
            CSV
          </ToggleButton>
        </ButtonGroup>
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
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="button-tooltip">generate</Tooltip>}
        >
          <Button onClick={() => generateFile()}>
            <Download />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="button-tooltip">view</Tooltip>}
        >
          <Button onClick={() => addField()}>
            <EyeFill />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="button-tooltip">load preset</Tooltip>}
        >
          <Button onClick={() => loadPreset()}>
            <ArchiveFill />
          </Button>
        </OverlayTrigger>
      </Col>
      <Col sm="1" style={{ display: "flex", justifyContent: "flex-end" }}>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="button-tooltip">add field</Tooltip>}
        >
          <Button onClick={() => addField()}>
            <PlusCircleFill />
          </Button>
        </OverlayTrigger>
      </Col>
    </Form.Group>
  );
};

export default Heading;
