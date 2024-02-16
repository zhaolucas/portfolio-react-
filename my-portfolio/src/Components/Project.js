import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './Project.css'; 

function Project({ project }) {
  return (
    <Card className="h-100"> {/* Ensures that the card takes full height */}
      <Card.Img variant="top" src={project.image} className="img-fluid" style={{ objectFit: 'cover', height: '200px' }} />
      <Card.Body className="d-flex flex-column"> {/* Flex container for the card body */}
        <Card.Title>{project.title}</Card.Title>
        {/* Flex-grow-1 will push everything else to the bottom */}
        <div className="mt-auto">
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">View Project</a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub Repo</a>
        </div>
      </Card.Body>
    </Card>
  );
}
export default Project;