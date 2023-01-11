import React from 'react';

export default function TechnologyDetails({ tech }) {
  return (
    <div>
      <div className="tech-details-left">
        <span>THE TERMINOLOGY...</span>
        <h1 className="tech-details-name">{tech.name}</h1>
        <p>{tech.description}</p>
      </div>

      <div className="tech-details-right">
        <img src={tech.images.portrait} />
      </div>
    </div>
  );
}
