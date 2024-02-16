import React from 'react';
import Project from '../Components/Project'; 
import projects from '../data/projects.json'; 
import { Row, Col } from 'react-bootstrap';

function ProjectGallery() {
  return (
    <div className="container mt-5">
      <Row>
        {projects.map(project => (
          <Col sm={12} md={6} lg={4} className="mb-4" key={project.id}> {/* Adjust grid sizes as needed */}
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProjectGallery;
