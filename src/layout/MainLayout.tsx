import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import Field from "../components/Field";

const MainLayout: React.FC = () => {
  return (
    <Container style={{ padding: "2rem 2.8rem" }} fluid={true}>
      <Heading />
      <Field />
      <Field />
    </Container>
  );
};
export default MainLayout;
