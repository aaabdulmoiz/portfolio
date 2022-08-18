import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import instaFeed from '../../Assets/Projects/instaFeed.png'
import cricScorer from '../../Assets/Projects/cricScorer.png'
import collabovid from '../../Assets/Projects/collabovid.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Private"
              description="I am currently working as a backend engineer developing APIs for a clients fintech application. Responsible for backend development of the admin portal and developing APIs for different flow for a mobile application using microservice architecture."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collabovid}
              isBlog={false}
              title="Collabovid"
              description="This mobile application was built on React Native with a NodeJS backend. Leveraging the Google Maps API, whenever a user was in need of something, they could post it in the application with their location and anyone within an area of 2km would get a notification regarding it."
              frontendLink="https://github.com/aaabdulmoiz/collabovid-frontend"
              backendLink="https://github.com/aaabdulmoiz/collabovid"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instaFeed}
              isBlog={false}
              title="Instagram Replica"
              description="Built as a web application to replicate the functionality of Instagram. This web application allowed the users to upload posts and users were able to like and comment on them. Furthermore, I used to socket.io to facilitate private chat between the users."
              backendLink = "https://github.com/aaabdulmoiz/insta-backend"
              frontendLink = "https://github.com/aaabdulmoiz/insta-frontend"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Blood Donation Web App"
              description="Front-end code for the web development Project. Through this web application, you could get the information on the nearest hospitals and if you wanted to donate blood , you could fill a form. Any one need the blood donation would be able to contact you."
              frontendLink="https://github.com/aaabdulmoiz/Blood-Donation-app"
              backendLink="https://github.com/aaabdulmoiz/Backend-blood-donation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricScorer}
              isBlog={false}
              title="CricScorer"
              description="An app to keep score of cricket matches. This Web Application was made in HTML, CSS, JavaScript and MySql and it was my first Web Development Project. The basic idea of the app was to provide cricket teams to keep track of their scores in an easier way and the abilty to challenge other teams registered on the website."
              ghLink="https://github.com/aaabdulmoiz/CricketScorer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
