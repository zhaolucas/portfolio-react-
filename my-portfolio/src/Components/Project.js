import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Project.css'; // Adjusted to simply import the CSS for side effects

function Project({ project }) {
  // Prepend process.env.PUBLIC_URL to the image path
  const imageUrl = process.env.PUBLIC_URL + project.image;

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imageUrl} className="img-fluid" style={{ objectFit: 'cover', height: '200px' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.title}</Card.Title>
        <div className="mt-auto">
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">View Project</a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub Repo</a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;
