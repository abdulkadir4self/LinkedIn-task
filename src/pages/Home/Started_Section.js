import React from "react";
import started_bg from "../../images/div.elementor-element.png"
import character from '../../images/Character.png'


function Started_Section(){
    return(<>
    <div className="container-fluid pt-5 started_section">
        {/* <img src={started_bg} /> */}
        <div className=" row container p-1 started_section_child">
        <div className="started_box started_box1 col-lg-5 col-sm-6">
            <h6>How's It Started</h6>
            <h5>We assist founder in creating <br/>something people desire, with...</h5>

            <p>We help founder at their earliest regardless of thier age<br/>
            54% of YC's billion dollar companies had no revenue when they <br/>
            applied. thier age 54% of YC's billion dollar companies had no revenue<br/>
            applied.
            </p>
        </div>
        <div className="started_box started_box2 col-lg-5 col-sm-6">
            <div>
            <img height={'130px'} src={character}/>
            </div>
            <div className="numberParent mt-2">
                <div className="numbers"><h5>100+</h5><p>Recourse</p> </div>
                <div className="numbers"><h5>200+</h5><p>Community</p></div>
                <div className="numbers"><h5>500+</h5><p>Network</p></div>
                <div className="numbers"><h5>200+</h5><p>Community</p></div>
            </div>
        </div>


        </div>
    </div>
    </>)
}


export default React.memo(Started_Section);