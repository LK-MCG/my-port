import React from 'react'
import './Projects.css'
import './TechJourney.css'
import Tech from '../tech-image.jpg'
import Projectpage from './Projectpage.js'
import Ratio from 'react-bootstrap/Ratio'

// add four different router links for each of the project pages change the a tag to links


const Projects = () => {
    return(
            <div id="project-contain" className="container-fluid p-4">
                    <div className="d-flex justify-content-center">
                        <div className="">
                        <h1>My Projects</h1>
                        </div>
                    </div>

                    <div className="row mt-3 mb-5 justify-content-center m-auto container gy-5" id="contain">

                        {/* <div id="project-box-one" className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <a href="/projectone">
                            <img className="img-fluid" src={Tech} alt='Tech-Image' id="project-image" />
                            </a>
                        </div>
                        <div id="project-box-two" className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <a href="#header-contain">
                            <img className="img-fluid" src={Tech} alt='Tech-Image'  id="project-image" />
                            </a>
                        </div>
                        <div id="project-box-three" className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <a href="#header-contain">
                            <img className="img-fluid" src={Tech} alt='Tech-Image'  id="project-image" />
                            </a>
                        </div>
                        <div id="project-box-four" className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <a href="#header-contain">
                            <img className="img-fluid" src={Tech} alt='Tech-Image'  id="project-image" />
                            </a>
                        </div> */}

                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="ratio ratio-16x9" id="project-vid-one">
                            <iframe width="983" height="553" src="https://www.youtube.com/embed/aCw2aNJqWjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="ratio ratio-16x9" id="project-vid-two">
                            <iframe width="983" height="553" src="https://www.youtube.com/embed/lFfOOOG-4FM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="ratio ratio-16x9" id="project-vid-one">
                            <iframe width="983" height="553" src="https://www.youtube.com/embed/_x3MZayFjYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="ratio ratio-16x9" id="project-vid-two">
                            <iframe width="699" height="393" src="https://www.youtube.com/embed/iZvzCDIbxDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        


                         </div>
                    
                </div>  
      
    )
}

export default Projects