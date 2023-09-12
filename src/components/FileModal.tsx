import { Modal, Button } from "react-bootstrap";

const FileModal: React.FC<{
  show: boolean;
  handleClose: Function;
  title: string;
  data: any;
}> = ({ show, handleClose, title, data }) => {
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      data
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = title + ".json";
    link.click();
  };

  return (
    <Modal show={show}>
      <Modal.Header style={{ background: "grey" }} closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "black" }}>
        <pre>{data}</pre>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => exportData()}>
          Save to file
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default FileModal;
