import React from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Contact() {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John Smith" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group>
          <Form.Control as="textarea" rows="8" />
        </Form.Group>
      </Form>
    </Container>
  )
}

export default Contact;