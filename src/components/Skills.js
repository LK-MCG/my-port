import React from 'react'
import './Skills.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFigma } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faHtml5, faWordpress, faJs, faFigma, faReact, faBootstrap, faPhp } from "@fortawesome/free-brands-svg-icons";





const Skills = () => {
    
   
    return(
        <div className="d-flex flex-wrap justify-content-evenly" id="icon-holder">
            <div id="icon-size">
            <FontAwesomeIcon icon={faFigma} />
            </div>
            <div id="icon-size">
            <FontAwesomeIcon icon={faReact} />
            </div>
            <div id="icon-size">
            <FontAwesomeIcon icon={faJs} />
            </div>
            <div id="icon-size">
            <FontAwesomeIcon icon={faCss3} />
            </div>
            <div id="icon-size">
            <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div id="icon-size">
            <FontAwesomeIcon icon={faWordpress} />
            </div>
            <div id="icon-size">
            <FontAwesomeIcon icon={faBootstrap} />
            </div>
            <div id="icon-size">
            <FontAwesomeIcon icon={faPhp} />
            </div>
        </div>

    )
}

export default Skills