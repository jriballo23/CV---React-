import { useState } from "react";
import "./app.css";
import { CV } from "./components/cv/CV";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";
import More from "./components/More";
import Me from "./components/Me";


const { me, education, experience, about, more} = CV;

function App() {
  const [showEducation, setShowEducation] = useState("1");
  return (
  <> 
    <div className="main">

        <div className="body">

            <div className="left">
              <Me me={me} />
              
            </div>
          
            <div className="right">

                <div className="banner"></div>
                
                <div>
                <div className="btns">
                  <button className="btnEdu" onClick={() => setShowEducation("1")}>Education</button>
                  <button className="btnExp" onClick={() => setShowEducation("2")}>Experience</button>
                  <button className="btnAbo" onClick={() => setShowEducation("3")}>About me</button>
                  <button className="btnMor" onClick={() => setShowEducation("4")}>More</button>
                </div>
                {showEducation==="1" ? (<Education education={education} />) : (showEducation==="2" ? (<Experience experience={experience} />) : (showEducation==="3" ? (<About about={about} />) : (showEducation==="4" ? (<More more={more} />) : (<Education education={education} />)) ))}
                </div>
            </div>
        </div>
   </div>
</>
  )}

export default App;