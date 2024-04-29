import React from "react";
import resource from '../../images/resource 1.png'
import '../../pages/Resources/style1.css';
import frame2 from '../../images/Frame 427320775 (1).png'
import frame3 from '../../images/Frame 427320775 (2).png'
import frame4 from '../../images/Frame 427320775 (3).png'
import frame1 from '../../images/Frame 427320694.png'





function Resources(){
    return (<>
     <div className="container-fluid row ml-0 resourceParent" > 
               <div className="col-lg-6 col-md-6 col-sm-12 col-12 resourceChild1">
                  <h1>See latest grant 
               to Apply Latest Scheme</h1>
                  </div>


                              <div className="col-lg-6 col-md-6 col-sm-12 col-12 resourceChild2">
                                 <img className="" src={resource} />
                              </div>
     </div>


            <div className="categoryParent">
               
                  <div className=" categoryBtn ">
                     <button>All</button>
                     <button>PITCH</button>
                     <button>HR DROP</button>
                     <button>DESIGN</button>
                     <button>AI TOOLS</button>
                     <button>ECONOMICS</button>
                     <button>ENTREPRENEUR</button>
                     
                  </div>

                        <div className="resourceCategorySection">
                           <div className="category">
                           <div className="categoryImg">
                           <img src={frame2} />
                           </div>

                           <div className="categoryContent">
                              {/* dynamic content goes here */}
                              <h3>Financial</h3>
                              <p>Four Ways a Clean Workplace Makes Employees Happy and Healthy
                              </p>

                           </div>
                           </div>

                           <div className="category">
                           <div className="categoryImg">
                           <img src={frame3} />
                           </div>

                           <div className="categoryContent">
                              {/* dynamic content goes here */}
                              <h3>Financial</h3>
                              <p>Four Ways a Clean Workplace Makes Employees Happy and Healthy
                              </p>

                           </div>
                           </div>


                           <div className="category">
                           <div className="categoryImg">
                           <img src={frame4} />
                           </div>

                           <div className="categoryContent">
                              {/* dynamic content goes here */}
                              <h3>Financial</h3>
                              <p>Four Ways a Clean Workplace Makes Employees Happy and Healthy
                              </p>

                           </div>
                           </div>



                        </div>

               
            </div>


    </>)
}

export default React.memo(Resources);