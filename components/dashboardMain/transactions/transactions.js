import React,{useEffect,useState} from 'react';
import "./transactions.css"
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
import sendIco from "../../../assets/images/sendIco.png";

// import axios from "axios";



// js

// import Navbar from './navbar';
// import Sidebar from './sidebar';

function Transactions(props) {
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
                      <AnalyticsBox title="Earnings" percent="+ 20%" amount="27656" lastMonthAmount="Over last month: $15,600" />
                      <AnalyticsBox title="Refunds" percent="- 10%" color={redColor} amount="27656" lastMonthAmount="Over last month: -2" />
                      <AnalyticsBox title="Gross Revenues" percent="+ 9%" amount="27656" lastMonthAmount="Over last month: $3.05" />
                      <AnalyticsBox title="Net Revenues" percent="+ 13%" amount="27656" lastMonthAmount="Over last month: 54" />

                    </div>
                    
                
                  <div className="row ">
                    <div className="col">
                      <Table openDetail={openDetail} />
                    </div>
                  
                  </div>
                  <div className="transactionDetailMain" id="detailBox">
                    <div className="close" onClick={()=>closeDetail()}><img src={x} alt="" /></div>
                    <h5 className="heading">Transaction Detail</h5>
                    <div className="row1">
                      <div className="col1">SUBSCRIPTION ACTIVATION</div>
                      <div className="col2">November 16, 2022 | 10:30:15pm</div>
                    </div>
                    <div className="transactionDMain">
                      
                      <div className="to">
                        to
                      </div>
                      <div>
                        <div className='font-bold'>0x89...98976</div>
                        <div>0x45...2389</div>
                      </div>
                    </div>
                    <div className="row2">
                      <div className="transD">Status <span className='text-uppercase'>SUCCESSFUL</span></div>
                      <div className="transD">Subscription ID <span>#2030</span></div>
                      <div className="transD">Transaction Hash <span>https://</span> <img src={sendIco} alt="" /></div>
                    </div>
                    <div className="row3">
                      <div className="tAmount">
                        <div className="title">
                          TOTAL AMOUNT
                        </div>
                        <div className="amount">0.0067 ETH <span>$95.00</span></div>
                      </div>
                      <div className="tAmount">
                        <div className="title">
                          GROSS AMOUNT
                        </div>
                        <div className="amount">0.0067 ETH <span>$95.00</span></div>
                      </div>
                      <div className="tAmount">
                        <div className="title">
                          NET AMOUNt
                        </div>
                        <div className="amount">0.0067 ETH <span>$95.00</span></div>
                      </div>
                    </div>
                    <div className="name">Product Name</div>
                    <div className="desc">Spotify with good and amazing music product</div>
                    <div className="trTitle">Transaction Status</div>
                    <div className="trCard">
                      <div className="rowT">
                        <div className="col1">
                        <img className='img-fluid me-2' src={successIco} alt="" />
                          Button clicked
                        </div>
                        <div className="time">10:15:08pm</div>
                      </div>
                      <div className="rowT">
                        <div className="col1">
                        <img className='img-fluid me-2' src={pendingIco} alt="" />
                          Payment Pending
                        </div>
                        <div className="time">10:15:08pm</div>
                      </div>
                      <div className="rowT">
                        <div className="col1">
                        <img className='img-fluid me-2' src={pendingIco} alt="" />
                          Button clicked
                        </div>
                        <div className="time">10:15:08pm</div>
                      </div>
                    </div>
                    <div className="rightBtnMain pt-2 mt-auto ms-auto">
                      <button className="exportBtnWhite"> Report Transaction</button>
                      <button className="exportBtn">Add New Product</button>
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


const Table=({openDetail})=>{
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
                                    <th scope="col">#</th>
                                    <th scope="col">Transaction Details</th>
                                    <th scope="col">Subscription ID</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Total Amount</th>
                                  </tr>
                          </thead>
                          <tbody>
                            <tr>
                            <td>
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                  </div>
                              </td>
                              <td scope="row">
                                      <div className="transactionDMain">
                                        <div className="imgDiv" onClick={openDetail}>
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
                                      <div className='darkDiv'>#24030</div>
                              </td>
                              <td>
                                      <div>Spotify with good and</div>
                                      <div>Nov 16, 2022 | 10:30pm</div>
                              </td>
                              <td>
                                      <div>Nov 16, 2022</div>
                                      <div>10:30pm</div>
                              </td>
                              <td>
                                      <button className="statusBtn success">SuccessFul</button>
                              </td>
                              <td>
                                      <p className='mb-0 w-mc'>
                                        <div>0.0067 ETH</div>
                                        <div className='ms-auto'>$95</div>
                                      </p>
                              </td>
                            </tr>
                            <tr>
                            <td>
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                  </div>
                              </td>
                              <td scope="row">
                                      <div className="transactionDMain">
                                        <div className="imgDiv" onClick={openDetail}>
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
                                      <div className='darkDiv'>#24030</div>
                              </td>
                              <td>
                                      <div>Spotify with good and</div>
                                      <div>Nov 16, 2022 | 10:30pm</div>
                              </td>
                              <td>
                                      <div>Nov 16, 2022</div>
                                      <div>10:30pm</div>
                              </td>
                              <td>
                                      <button className="statusBtn success">SuccessFul</button>
                              </td>
                              <td>
                                      <p className='mb-0 w-mc'>
                                        <div>0.0067 ETH</div>
                                        <div className='ms-auto'>$95</div>
                                      </p>
                              </td>
                            </tr>
                            <tr>
                            <td>
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                  </div>
                              </td>
                              <td scope="row">
                                      <div className="transactionDMain">
                                        <div className="imgDiv" onClick={openDetail}>
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
                                      <div className='darkDiv'>#24030</div>
                              </td>
                              <td>
                                      <div>Spotify with good and</div>
                                      <div>Nov 16, 2022 | 10:30pm</div>
                              </td>
                              <td>
                                      <div>Nov 16, 2022</div>
                                      <div>10:30pm</div>
                              </td>
                              <td>
                                      <button className="statusBtn success">SuccessFul</button>
                              </td>
                              <td>
                                      <p className='mb-0 w-mc'>
                                        <div>0.0067 ETH</div>
                                        <div className='ms-auto'>$95</div>
                                      </p>
                              </td>
                            </tr>
                            <tr>
                            <td>
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                  </div>
                              </td>
                              <td scope="row">
                                      <div className="transactionDMain">
                                        <div className="imgDiv" onClick={openDetail}>
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
                                      <div className='darkDiv'>#24030</div>
                              </td>
                              <td>
                                      <div>Spotify with good and</div>
                                      <div>Nov 16, 2022 | 10:30pm</div>
                              </td>
                              <td>
                                      <div>Nov 16, 2022</div>
                                      <div>10:30pm</div>
                              </td>
                              <td>
                                      <button className="statusBtn success">SuccessFul</button>
                              </td>
                              <td>
                                      <p className='mb-0 w-mc'>
                                        <div>0.0067 ETH</div>
                                        <div className='ms-auto'>$95</div>
                                      </p>
                              </td>
                            </tr>
                            <tr>
                            <td>
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                  </div>
                              </td>
                              <td scope="row">
                                      <div className="transactionDMain">
                                        <div className="imgDiv" onClick={openDetail}>
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
                                      <div className='darkDiv'>#24030</div>
                              </td>
                              <td>
                                      <div>Spotify with good and</div>
                                      <div>Nov 16, 2022 | 10:30pm</div>
                              </td>
                              <td>
                                      <div>Nov 16, 2022</div>
                                      <div>10:30pm</div>
                              </td>
                              <td>
                                      <button className="statusBtn success">SuccessFul</button>
                              </td>
                              <td>
                                      <p className='mb-0 w-mc'>
                                        <div>0.0067 ETH</div>
                                        <div className='ms-auto'>$95</div>
                                      </p>
                              </td>
                            </tr>
                            <tr>
                            <td>
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                  </div>
                              </td>
                              <td scope="row">
                                      <div className="transactionDMain">
                                        <div className="imgDiv" onClick={openDetail}>
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
                                      <div className='darkDiv'>#24030</div>
                              </td>
                              <td>
                                      <div>Spotify with good and</div>
                                      <div>Nov 16, 2022 | 10:30pm</div>
                              </td>
                              <td>
                                      <div>Nov 16, 2022</div>
                                      <div>10:30pm</div>
                              </td>
                              <td>
                                      <button className="statusBtn success">SuccessFul</button>
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
              <h6 className='pageHeading'>Transactions</h6>
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




export {Transactions};
