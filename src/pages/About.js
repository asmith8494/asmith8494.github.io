import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Jumbotron } from 'react-bootstrap';
import "./About.css";

const profilePicture = require('../components/assets/profilepicture.jpg');


function About() {
  return (
    <div>
        <Row>
          <Col xs={12}>
            <Jumbotron fluid>
              <h1 >Anthony Smith, Web Developer</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row id="mainbody">
          <Col lg={12}>
            
                <Image src={profilePicture} fluid/>
                <p>
                Hello, my name is Anthony Smith. I have been a web developer for 6 months. I have learned many popular technologies including: HTML, CSS, Javascript, jQuery, Node, mySQL,
                Express, MongoDB, and React.
                </p>

                <p>
                I am currently employed at Amazon where I am fortunate enough to be able to continue developing my skills in web development.
                </p>

                <p>
                Outside of work, I am continuously looking for opportunities to design and implement websites. Projects currently under development indlude fully functional photography websites for my girlfriend Tori and best friend Lindsey.
                </p>

                <p>
                  Upon the completion of this Bootcamp, I will begin working on functional web tools for my team at Amazon. These tools will not only increase our teams efficiency, but more importantly, the data, quality trends, and associate tracking will be much better. I am very excited to embark on this project as the technologies learned in this course are just the beginning.
                  Effective web tools at Amazon are deployed with AWS and together with Python and Javascript, are extremely powerful. In addition to the capabilities of these tools, I intend on bringing some flare and design to otherwise boring looking web tools. The users will feel less like drones with some beauty in their day to day work.
                </p>
          </Col>
        </Row>
    </div>
  );
}

export default About;