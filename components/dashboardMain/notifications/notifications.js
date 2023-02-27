import React,{useEffect,useState} from 'react';

import profile from "../../../assets/images/Avatar.png";

import trash from "../../../assets/images/trash.svg";


// import axios from "axios";



// js

// import Navbar from './navbar';
// import Sidebar from './sidebar';

function Notifications(props) {
  const redColor={
    color:'red'
  }
  const greenColor={
    color:'#28CB89'
  }

  return(
    <>
          {/* Topbar */}
          <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top px-3">              

                <h6 className='pageHeading me-auto'>Overview</h6>
                <div className="rightBtnMain">
                  <button className="DNoteBtn"><img src={trash} alt="export" /> Clear All</button>
                </div>
          </nav>
          {/* End of Topbar */}

      {/* Begin Page Content */}
      <div className="container-fluid dashboardMain">
                    
                    {/* Content Row */}
                  <div className="row ">
                    
                    <div className="col">
                      <div className="card h-100 mb-4 br-10 border-transparent overflow-hidden">

                        {/* Card Body */}
                        <div className="card-body ">
                          {/* driver card row */}
                          <DriverStatusRow profileImg={profile} driverName="0x89...98976 recently subscribed subscription" time="10:30PM" />
                          <DriverStatusRow profileImg={profile} driverName="0x89...98976 recently subscribed subscription" time="10:30PM" />
                          <DriverStatusRow profileImg={profile} driverName="0x89...98976 recently subscribed subscription" time="10:30PM" />
                          <DriverStatusRow profileImg={profile} driverName="0x89...98976 recently subscribed subscription" time="10:30PM" />
                          <DriverStatusRow profileImg={profile} driverName="0x89...98976 recently subscribed subscription" time="10:30PM" />
                          <DriverStatusRow profileImg={profile} driverName="0x89...98976 recently subscribed subscription" time="10:30PM" />
                        </div>
                      </div>
                    </div>
                  </div>
            
      </div>
      {/* /.container-fluid */}
       
    </>
  )
}


function DriverStatusRow(props) {
  return(
      <div className="d-flex py-2 driver-dash-div flex-row align-items-center justify-content-between">
        <div className="d-flex ai-center">
          <img className="driver-img " src={props.profileImg} />
            <div className="profile-div ms-2">
              <span className="me-2 fs-14 small profile-name">{props.driverName}</span>
            </div>
        </div>
        <div>
          <span className="driver-status-title">{props.time}</span>
        </div>
     </div>
  )
  
}



export {Notifications};
