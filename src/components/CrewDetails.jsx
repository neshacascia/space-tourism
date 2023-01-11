import React from 'react';

export default function CrewDetails({ crew }) {
  return (
    <div>
      <div className="crew-details-left">
        <span>{crew.role.toUpperCase()}</span>
        <h1 className="crew-name">{crew.name.toUpperCase()}</h1>
        <p>{crew.bio}</p>
      </div>

      <div className="crew-details-right">
        <img src={crew.images.png} />
      </div>
    </div>
  );
}
