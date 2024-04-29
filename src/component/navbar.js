import React, { useState } from "react";
import logo from "../images/LOgos.png";
// import avatar from "../images/26.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";

// write a backend logic for protected route. eg if user is login then user can see all routes.
//  if not logged in user cant access these pages through url.
function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index); //to add active class on clicked link.
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
          <ul class="navbar-nav ml-auto text-center">
            <li
              class={`nav-item ${activeItem === 0 ? "active" : ""}  mt-1`}
              onClick={() => handleItemClick(0)}
            >
              <NavLink to='/' class="nav-link text-light" id="navlink" href="#">
                Home
              </NavLink>
            </li>
            {/* gave single id to all elements because the class was not working. i couldn't check why
            due to shortage of time */}
            <li
              class={`nav-item ${activeItem === 1 ? "active" : ""} mt-1`}
              onClick={() => handleItemClick(1)}
            >
              <NavLink to='/grants' class="nav-link text-light" id="navlink"  href="#">
                Grants
              </NavLink>
            </li>
            <li
              class={`nav-item ${activeItem === 2 ? "active" : ""} mt-1`}
              onClick={() => handleItemClick(2)}
            >
              <NavLink to='/resources' class="nav-link text-light " id="navlink"  href="#">
                Resources
              </NavLink>
            </li>
            <li
              class={`nav-item ${activeItem === 3 ? "active" : ""} mt-1`}
              onClick={() => handleItemClick(3)}
            >
              <NavLink to='' class="nav-link text-light" id="navlink"  href="#">
                Start-Up Story
              </NavLink>
            </li>
            <li
              class={`nav-item ${activeItem === 4 ? "active" : ""} mt-1`}
              onClick={() => handleItemClick(4)}
            >
              <NavLink to='' class="nav-link text-light" id="navlink"  href="#">
                Blog
              </NavLink>
            </li>
            <li
              class={`nav-item ${activeItem === 5 ? "active" : ""} mt-1`}
              onClick={() => handleItemClick(4)}
            >
              <NavLink to='' class="nav-link " id="liBtn"  href="#">
                Login
              </NavLink>
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