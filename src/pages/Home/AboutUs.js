import React from "react";
import roundImg from '../../images/Ellipse 23.png'





function AboutUs(){
    return(<>
    
    <div className="aboutUs">
        <div className="aboutUs-fstChild">
            <img src={roundImg}/>
        </div>
        <div className="aboutUs-scndChild">
            <h5>Want to Know more about us</h5>
            <p>Government of Gujrat has been at the forefront of advanced <br/>
            technoligies for effective public service delivery. These includes..
            </p>
            <button>About Us</button>
        </div>
        <div className="aboutUs-thrChild">
        <img src={roundImg}/>
        </div>
    </div>
    
    </>)
}

export default React.memo(AboutUs);