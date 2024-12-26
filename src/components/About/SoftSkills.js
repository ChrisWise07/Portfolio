import React from "react";
import { Col, Row } from "react-bootstrap";
import FlipCard from "./FlipCard";
import { FaTasks, FaUsers, FaCompass, FaPuzzlePiece, FaRobot, FaFlag, FaLock, FaBrain } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoLogoElectron } from "react-icons/io5";

function SoftSkills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<FaFlag />} text="Leadership" textSize="0.4em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<FaBrain />} text="Analytical Thinking" textSize="0.4em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<FaTasks />} text="Management" textSize="0.4em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<FaUsers />} text="Teamwork" textSize="0.4em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<GiWeightLiftingUp />} text="Discipline" textSize="0.4em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<FaCompass />} text="Self-Direction" textSize="0.4em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<FaLock />} text="Security Minded" textSize="0.4em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<FaPuzzlePiece />} text="Problem-Solving" textSize="0.4em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<IoLogoElectron />} text="Quantum Computing" textSize="0.4em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<FaRobot />} text="AI & ML" textSize="0.4em" />
      </Col>
    </Row>
  );
}

export default SoftSkills;