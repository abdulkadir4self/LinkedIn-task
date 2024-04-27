import React from "react";
import home_bg from "../../../src/home-bg.webp"
import './Home.css'


import Top_Grant from "./Top_Grant";
import Started_Section from "./Started_Section";
import AboutUs from "./AboutUs";
import SuccessSection from "./SuccessSection";
import Newsletter from "./Newsletter";
import Footer from "./Footer";



function Home(){




    return(<>
    <div    className="container-fluid mx-0 home-container my-component">
        <img src={home_bg} alt="home-background" /> 
        <div className=" child text-light">
          <div className="title"><h4>Why 10x Pand</h4></div>  
          <div className="text-left"><h3>We provide startups <br/>
          with a disproportionate <br/>
          advantage</h3></div>
          <div className="btnDiv">
            <button>Get Started</button>
          </div>
        </div>   
    </div>
    <Top_Grant/>
    <Started_Section/>
    <AboutUs/>
    <SuccessSection/>
    <Newsletter/>
    <Footer/>
    </>)
}


export default React.memo(Home);