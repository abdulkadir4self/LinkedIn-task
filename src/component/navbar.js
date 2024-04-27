import React, { useState } from "react";
import logo from "../assets/images/LOgos.png";
import avatar from "../assets/images/26.png";
import "./navbar.css";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <nav class="custom-navbar navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand text-light" href="#">
          <img
            id="logo"
            src={logo}
            width="30"
            height="30"
            class="d-inline-block align-top mr-2"
            alt="logo"
          />
          10x pand
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto ">
            <li
              class={`nav-item ${activeItem === 0 ? "active" : ""}`}
              onClick={() => handleItemClick(0)}
            >
              <a class="nav-link text-light" href="#">
                Home
              </a>
            </li>
            <li
              class={`nav-item ${activeItem === 1 ? "active" : ""}`}
              onClick={() => handleItemClick(1)}
            >
              <a class="nav-link text-light" href="#">
                Grants
              </a>
            </li>
            <li
              class={`nav-item ${activeItem === 2 ? "active" : ""}`}
              onClick={() => handleItemClick(2)}
            >
              <a class="nav-link text-light" href="#">
                Resources
              </a>
            </li>
            <li
              class={`nav-item ${activeItem === 3 ? "active" : ""}`}
              onClick={() => handleItemClick(3)}
            >
              <a class="nav-link text-light" href="#">
                Start-Up Story
              </a>
            </li>
            <li
              class={`nav-item ${activeItem === 4 ? "active" : ""}`}
              onClick={() => handleItemClick(4)}
            >
              <a class="nav-link text-light" href="#">
                Blog
              </a>
            </li>
            <li>
              <img
                src={avatar}
                width="35"
                height="35"
                class="d-inline-block align-top mt-3 ml-1"
              />
            </li>
          </ul>
        </div>
      </nav>
      <div className="custom-navbar-border"></div>
    </>
  );
}

export default React.memo(Navbar);




// import React from "react";
// import logo from "../assets/images/LOgos.png"
// import avatar from "../assets/images/26.png"
// import './navbar.css'



// function Navbar(){
//     return(<>
    
//     <nav class="custom-navbar navbar navbar-expand-lg ">
//     <a class="navbar-brand text-light" href="#">
//     <img id="logo" src={logo} width="30" height="30" class="d-inline-block align-top mr-2" alt="logo"/>
//     10x pand
//   </a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul class="navbar-nav ml-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Grants</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Resources</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Start-Up Story</a>
//       </li><li class="nav-item">
//         <a class="nav-link" href="#">Blog</a>
//       </li>
//       <li>
//         <img src={avatar} width="35" height="35" class="d-inline-block align-top mt-3 ml-1"/>
//       </li>
//     </ul>
//   </div>
// </nav>
//   <div className="custom-navbar-border"></div>
//     </>)
// }

// export default React.memo(Navbar);