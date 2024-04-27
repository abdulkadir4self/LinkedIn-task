import React from "react";
import success_img0 from '../../assets/images/Rectangle 5.png'
import success_img1 from '../../assets/images/Rectangle 5 (1).png'
import success_img2 from '../../assets/images/Rectangle 5 (2).png'
import success_bg from '../../assets/images/div.elementor-element.png'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SuccessSection(){
    return(<>
   <div className="container-fluid p-0 successSection">
    {/* <img src={success_bg} style={{backgroundColor: 'black'}} /> */}
   <div className="success p-2 container-fluid">
        <div><h3 className="p-2">Success Startup Story</h3></div>
        <div className="">
            <div className="cardParent  row  ">
            <div className="card mb-3" style={{width: "18rem"}}>
                    <img src={success_img0} className="card-img-top p-2" alt="card-image"/>
                    <div className="card-body">
                        <h5 className="card-title">Women in Tech</h5>
                        <p className="card-text">Some quick example text to build bulk of the card's <a href="#">Read more</a></p>

                    </div>
</div>


<div className="card mb-3" style={{width: "18rem"}}>
  <img src={success_img1} className="card-img-top p-2" alt="card-image2"/>
  <div className="card-body">
    <h5 className="card-title">Your favourite sport</h5>
    <p className="card-text">Some quick example text to build bulk of the card's <a href="#">Read more</a></p>

  </div>
</div>



<div className="card mb-3 " style={{width: "18rem"}}>
  <img src={success_img2} className="card-img-top p-2   " alt=".." />
  <div className="card-body">
    <h5 className="card-title">E-Commerce</h5>
    <p className="card-text">Some quick example text to build bulk of the card's <a href="#">Read more</a></p>
  </div>
</div>
            </div>
        </div>

    </div>
   <div className="navButtons">
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="white" height={'20px'} width={'20px'} viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="white" height={'20px'} width={'20px'} viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
   </div>
   </div>
    </>)
}


export default React.memo(SuccessSection);