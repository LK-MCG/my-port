import React from 'react'
import AboutImage from '../about-image.jpg'
import './About.css'


const About = () => {
    return(

            <div className="text-sm-start" id="about-contain">
                <div className="container">
                    <div className="d-md-flex flex-row-reverse align-items-center justify-content-between p-5">
                        <div className="mx-5">
                         <h1 className="mb-3">About Me</h1>
                         <p>I have always been interested in IT for as long as i can remember and envisioned a career in the future.</p>
                        <p>I am a self taught Web developer who loves coding and always strives to improve and develop.
                        I'm a family man with a wife and three children and love spending time with my family.</p>
                        <p>My interests and hobbies are computers(coding and gaming), watching movies and tv series, I'm also a 
                        casual boxing fan.</p>
                        </div>
                        <img className="image-fluid w-50 m-3" src={AboutImage} alt='About-Image'  id="about-image" />
                    </div>
                </div>
            </div>       
               
            
        

    )
}


export default About