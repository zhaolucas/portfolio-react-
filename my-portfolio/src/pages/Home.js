import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Home.css';

function Home() {
  // Correctly constructing the image URL
  const mugshotImageUrl = process.env.PUBLIC_URL + '/images/mugshot.jpg';

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center">
            <Card.Header as="h1">Lucas Zhao</Card.Header>
            {/* Use mugshotImageUrl for the src attribute */}
            <Card.Img variant="top" src={mugshotImageUrl} alt="Lucas Zhao" className="custom-mugshot" />
            <Card.Body>
              <Card.Title>Hello, World</Card.Title>
              <Card.Text>
                Check out my portfolio of projects in the project gallery.
              </Card.Text>
              {/* Adjust href for CV download */}
              <Button variant="primary" href={`${process.env.PUBLIC_URL}/cv.pdf`} download="LucasZhao_CV.pdf">Download CV</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
