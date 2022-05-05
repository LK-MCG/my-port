import React from 'react'
import './Header.css'
import '../App.css'


const Header = () => {
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="primary">Hello i'm Luke</h1>
                        <p>I am a self taught Web Developer
                        based in the UK</p>
                        <a href="#project-contain"><button className="btn-primary py-1 px-2">my projects</button></a>
                        <div className="right-image-top col-sm-6"></div>
                    </div>
                  
                </div>
            </div>
        </section>
        
                
          

    )
}
export default Header;