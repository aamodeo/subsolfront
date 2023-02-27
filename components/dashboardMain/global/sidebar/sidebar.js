import React,{useEffect} from "react";
import { BrowserRouter, BrowserRouter as Router,Route,Switch } from "react-router-dom";
import ReactDOM from 'react-dom';


import { NavLink,Link } from "react-router-dom";
import $ from 'jquery';

import home from "../../../../assets/images/overview.svg";
import profile from "../../../../assets/images/Avatar.png";

import logo from "../../../../assets/images/logoCircle.png";
import subscribe from "../../../../assets/images/subscribe.svg";
import transactions from "../../../../assets/images/transactions.svg";
import product from "../../../../assets/images/product.svg";
import customer from "../../../../assets/images/profile.svg";
import notification from "../../../../assets/images/notification.svg";
import analyst from "../../../../assets/images/analyst.svg";


function Sidebar() {

  useEffect(()=>{
    sidebarFunctionality()
  })

    const sidebarFunctionality=()=>{
      /* eslint-disable */
        "use strict";
        $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
            $("body").toggleClass("sidebar-toggled"), $(".sidebar").toggleClass("toggled"), $(".sidebar").hasClass("toggled") && $(".sidebar .collapse").collapse("hide");
        }),
        $(window).resize(function () {
          $(window).width() < 768 && $(".sidebar .collapse").collapse("hide"),
          $(window).width() < 480 && !$(".sidebar").hasClass("toggled") && ($("body").addClass("sidebar-toggled"), $(".sidebar").addClass("toggled"), $(".sidebar .collapse").collapse("hide"));
            }),
            $("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (e) {
                var o;
                768 < $(window).width() && ((o = (o = e.originalEvent).wheelDelta || -o.detail), (this.scrollTop += 30 * (o < 0 ? 1 : -1)), e.preventDefault());
            }),
            $(document).on("scroll", function () {
                100 < $(this).scrollTop() ? $(".scroll-to-top").fadeIn() : $(".scroll-to-top").fadeOut();
            });
           
    }
      

    return(
        <>

             {/* Sidebar */}
          <ul className="navbar-nav  sidebar sidebar-dark accordion zi-1 " id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center mt-2" to="/">
              
              <div className="sidebar-brand-text ">
                <img src={logo} className="me-2" alt="apollo" />
                Subscription Pay
              </div>
            </Link>
            <button className="addProdBtn">+ Add new product</button>
            <div className="mnu">Menu</div>
            {/* sidebar links */}
            <li className="nav-item my-1 mt-2">
              <NavLink className="nav-link sidebar-Link fw-500" to="/dashboard">
              <img className="" src={home} alt="" />
                <span className="">Overview</span>
              </NavLink>
            </li>
            <li className="nav-item my-1 mt-2">
              <NavLink className="nav-link sidebar-Link fw-500" to="/admin/overview">
              <img className="" src={home} alt="" />
                <span className="">Overview admin</span>
              </NavLink>
            </li>
            <li className="nav-item my-1 mt-2">
              <NavLink className="nav-link sidebar-Link fw-500" to="/subscriptions">
                <img className="" src={subscribe} alt="" />
                <span className="">Subscriptions</span>
              </NavLink>
            </li>
            <li className="nav-item my-1 mt-2">
              <NavLink className="nav-link sidebar-Link fw-500" to="/transactions">
                <img className="" src={transactions} alt="" />
                <span className="">Transactions</span>
              </NavLink>
            </li>
            <li className="nav-item my-1 mt-2">
              <NavLink className="nav-link sidebar-Link fw-500" to="/customers">
                <img className="" src={customer} alt="" />
                <span className="">Customers</span>
              </NavLink>
            </li>
            <li className="nav-item my-1 mt-2">
              <NavLink className="nav-link sidebar-Link fw-500" to="/admin/merchant">
                <img className="" src={customer} alt="" />
                <span className="">Merchants</span>
              </NavLink>
            </li>
            <li className="nav-item my-1 mt-2">
              <NavLink className="nav-link sidebar-Link fw-500" to="/products">
                <img className="" src={product} alt="" />
                <span className="">Products</span>
              </NavLink>
            </li>
            <li className="nav-item my-1 mt-2">
              <NavLink className="nav-link sidebar-Link fw-500" to="/admin/analytics">
                <img className="" src={analyst} alt="" />
                <span className="">Analytics</span>
              </NavLink>
            </li>
        
         
            {/* <li className="nav-item my-1">
              <a className="nav-link sidebar-Link fw-500" href="#">
              <img className="" src={setting} alt="" />
                <span className="">Settings</span></a>
            </li> */}
           
          
            {/* Nav Item - Pages Collapse Menu */}
            {/* <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog" />
                <span>Components</span>
              </a>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Components:</h6>
                  <a className="collapse-item" href="buttons.html">Buttons</a>
                  <a className="collapse-item" href="cards.html">Cards</a>
                </div>
              </div>
            </li> */}
           
           <li className="nav-item my-1 mt-auto">
              <NavLink className="nav-link sidebar-Link fw-500" to="/products">
                <img className="" src={notification} alt="" />
                <span className="">Notifications</span>
              </NavLink>
            </li>
           <li className="logout-li nav-item ">
            <div className="dropdown no-arrow">

              <a className="nav-link profileLink dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="img-profile rounded-circle" src={profile} />

                <div className="profile-div ms-2">
                  <div className="me-2 small profile-name">User Name</div>
                  {/* <span className="status">Active</span> */}
                </div>
                <div>
                  {/* <img src={dropdownIcon} className="w-9 ml-1 mb-2" alt="dropdown icon" /> */}
                </div>

              </a>
              {/* Dropdown - User Information */}
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />
                  Activity Log
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />
                  Logout
                </a>
              </div>
            </div>
           </li>
          </ul>
          {/* End of Sidebar */}

        </>
    )
    
}
export default Sidebar