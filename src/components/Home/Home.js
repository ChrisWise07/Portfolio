import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/main_photo.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
// import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> Chris Wise</strong>
              </h1>

              <div style={{ paddingTop: 20, paddingLeft: 50, textAlign: "left", color: "var(--secondary-color)" }}>
                <h2>
                  Computing and Cyber Professional
                </h2>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Profile Pic"
                className="img-fluid main-profile-img"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
