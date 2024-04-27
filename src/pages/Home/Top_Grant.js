import React from "react";
import img1 from "../../assets/images/InvestorConnectLogoSVGSmall 1.png"
import img2 from "../../assets/images/Logo1.png"

function Top_Grant(){
    return(<>
    
    <div className="grantDiv container-fluid">
        <div className="GrantTitle">
            <h1 className="text-light pt-5 pb-3">Top Grant</h1>
        </div>
        <div className="row grantChild">
        <div className="grantBox col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="icon text-light"> <img src={img1} /></div>
            <div className="content text-light">
                <h1>Startup India <br/> Seed Fund Scheme</h1>
                <p>Last Date:18/02/2023</p>
            </div>

        </div>
        <div className="grantBox grantBox2 col-lg-4 col-md-6 col-sm-12  mb-3  ">
        <div className="icon text-light"> <img src={img2} /></div>
            <div className="content text-light text-left">
                <h1>Startup India <br/> Seed Fund Scheme</h1>
                <p>Financial assistance to startups <br/> for proff of concept, prototype</p>
                <p>Last Date:18/02/2023</p>
            </div>
        </div>
        <div className="grantBox grantBox2 col-lg-4 col-md-6 col-sm-12  mb-3 ">
        <div className="icon text-light"> <img src={img2} /></div>
            <div className="content text-light text-left">
                <h1>Startup India <br/> Seed Fund Scheme</h1>
                <p>Financial assistance to startups <br/> for proff of concept, prototype</p>
                <p>Last Date:18/02/2023</p>
            </div>
        </div>
</div>
    </div>
    
    </>)
}

export default React.memo(Top_Grant);