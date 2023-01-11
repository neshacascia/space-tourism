import React from 'react';

export default function DestinationDetails({ destination }) {
  return (
    <div>
      <div className="planet-details-left">
        <img src={destination.images.png} />
      </div>

      <div className="planet-details-right">
        <h1>{destination.name.toUpperCase()}</h1>
        <p>{destination.description}</p>
        <hr />
        <div className="planet-travel-info">
          <div className="distance">
            <h4>AVG. DISTANCE</h4>
            <span>{destination.distance}</span>
          </div>

          <div className="travel-time">
            <h4>EST. TRAVEL TIME</h4>
            <span>{destination.travel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
