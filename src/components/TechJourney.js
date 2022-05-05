import React from 'react'
import Tech from '../tech-image.jpg'
import Code from '../codeleft.jpg'


const TechJourney = () => {
    return(

            <div className="text-sm-start" id="tech-contain">
                <div className="container">
                    <div className="d-xl-flex align-items-center justify-content-between p-5">
                        <div className="w-100 mb-5 m-xl-5">
                         <h1>My Tech Journey</h1>
                         <br />
                            <h4>2014-2015</h4>
                            <p>My Web Development journey began, I spent a year working through 
                            various courses online using Team Treehouse part time.</p>
                            <h4>2016-2018</h4>
                            <p>I started working for a charity teaching Adults with learning difficulties
                             how to use and build computers, I continued learning how to code part time at home as a hobbie 
                             I very much enjoy.</p>
                            <h4>2019-2021</h4>
                            <p>I've worked through multiple courses for HTML, CSS, JS, PHP and Wordpress</p>
                            <h4>2022</h4>
                            <p>I began learning React in 2022 and also gained a Mentor who has helped me with
                            sound advice and support</p>
                        </div>
                        <div className="w-100">
                         <img className="image-fluid w-100 m-auto" src={Tech} alt='Tech-Image'  id="tech-image" />
                        </div>
                    </div>
                </div>
            </div>       
               
            
        

    )
}


export default TechJourney