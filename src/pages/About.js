import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Jumbotron } from 'react-bootstrap';

const profilePicture = require('../components/assets/profilepicture.jpg');

const styles = {
  textAlign: 'center'
};

function About() {
  return (
    <div>
        <Row height={'85%'}>
          <Col xs={4}>
            <Image src={profilePicture} width={'100%'}/>
          </Col>
          <Col xs={8}>
            <Jumbotron fluid>
              <h1 style={styles}>Anthony Smith, Web Developer</h1>
              <Container>
                <p>
                  Hello, my name is Anthony Smith. I have been a web developer for 6 months. I have learned many popular technologies including: HTML, CSS, Javascript, jQuery, Node, mySQL,
                  Express, MongoDB, and React.

                  <br></br><br></br>I am currently employed at Amazon where I am fortunate enough to be able to continue developing my skills in web development.
                  <br></br><br></br>Outside of work, I am continuously looking for opportunities to design and implement websites. Projects currently under development indlude a fully functional photography website for my girlfriend Tori,

                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
    </div>
  );
}

export default About;