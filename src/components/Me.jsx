import React from "react";
import "./_me.css";



const Me = ({ me }) => {
  return (
    <div>
      <img className="image1" src={me.image} alt="" />
      <div className="cardLeft">
      <h2>
        {me.name} {me.adress}
      </h2>
        <p>{me.city} </p>
        <p>{me.birthDate}</p>
        <p>
          
          <a href={"mailto:" + me.email}>
          jriballo23@gmail.com
          </a>
        </p>
        <p> {me.phone}</p>
        <div className="links">
            <a href={me.linkedin}><img className="linkedinLogo" src={me.linkedinLogo} alt="linkedinlogo"/></a> 
            <a href={me.gitHub}><img className="gitLogo" src={me.gitLogo} alt="gitlogo"/></a>
        </div>
        
      </div>
    </div>
  );
};

export default Me;

