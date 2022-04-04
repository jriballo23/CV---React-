import React from 'react'
import "./_experience.css";

function Experience({experience}) {
  return (
    <div className="experienceCard">
    <h2>Experience</h2>
      {experience.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p className="name">📕 {item.name}</p>
            <p>{item.where}</p>
            <p>{item.sector}</p>
            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
);
};
  
export default Experience