import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";

import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ReferenceLine,ResponsiveContainer,} from 'recharts';
import profile from "../../../assets/images/Avatar.png";
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

// import axios from "axios";



// js

// import Navbar from './navbar';
// import Sidebar from './sidebar';

function Subscription(props) {
  const redColor={
    color:'red'
  }
  const greenColor={
    color:'#28CB89'
  }

  return(
    <>
                <Navbar />
                {/* Begin Page Content */}
                <div className="container-fluid dashboardMain transactionMain">
                  
                    {/* Content Row */}
                    <div className="row">
                      {/* Earnings (Monthly) Card Example */}
                      <AnalyticsBox title="Earnings" percent="+ 20%" amount="27656" lastMonthAmount="Over last month: $15,600" />
                      <AnalyticsBox title="Refunds" percent="- 10%" color={redColor} amount="27656" lastMonthAmount="Over last month: -2" />
                      <AnalyticsBox title="Gross Revenues" percent="+ 9%" amount="27656" lastMonthAmount="Over last month: $3.05" />
                      <AnalyticsBox title="Net Revenues" percent="+ 13%" amount="27656" lastMonthAmount="Over last month: 54" />

                    </div>
                    
                    {/* Content Row */}
                    <div className="row">
                    {/* Area Chart */}
                    <div className="col mb-4">
                      <div className="card br-10 h-100 border-transparent overflow-hidden">
                        {/* Card Header - Dropdown */}
                        <div className="card-header dashChartRow bg-white border-transparent py-3 row1 flex-row ">
                          <div>
                            <h6 className="m-0 chart-heading">Total sales</h6>
                            <div className="transparentCard fs-12 mt-1">(‘000) Abbrevated in millions</div>
                          </div>
                          <div className='col2'>
                            <div className="subsRow">
                              <div className="subscription me-3"><span></span> Subscription</div>
                              <div className="cancellation"><span></span> Cancellation</div>
                            </div>
                            <div className="transparentCard fs-14 mt-1">(‘000) Abbrevated in millions</div>
                          </div>
                        </div>
                        {/* Card Body */}
                        <div className="card-body">
                          <div className="chart-area">
                              <RevenueChart />                    

                          </div>
                        </div>
                      </div>
                    </div>
                
                  </div>
                  <div className="row ">
                    <div className="col">
                      <Table />
                    </div>
                   
                  </div>
            
                </div>
                {/* /.container-fluid */}
       
    </>
  )
}

