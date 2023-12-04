import React from "react";
import AppNavbar from "../components/AppNavbar";
import AppSidebar from "../components/AppSidebar";
import { Container, Row, Col } from "reactstrap";
const AppLayout = (props) => {
  return (
    <Container className="m-0 p-0" fluid>
      <Row className="m-0 p-0">
        <Col xs={12} className="px-0">
          <AppNavbar />
        </Col>
        <Col md={2} className="bg-light px-0 d-none d-md-inline mx-0">
          <AppSidebar />
        </Col>
        <Col xs={12} md={10} className="pt-3 mx-0 px-0">
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default AppLayout;
