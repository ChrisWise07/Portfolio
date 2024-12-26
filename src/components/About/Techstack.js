import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiPython, DiGit, DiJava, DiLinux } from "react-icons/di";
import { SiC, SiGnubash } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import FlipCard from "./FlipCard"; // Import the FlipCard component

function LanguageProficiencies() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<DiPython />} text="Python" textSize="0.5em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<DiLinux />} text="Linux CLI" textSize="0.5em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<SiGnubash />} text="Bash" textSize="0.5em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<DiGit />} text="Git" textSize="0.5em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<AiOutlineConsoleSql />} text="SQL" textSize="0.5em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<DiJavascript1 />} text="JavaScript" textSize="0.5em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<DiReact />} text="React" textSize="0.5em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<DiJava />} text="Java" textSize="0.5em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<CgCPlusPlus />} text="C++" textSize="0.7em" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FlipCard icon={<SiC />} text="C" textSize="1.0em" />
      </Col>
    </Row>
  );
}

export default LanguageProficiencies;