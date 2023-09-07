import { Modal, Button } from "react-bootstrap";

const FileModal: React.FC<{
  show: boolean;
  handleClose: Function;
  title: string;
  data: any;
}> = ({ show, handleClose, title, data }) => {
  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleClose()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default FileModal;
