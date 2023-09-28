import Spinner from "react-bootstrap/Spinner";

const CustomSpinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "block",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "2",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default CustomSpinner;
