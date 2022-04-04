import React from "react";
import "./_education.css";

const Education = ({ education }) => {
  return (
      <div className="educationCard">
      <h2>Education</h2>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
  );
};

export default Education;