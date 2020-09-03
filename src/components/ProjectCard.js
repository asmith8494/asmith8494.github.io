import React from 'react';

import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


function ProjectCard(props) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Nav>
          <Nav.Item>
            <Nav.Link href={props.live} target={'_blank'}>Live App</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={props.gh} target={'_blank'}>Github</Nav.Link>
          </Nav.Item>
        </Nav>
        <Card.Text>
          {props.summary}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;