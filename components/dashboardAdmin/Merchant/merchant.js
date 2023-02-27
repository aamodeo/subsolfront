import React,{useEffect,useState} from 'react';
import successIco from "../../../assets/images/successIco.png";
import failedIco from "../../../assets/images/failedIco.png";
import pendingIco from "../../../assets/images/pendingIco.png";
import help from "../../../assets/images/alert-circle.svg";
import showDropdown from "../../../assets/images/showDropdown.svg";
import chevronDown from "../../../assets/images/chevronDown.svg";
import searchIcon from "../../../assets/images/search.svg";
import hamberger from "../../../assets/images/hamberger.svg";

import calendar from "../../../assets/images/calendar.svg";
import exportIco from "../../../assets/images/export.svg";
import x from "../../../assets/images/x.svg";
import calendarIco from "../../../assets/images/calendarIco.svg";
import calendarSm from "../../../assets/images/calendarSm.svg";
import email from "../../../assets/images/email.svg";
import wallet from "../../../assets/images/wallet.svg";
import mailWhite from "../../../assets/images/mailWhite.svg";
import profile from "../../../assets/images/Avatar.png";

// import axios from "axios";



// js

// import Navbar from './navbar';
// import Sidebar from './sidebar';

function Merchant(props) {
  const redColor={
    color:'red'
  }
  const greenColor={
    color:'#28CB89'
  }

  const closeDetail = () =>{
   var detail = document.getElementById("detailBox")
        detail.style.right = "-550px"
  }
  const openDetail = () =>{
   var detail = document.getElementById("detailBox")
        detail.style.right = "0px"
  }

  return(
    <>
      <Navbar />
        {/* Begin Page Content */}
        <div className="container-fluid transactionMain">
                  
                    {/* Content Row */}
                    <div className="row">
                      {/* Earnings (Monthly) Card Example */}
                      <AnalyticsBox title="Total Merchants" amount="456"  />
                      <AnalyticsBox title="Active Merchants"  amount="250" />
                      <AnalyticsBox title="Inactive Merchants" amount="54"  />
                      <AnalyticsBox title="Blocked" amount="20" />
                    </div>
                    
                
                  <div className="row ">
                    <div className="col">
                      <Table openDetail={openDetail} />
                    </div>
                  
                  </div>
                  <div className="merchantDetailMain" id="detailBox">
                    <div className="close" onClick={()=>closeDetail()}><img src={x} alt="" /></div>
                    <div className="d-flex jc-sb mt-3">
                      <h5 className="heading">Merchant Detail</h5>
                      <div className="rightBtnMain">
                        <button className="exportBtn"><img src={mailWhite} alt="export" /> Send Mail</button>
                      </div>
                    </div>
                    
                    <div className="row1">
                      <div className="col1">John Doe</div>
                      <div className="col2">Status <span>ACTIVE</span></div>
                    </div>
                    <div className="emailMain py-2">
                      <div className="mail">
                        <img className='me-2' src={email} alt="email" />
                        johndoe@email.com
                      </div>
                      <div className="mail ms-3">
                        <img className='me-2' src={wallet} alt="email" />
                        0x8989...98976
                      </div>
                    </div>

                    <div className="row2 py-1">
                      <div className="transD">Joined <span className='text-uppercase'>Nov 12,2022 | 10:30:15pm</span></div>
                      <div className="transD">Last Login <span>Nov 12,2022 | 10:30:15pm</span></div>
                    </div>
                    <h5 className="heading mb-0">Product</h5>
                    <div className="row4 pt-1">
                      <div className="transD">Total  <span className='text-uppercase'>10</span></div>
                      <div className="transD">Live <span>8</span></div>
                      <div className="transD">Offline<span>15</span></div>
                    </div>

                    <div className="card h-100 mb-4 br-10 border-transparent overflow-hidden">
                        {/* Card Header - Dropdown */}
                        <div className="card-header bg-white border-transparent py-0 px-0">
                          <h5 className="heading mb-1 mt-0">Activity</h5>

                          <div className='mdFill'>
                            <div className="lin active">All</div>
                            <div className="lin">Merchant Activity</div>
                            <div className="lin">Subscribers’ Activity</div>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="card-body px-0">
                          {/* driver card row */}
                          <DriverStatusRow profileImg={profile} company="johndoe@email.com" driverName="John Doe" time="0x89...98976" />
                          <DriverStatusRow profileImg={profile} company="johndoe@email.com" driverName="John Doe" time="0x89...98976" />
                          <DriverStatusRow profileImg={profile} company="johndoe@email.com" driverName="John Doe" time="0x89...98976" />
                          <DriverStatusRow profileImg={profile} company="johndoe@email.com" driverName="John Doe" time="0x89...98976" />
                          <DriverStatusRow profileImg={profile} company="johndoe@email.com" driverName="John Doe" time="0x89...98976" />
                          <DriverStatusRow profileImg={profile} company="johndoe@email.com" driverName="John Doe" time="0x89...98976" />
                        </div>
                      </div>
                   
                    <div className="rightBtnMain pt-2 mt-auto ms-auto">
                      <button className="exportBtnWhite"> Block</button>
                      <button className="exportBtn">Delete</button>
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
        <div className="d-flex">
          <img className="driver-img " src={props.profileImg} />
            <div className="profile-div ms-2">
              <span className="me-2 fs-14 small profile-name">{props.driverName}</span>
              <span className="status fs-14 font-weight-bold dark-font">{props.company}</span>
            </div>
        </div>
        <div>
          <span className="driver-status-title">{props.time}</span>
        </div>
     </div>
  )
  
}