function AnalyticsBox(props) {
  return(
    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card h-100 py-2 border-transparent br-10">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
        
          <div className="col-auto me-2">
            <div className="text-xs font-weight-bold  mb-1">
              <span className="analytics-box-title">{props.title} <img src={help} alt="" /></span> 
            </div>
            <div className="h4 mb-0 font-weight-bold text-gray-800">${props.amount}<span className="analytic-percentage ms-1" style={props.color}>{props.percent}</span></div>
            <div>
              <span className="last-month">{props.lastMonthAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
  
}

function DriverStatusRow(props) {
  return(
      <div className="d-flex py-2 driver-dash-div flex-row align-items-center justify-content-between">
        <div className="d-flex">
          <img className="driver-img " src={props.profileImg} />
            <div className="profile-div ms-2">
              <span className="me-2 fs-14 small profile-name">{props.driverName}</span>
              <span className="status fs-10 font-weight-bold dark-font">{props.company}</span>
            </div>
        </div>
        <div>
          <span className="driver-status-title">{props.time}</span>
        </div>
     </div>
  )
  
}

const Table=()=>{
    return(
                  <div className="card sortby-box br-10 border-transparent "> 
                    <div className="card-header bg-white border-transparent pt-3 tHistoryRow1">
                            <h6 className="mb-0">Transaction History</h6>
                            <div className='tFilM'>
                              <div className="fil">All  (100)</div>
                              <div className="fil">Successful (90)</div>
                              <div className="fil">Pending (10)</div>
                              <div className="fil">Refunded (10)</div>
                              <div className="fil">Failed (10)</div>
                              <div className="fil">Cancelled(10)</div>
                            </div>
                    </div>
                    <div className="searchRow">
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
                                      <th scope="col">Transaction Details</th>
                                      <th scope="col">Product Name</th>
                                      <th scope="col">Status</th>
                                      <th scope="col">Date Created</th>
                                      <th scope="col">Total Amount</th>
                                    </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td scope="row">
                                        <div className="transactionDMain">
                                          <div className="imgDiv">
                                            <img className='img-fluid' src={successIco} alt="" />
                                          </div>
                                          <div className="to">
                                            to
                                          </div>
                                          <div>
                                            <div>0x89...98976</div>
                                            <div>0x45...2389</div>
                                          </div>
                                        </div>
                                </td>
                                <td>
                                        <div>Spotify with good and</div>
                                        <div>Nov 16, 2022 | 10:30pm</div>
                                </td>
                                <td>
                                        <button className="statusBtn success">SuccessFul</button>
                                </td>
                                <td>
                                        <p className='mb-0 w-mc'>
                                          <div>Nov 16,2022</div>
                                          <div className='ms-auto'>10:30pm</div>
                                        </p>
                                </td>
                                <td>
                                        <p className='mb-0 w-mc'>
                                          <div>0.0067 ETH</div>
                                          <div className='ms-auto'>$95</div>
                                        </p>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">
                                  <div className="transactionDMain">
                                    <div className="imgDiv">
                                      <img className='img-fluid' src={failedIco} alt="" />
                                    </div>
                                    <div className="to">
                                      to
                                    </div>
                                    <div>
                                      <div>0x89...98976</div>
                                      <div>0x45...2389</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div>Spotify with good and</div>
                                  <div>Nov 16, 2022 | 10:30pm</div>
                                </td>
                                <td>
                                  <button className="statusBtn fail">FAILED</button>
                                </td>
                                <td>
                                        <p className='mb-0 w-mc'>
                                          <div>Nov 16,2022</div>
                                          <div className='ms-auto'>10:30pm</div>
                                        </p>
                                </td>
                                <td>
                                  <p className='mb-0 w-mc'>
                                    <div>0.0067 ETH</div>
                                    <div className='ms-auto'>$95</div>
                                  </p>
                                </td>
                                   
                              </tr>
                              <tr>
                                      <td scope="row">
                                        <div className="transactionDMain">
                                          <div className="imgDiv">
                                            <img className='img-fluid' src={pendingIco} alt="" />
                                          </div>
                                          <div className="to">
                                            to
                                          </div>
                                          <div>
                                            <div>0x89...98976</div>
                                            <div>0x45...2389</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div>Spotify with good and</div>
                                        <div>Nov 16, 2022 | 10:30pm</div>
                                      </td>
                                      <td>
                                        <button className="statusBtn pending">Pending</button>
                                      </td>
                                      <td>
                                        <p className='mb-0 w-mc'>
                                          <div>Nov 16,2022</div>
                                          <div className='ms-auto'>10:30pm</div>
                                        </p>
                                        </td>
                                      <td>
                                        <p className='mb-0 w-mc'>
                                          <div>0.0067 ETH</div>
                                          <div className='ms-auto'>$95</div>
                                        </p>
                                      </td>
                                   
                              </tr>
                              <tr>
                                <td scope="row">
                                  <div className="transactionDMain">
                                    <div className="imgDiv">
                                      <img className='img-fluid' src={failedIco} alt="" />
                                    </div>
                                    <div className="to">
                                      to
                                    </div>
                                    <div>
                                      <div>0x89...98976</div>
                                      <div>0x45...2389</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div>Spotify with good and</div>
                                  <div>Nov 16, 2022 | 10:30pm</div>
                                </td>
                                <td>
                                  <button className="statusBtn fail">FAILED</button>
                                </td>
                                <td>
                                        <p className='mb-0 w-mc'>
                                          <div>Nov 16,2022</div>
                                          <div className='ms-auto'>10:30pm</div>
                                        </p>
                                </td>
                                <td>
                                  <p className='mb-0 w-mc'>
                                    <div>0.0067 ETH</div>
                                    <div className='ms-auto'>$95</div>
                                  </p>
                                </td>
                                   
                              </tr>
                              <tr>
                                      <td scope="row">
                                        <div className="transactionDMain">
                                          <div className="imgDiv">
                                            <img className='img-fluid' src={pendingIco} alt="" />
                                          </div>
                                          <div className="to">
                                            to
                                          </div>
                                          <div>
                                            <div>0x89...98976</div>
                                            <div>0x45...2389</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div>Spotify with good and</div>
                                        <div>Nov 16, 2022 | 10:30pm</div>
                                      </td>
                                      <td>
                                        <button className="statusBtn pending">Pending</button>
                                      </td>
                                      <td>
                                        <p className='mb-0 w-mc'>
                                          <div>Nov 16,2022</div>
                                          <div className='ms-auto'>10:30pm</div>
                                        </p>
                                      </td>
                                      <td>
                                        <p className='mb-0 w-mc'>
                                          <div>0.0067 ETH</div>
                                          <div className='ms-auto'>$95</div>
                                        </p>
                                      </td>
                                   
                              </tr>
                                   
                                 
                                
                                  
                                  
                                
                                  
                            </tbody>
                          </table>
                      </div>
                    </div>
    )
  }

function RevenueChart() {
  const data = [
    {
      name: 'Jan',
      uv: 40,
      pv: 24,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 10,
      pv: 13,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 90,
      pv: 98,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 120,
      pv: 110,
      amt: 2000,
    },
   
    {
      name: 'May',
      uv: 100,
      pv: 90,
      amt: 2500,
    },
    {
      name: 'Jun',
      uv: 34,
      pv: 43,
      amt: 2100,
    },
    {
      name: 'Jul',
      uv: 34,
      pv: 43,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 34,
      pv: 43,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 44,
      pv: 53,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 84,
      pv: 93,
      amt: 2100,
    },
    {
      name: 'Nov',
      uv: 44,
      pv: 43,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 34,
      pv: 53,
      amt: 2100,
    },
  ];
  return(
    // <ResponsiveContainer width="100%" height="100%">
    <LineChart width={600} height={300} data={data} className="w-100 h-100">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="pv" stroke="#FF007A" stroke-width="2" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#00E8B0" stroke-width="2" />
    </LineChart>
  // </ResponsiveContainer>

  
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
                <h6 className='pageHeading'>Subscriptions</h6>
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


export {Subscription};
