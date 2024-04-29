import React from "react";
import envelop from '../../images/envelope-open-text-solid.svg'


function Newsletter(){

    return(<>
    <div className="container-fluid newsletter">
        <div className="row newsletterChild">
            
        <div className="container-fluid newsletterContent col-lg-5 col-sm-12">
            <h4>Subsribe to Our Newsletter</h4>
            <span>Enter Email</span>
            <input type="text" placeholder="Enter Your Email"></input>
            <button>Subscribe</button>
        </div>

        <div className="envelop col-lg-5 col-md-6 col-sm-12">
         <img src={envelop} />   
        </div>
        </div>
    </div>
    </>)
}

export default React.memo(Newsletter);