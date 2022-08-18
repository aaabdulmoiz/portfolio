import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdul Moiz </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />I am a software enigineer currently working at one of the largest software house in Pakistan.
            <br />
            <br />
            I am a FullStack Engineer who has 1+ years of experience in building web application. Some of 
            the technologies I use daily include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> NodeJS
            </li>
            <li className="about-activity">
              <ImPointRight /> ReactJS
            </li>
            <li className="about-activity">
              <ImPointRight /> ExpressJS
            </li>
            <li className="about-activity">
              <ImPointRight /> MongoDB
            </li>
            <li className="about-activity">
              <ImPointRight /> Docker
            </li>
            <li className="about-activity">
              <ImPointRight /> TypeScript
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
