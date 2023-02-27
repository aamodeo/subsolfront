import React,{useEffect,useState} from 'react';
import successIco from "../../../assets/images/successIco.png";
import failedIco from "../../../assets/images/failedIco.png";
import pendingIco from "../../../assets/images/pendingIco.png";
import help from "../../../assets/images/alert-circle.svg";
import showDropdown from "../../../assets/images/showDropdown.svg";
import chevronDown from "../../../assets/images/chevronDown.svg";
import searchIcon from "../../../assets/images/search.svg";
import hamberger from "../../../assets/images/hamberger.svg";
import exportIcoBlack from "../../../assets/images/exportIcoBlack.svg";


// import axios from "axios";



// js

// import Navbar from './navbar';
// import Sidebar from './sidebar';

function Products(props) {

  return(
    <>
                {/* Begin Page Content */}
                <div className="container-fluid transactionMain">
                
                  <div className="row ">
                    <div className="col">
                      <div className="card-header border-transparent py-3 tHistoryRow1 pRow">
                          <div className='d-flex ai-center'>
                            <h6 className="mb-0">Products</h6>
                            <div className='tFilM'>
                              <div className="fil">Total (100)</div>
                              <div className="fil">Active (90)</div>
                              <div className="fil">Disabled (10)</div>
                            </div>
                          </div>
                          <div className="rightBtnMain">
                            
                            <button className="exportBtnWhite"><img src={exportIcoBlack} alt="export" /> Export Data</button>
                            <button className="exportBtn">+ Add New Product</button>
                          </div>
                      </div>
                      <Table />
                    </div>
                  </div>
            
                </div>
                {/* /.container-fluid */}
       
    </>
  )
}

const Table=()=>{
  return(
                <div className="card sortby-box br-10 border-transparent "> 
                
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
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Wallet Address</th>
                                    <th scope="col">Total Subscribers</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date Added</th>
                                  </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td scope="row">
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                    1
                                  </div>
                              </td>
                              <td>
                                      <div className='darkDiv'>Spotify with good and</div>
                              </td>
                              <td>
                                      <div className='darkDiv'>0x89...98976</div>
                              </td>
                              <td>
                                      <div className='darkDiv'>100</div>
                              </td>
                              <td>
                                      <button className="statusBtn success">Active</button>
                              </td>
                              <td>
                                  <div className='darkDiv'>Nov 16,2022</div>
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                    1
                                  </div>
                              </td>
                              <td>
                                  <div className='darkDiv'>Spotify with good and</div>
                              </td>
                              <td>
                                  <div className='darkDiv'>0x89...98976</div>
                              </td>
                              <td>
                                  <div className='darkDiv'>100</div>
                              </td>
                              <td>
                                  <button className="statusBtn fail">Inactive</button>
                              </td>
                              <td>
                                  <div className='darkDiv'>Nov 16,2022</div>
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                    1
                                  </div>
                              </td>
                              <td>
                                  <div className='darkDiv'>Spotify with good and</div>
                              </td>
                              <td>
                                  <div className='darkDiv'>0x89...98976</div>
                              </td>
                              <td>
                                  <div className='darkDiv'>100</div>
                              </td>
                              <td>
                                  <button className="statusBtn success">successful</button>
                              </td>
                              <td>
                                  <div className='darkDiv'>Nov 16,2022</div>
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">
                                  <div className='d-flex ai-center darkDiv'>
                                    <input className='me-1' type="checkbox" name="product" id="" />
                                    1
                                  </div>
                              </td>
                              <td>
                                  <div className='darkDiv'>Spotify with good and</div>
                              </td>
                              <td>
                                  <div className='darkDiv'>0x89...98976</div>
                              </td>
                              <td>
                                  <div className='darkDiv'>100</div>
                              </td>
                              <td>
                                  <button className="statusBtn fail">Inactive</button>
                              </td>
                              <td>
                                  <div className='darkDiv'>Nov 16,2022</div>
                              </td>
                            </tr>
                           
                          </tbody>
                        </table>
                    </div>
                  </div>
  )
}




export {Products};
