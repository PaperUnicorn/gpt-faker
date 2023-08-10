import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";

const MainLayout: React.FC = () => {
  return (
    <Container style={{ padding: "2rem 2.8rem" }} fluid={true}>
      <Heading />
    </Container>
  );
};
export default MainLayout;
