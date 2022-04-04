import React from 'react'
import "./_about.css"

function About({about}) {
    return (
        <div className="aboutCard">
          {about.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
              <h2>Languages</h2>
                <p>{item.language1} : {item.splevel1} </p>
                <p>{item.language2} : {item.splevel2} </p>
                <h2>Abilities</h2>
                <div className="abilities">
                    <p className='items'>{item.a}</p>
                    <p className='items'>{item.b}</p>
                    <p className='items'>{item.c}</p>
                    <p className='items'>{item.d}</p>
                    <p className='items'>{item.e}</p>
                    <p className='items'>{item.f}</p>
                    <p className='items'>{item.g}</p>   
                </div>

              </div>
            );
          })}
        </div>
    );
    };
      

export default About