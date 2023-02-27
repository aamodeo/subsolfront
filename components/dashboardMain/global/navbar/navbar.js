import React from "react";
 
import searchIcon from "../../../../assets/images/search.svg";
import calendar from "../../../../assets/images/calendar.svg";
import exportIco from "../../../../assets/images/export.svg";


function Navbar() {
    return(
        <>
             {/* Topbar */}
             <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top pe-3">
                {/* Sidebar Toggle (Topbar) */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle me-3">
                  <i className="fa fa-bars" />
                </button>
                {/* Topbar Search */}
                <form className="d-none d-sm-inline-block form-inline me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group sMain">
                    <div className="input-group-append">
                      <button className="btn search-btn pe-4" type="button">
                        <img src={searchIcon} className="w-15 mb-1" alt="serach icon" />
                      </button>
                    </div>
                    <input type="text" className="form-control  border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                  </div>
                </form>
                {/* Topbar Navbar */}
                <div className="rightBtnMain">
                  <div className="calender">
                    <img src={calendar} alt="calendar" /> 12 Nov,2022 - 18 Nov, 2022
                  </div>
                  <button className="exportBtn"><img src={exportIco} alt="export" /> Export Data</button>
                </div>
              </nav>
              {/* End of Topbar */}
        </>
    )
    
}
export default Navbar