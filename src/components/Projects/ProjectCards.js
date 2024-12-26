import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card 
      className={`project-card-view ${props.inProgress ? 'project-card-view-in-progress' : ''}`}
    >
      <div className="project-card-img-container">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ height: props.imgHeight, width: props.imgWidth }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title} {props.inProgress && <span style={{ color: "var(--warning_orange)" }}>(In Progress)</span>}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            GitHub
          </Button>
        )}
        {props.arxivLink && (
          <Button variant="primary" href={props.arxivLink} target="_blank" style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp;
            arXiv
          </Button>
        )}
        {props.pdfLink && (
          <Button variant="primary" href={props.pdfLink} target="_blank" style={{ marginLeft: "10px" }}>
            <AiOutlineFilePdf /> &nbsp;
            PDF
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;