function AnalyticsBox(props) {
  return(
    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card h-100 py-2 border-transparent br-10">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
        
          <div className="col me-2">
            <div className="text-xs font-weight-bold  mb-1">
              <span className="analytics-box-title d-flex jc-sb">{props.title} <img src={calendarIco} alt="" /></span> 
            </div>
            <div className="h4 mb-0 font-weight-bold text-gray-800">{props.amount}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
  
}


const Table=({openDetail})=>{
  return(
                <div className="card sortby-box br-10 border-transparent "> 
                  
                  <div className="searchRow pt-2">
                  <form className=" form-inline  my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group sMain">
                        <div className="input-group-append">
                        <button className="btn search-btn pe-1" type="button">
                            <img src={searchIcon} className="w-15 mb-1" alt="serach icon" />
                        </button>
                        </div>
                        <input type="text" className="form-control  border-0 small" placeholder="Search by name, subscription id, date etc..." aria-label="Search" aria-describedby="basic-addon2" />
                    </div>
                    </form>
                    <div className="col2">
                        <div class="dropdown dib me-2">
                            <a class="btn dropdown-toggle border-white bg-white color-dark font-weight-bold fs-12" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Show: 10 <img src={showDropdown} alt="" />
                            </a> 
                            <div class="dropdown-menu zi-1" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </div>
                        </div>
                        <div class="dropdown dib me-2">
                            <a class="btn dropdown-toggle border-white bg-white color-dark font-weight-bold fs-12" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter <img src={chevronDown} alt="" />
                            </a> 
                            <div class="dropdown-menu zi-1" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </div>
                        </div>
                        <div class="dropdown dib ">
                            <a class="btn dropdown-toggle border-white bg-white color-dark font-weight-bold fs-12" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={hamberger} alt="" />
                            </a> 
                            <div class="dropdown-menu zi-1" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </div>
                        </div>
                    </div>
                  </div>
                    <div className="card-header br-10 table-responsive  bg-white border-transparent py-3 d-flex flex-row align-items-center justify-content-between">
                        <table class="table table-hover">
                          <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Email Address</th>
                                    <th scope="col">Wallet Address</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">No. of Products</th>
                                    <th scope="col">Last Login</th>
                                  </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td scope="row">
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                  </div>
                              </td>
                              <td>
                                      <div className='darkDiv' onClick={openDetail}>John Doe</div>
                              </td>
                              <td>
                                      <div className='darkDiv' onClick={openDetail}>johndoe@email.com</div>
                              </td>
                              <td>
                                      <div className='darkDiv'>0x89...98976</div>
                              </td>
                              <td>
                                      <button className="statusBtn success">Active</button>
                              </td>
                              <td>
                                  <div className='darkDiv'>15</div>
                              </td>
                              <td>
                                  <div className='darkDiv'>Nov 12,2022 | 10:30pm</div>
                              </td>
                            </tr>
                          <tr>
                              <td scope="row">
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                  </div>
                              </td>
                              <td>
                                      <div className='darkDiv' onClick={openDetail}>John Doe</div>
                              </td>
                              <td>
                                      <div className='darkDiv' onClick={openDetail}>johndoe@email.com</div>
                              </td>
                              <td>
                                      <div className='darkDiv'>0x89...98976</div>
                              </td>
                              <td>
                                      <button className="statusBtn fail">InActive</button>
                              </td>
                              <td>
                                  <div className='darkDiv'>15</div>
                              </td>
                              <td>
                                  <div className='darkDiv'>Nov 12,2022 | 10:30pm</div>
                              </td>
                            </tr>
                         
                          
                          </tbody>
                        </table>
                    </div>
                  </div>
  )
}

function Navbar() {
  return(
      <>
          {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top px-3">
              {/* Sidebar Toggle (Topbar) */}
              <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle me-3">
                <i className="fa fa-bars" />
              </button>
              {/* Topbar Search */}
              <h6 className='pageHeading'>Merchants</h6>
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
                <button className="exportBtnWhite"><img src={calendarSm} alt="export" /> Last 24hours</button>
                <button className="exportBtn"><img src={exportIco} alt="export" /> Export Data</button>
              </div>

         
        </nav>
        {/* End of Topbar */}
      </>
  )
}




export {Merchant};
