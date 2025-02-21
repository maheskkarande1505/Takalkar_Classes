import React from "react";
import { NavLink } from "react-router-dom";

function Navbar (){
  return (

<>
<div className="container-fluid nav_1">
    <div className="container p-2">
        <NavLink className={"nav_email_phone"}>
        <i class="fa-solid fa-envelope"></i> learn@takalkarclasses.com
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink className={'nav_email_phone'}>
        <i class="fa-solid fa-phone"></i> +91 98810 98308
        </NavLink>
        <NavLink className={"nav_1_icon"}><i class="fa-brands fa-facebook"></i></NavLink>
        <NavLink className={"nav_1_icon"}><i class="fa-brands fa-instagram"></i></NavLink>
        <NavLink className={"nav_1_icon"}><i class="fa-brands fa-twitter"></i></NavLink>
        <NavLink className={"nav_1_icon"}><i class="fa-brands fa-youtube"></i></NavLink>
    </div>
</div>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
  
     
        <div className="nav-item">
          <NavLink to={'/home'}><img src="logo.png" alt="" height={'45px'}/></NavLink>
        </div>
        <div className="nav-item">
        <NavLink to={'/location'}><img src="logo 2.png" alt="" height={'35px'}/></NavLink>
        </div>

    <div className="nav_btn_group">
            <div className="nav-item nav_btn">
              <NavLink className={'nav_btn_decoreaton'} to={'/home'}>Home</NavLink>  
            </div>
            <div className="nav-item nav_btn">
              <NavLink className={'nav_btn_decoreaton'} to={'/about'}>About</NavLink>
            </div>
            <div className="nav-item nav_btn">
              <NavLink className={'nav_btn_decoreaton'} to={'/courses'}>Courses</NavLink>
            </div>
            <div className="nav-item nav_btn">
              <NavLink className={'nav_btn_decoreaton'} to={'/admission'}>Admission</NavLink>
            </div>
            <div className="nav-item nav_btn">
              <NavLink className={'nav_btn_decoreaton'} to={'/gallery'}>Gallery</NavLink>
            </div>
            <div className="nav-item nav_btn">
              <NavLink className={'nav_btn_decoreaton'} to={'/contact'}>Contact</NavLink>
            </div>
    </div>
  
      <button className="btn btn-sm btn-danger sidemenue" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
          ☰ 
      </button> 

      <div className="nav-item enq_button">
          <NavLink to={'/contact'}><button className="btn btn-sm btn-danger">Enquire Now</button></NavLink>
      </div>
  
     
  </div>
</nav>

<div className="offcanvas offcanvas-start bg-light text-white sidemenue_open w-50" id="sidebar">
    <div className="offcanvas-header bg-dark">
        <h5 className="offcanvas-title text-light">Menu</h5>
    </div>
  <button type="button" className="btn text-start" data-bs-dismiss="offcanvas">

    <div className="offcanvas-body">
      <div className="nav_btn_group2">
        <div className="nav-item nav_btn">
          <NavLink className={'nav_btn_decoreaton'} to={'/home'}>Home</NavLink>  
        </div>
        <div className="nav-item nav_btn">
          <NavLink className={'nav_btn_decoreaton'} to={'/about'}>About</NavLink>
        </div>
        <div className="nav-item nav_btn">
          <NavLink className={'nav_btn_decoreaton'} to={'/courses'}>Courses</NavLink>
        </div>
        <div className="nav-item nav_btn">
          <NavLink className={'nav_btn_decoreaton'} to={'/admission'}>Admission</NavLink>
        </div>
        <div className="nav-item nav_btn">
          <NavLink className={'nav_btn_decoreaton'} to={'/gallery'}>Gallery</NavLink>
        </div>
        <div className="nav-item nav_btn">
          <NavLink className={'nav_btn_decoreaton'} to={'/contact'}>Contact</NavLink>
        </div>
      </div>
    </div>
    </button>
</div>



    </>
  );
};

export default Navbar;