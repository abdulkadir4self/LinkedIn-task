import React from "react";
import background_Image from '../../images/Noise & Texture.png'
// import '../Grants/'
import '../../pages/Grants/style.css';
import bg from '../../images/OBJECTS.png';
import img3 from '../../images/Frame 427320694.png';





function Grants(){
    return (<>
     <div className="container-fluid row ml-0 grantParent" > 
               <div className="col-lg-6 col-md-6 col-sm-12 col-12 grantChild1">
                  <h1>See latest grant 
               to Apply Latest Scheme</h1>
                  </div>


                              <div className="col-lg-6 col-md-6 col-sm-12 col-12 grantChild2">
                                 <img className="" src={bg} />
                              </div>
     </div>


            <div className="articlesParent">
               
                  <div className=" articlesBtn ">
                     <button>All</button>
                     <button>Active</button>
                     <button>In - Active</button>
                     <button>State</button>
                     <button>Stage</button>
                  </div>

                        <div className="articleSection ">
                           <div className="article">
                           <div className="articleImg">
                              {/* dynamic image from backend goes here */}
                              <img  src={img3}  />
                           </div>
                           <div className="articleContent">
                              {/* dynamic content goes here */}
                              <h3>Startup India Seed Fund Scheme</h3>
                              <p>Send support up to 30 lakh will be provided to the startups on the following.
                                 based on approval by section by SLEC
                              </p>
                              <p>For Apply Last Date: <span>18/02/23</span> {/* dynamic date goes here */}
                              </p>

                              <button className="applyBtn">Apply Now</button>
                           </div>
                           </div>

                           <div className="article">
                           <div className="articleImg">
                              {/* dynamic image from backend goes here */}
                              <img  src={img3}  />
                           </div>
                           <div className="articleContent">
                              {/* dynamic content goes here */}
                              <h3>Startup India Seed Fund Scheme</h3>
                              <p>Send support up to 30 lakh will be provided to the startups on the following.
                                 based on approval by section by SLEC
                              </p>
                              <p>For Apply Last Date: <span>18/02/23</span> {/* dynamic date goes here */}
                              </p>

                              <button className="applyBtn">Apply Now</button>
                           </div>
                           </div>

                        </div>

               
            </div>


    </>)
}

export default React.memo(Grants);