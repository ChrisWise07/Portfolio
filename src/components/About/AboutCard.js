import React from "react";
import Card from "react-bootstrap/Card";
import { GoArrowRight } from "react-icons/go";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am Chris Wise from Canberra, Australia. I currently server as a Royal Australian Air Force Officer. 
            I have a Bachelor of Computing and Cyber Security (Honours) degree from the University of New South Wales. 
            I am interested in reading and learning about AI, mathematics, computer science, quantum physics.
            For my honours thesis, I investigated the application of machine learning to quantum computing.  
            I am deeply fascinated by AI and want to use AI to accelerate science. 
            My longterm goal is to work for Google DeepMind using AI for fusion and renewable energy research, and or longevity research.
            <br />
            <br />
            My personal interests include
          </p>
          <ul>
            <li className="about-activity">
              <GoArrowRight /> Mountaineering and Rock Climbing
            </li>
            <li className="about-activity">
              <GoArrowRight /> Health and Wellbeing
            </li>
            <li className="about-activity">
              <GoArrowRight /> Self-Improvement
            </li>
            <li className="about-activity">
              <GoArrowRight /> Music Production
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
