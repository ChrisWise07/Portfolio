import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Untitled design.png";
import Toolstack from "./Toolstack";
import SoftSkills from "./SoftSkills"; // Import the SoftSkills component

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "var(--off-white)" }}>
              Who Am I?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingLeft: "150px", paddingTop: "65px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid about-img" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional Skillset
        </h1>

        <SoftSkills />

        <h1 className="project-heading">
          Technical Proficiencies
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Tools I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
