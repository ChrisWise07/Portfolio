import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "3em" }}>
              About Me
            </h1>
            <p className="home-about-body">
              I hold a Bachelor of Computing and Cyber Security (Honours).
              <br></br>
              Graduating from the Australian Defence Force Academy, I currently serve as a RAAF Officer.
              <br></br>
              My interest lie in machine learning, quantum computing, and software engineering.
              <br></br>
              I am deeply fascinated by AI and want to use AI to accelerate science.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>Connect with me</h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ChrisWise07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/chris-a-wise"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:email@chriswise.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
