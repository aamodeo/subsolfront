import React,{useEffect,useState} from 'react';
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ReferenceLine,ResponsiveContainer,Area,linearGradient} from 'recharts';

import calendar from "../../../assets/images/calendar.svg";
import calendarIco from "../../../assets/images/calendarIco.svg";
import "./analytics.css"

function Analytics(props) {
  const redColor={
    color:'red'
  }
  const greenColor={
    color:'#28CB89'
  }
  const data = [
    {
      name: 'Jan',
      uv: 40,
      amt: 400,
    },
    {
      name: 'Feb',
      uv: 10,
      amt: 210,
    },
    {
      name: 'Mar',
      uv: 90,
      amt: 1290,
    },
    {
      name: 'Apr',
      uv: 120,
      amt: 1600,
    },
   
    {
      name: 'May',
      uv: 100,
      amt: 2500,
    },
    {
      name: 'Jun',
      uv: 34,
      amt: 2100,
    },
    {
      name: 'Jul',
      uv: 34,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 34,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 44,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 84,
      amt: 2100,
    },
    {
      name: 'Nov',
      uv: 44,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 34,
      amt: 2100,
    },
  ];
  const data2 = [
    {
      merchant: 100,
      product: 200,
      cancel: 300,
      flagged: 400,
      refund: 500,
    },
    {
      merchant: 100,
      product: 200,
      cancel: 300,
      flagged: 400,
      refund: 500,
    },
    {
      merchant: 100,
      product: 200,
      cancel: 300,
      flagged: 400,
      refund: 500,
    },
    {
      merchant: 100,
      product: 200,
      cancel: 300,
      flagged: 400,
      refund: 500,
    },
    {
      merchant: 100,
      product: 200,
      cancel: 300,
      flagged: 400,
      refund: 500,
    },
 
  
   
  ];

  return(
    <>
      <Navbar />
        {/* Begin Page Content */}
        <div className="container-fluid transactionMain">          
            <div className="analyticsPage">
                <div className="row1Main">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="smChartRow">
                                <div className="smCard">
                                    <div className="heading">Total Subscriptions</div>
                                    <div className="num">27656</div>
                                    <div className='smCart'>
                                    <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                                    </div>
                                </div>
                                <div className="smCard">
                                    <div className="heading">Cancelled Subscriptions</div>
                                    <div className="num">27656</div>
                                    <div className='smCart'>
                                    <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                                    </div>
                                </div>
                            </div>
                            <div className="smChartRow">
                                <div className="smCard">
                                    <div className="heading">No. of Active Products</div>
                                    <div className="num">27656</div>
                                    <div className='smCart'>
                                    <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                                    </div>
                                </div>
                                <div className="smCard">
                                    <div className="heading">No. of Disabled Products</div>
                                    <div className="num">27656</div>
                                    <div className='smCart'>
                                    <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                                    </div>
                                </div>
                            </div>
                            <div className="smChartRow">
                                <div className="smCard w-100 d-flex jc-sb ai-center">
                                    <div>
                                      <div className="heading">Total Products Created</div>
                                      <div className="num">27656</div>
                                    </div>
                                    <div className='smCart w135'>
                                      <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                                    </div>
                                </div>
                            </div>
                            <div className="smChartRow">
                                <div className="smCard w-100 d-flex jc-sb ai-center">
                                    <div>
                                      <div className="heading">Total User Accounts</div>
                                      <div className="num">27656</div>
                                    </div>
                                    <div className='smCart w135'>
                                      <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="subsChart">
                                <div className="heading">Subscriptions Activated</div>
                                <div className="chart">
                                <RevenueChart lineColor={"#0000B0"} data={data} showNum={true} />
                                </div>
                            </div>
                            <div className="subsChart">
                                <div className="row1">
                                  <p>Filter</p>
                                  <p>Last 24hours</p>
                                </div>
                                <div className="heading">Merchants</div>
                                <div className="chart">
                                  <MultiLineChart lineColor={"#0000B0"} data={data2} showNum={true} />
                                </div>
                                <div className="row2">
                                  <div className="col1"><span className='me-1'></span>Merchants</div>
                                  <div className="col2"><span className='me-1'></span>Product created</div>
                                  <div className="col3"><span className='me-1'></span>Cancelled Subscriptions</div>
                                  <div className="col4"><span className='me-1'></span>Flagged Subscription</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                      <div className="col-lg-3 col-sm-6 mb-2">
                        <div className="smCard br-16 w-100">
                          <div className="heading">Lifetime Revenue</div>
                          <div className="num">$27656</div>
                          <div className='smCart'>
                            <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mb-2">
                        <div className="smCard br-16 w-100">
                          <div className="heading">Lifetime Net Revenue</div>
                          <div className="num">$27656</div>
                          <div className='smCart'>
                            <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mb-2">
                        <div className="smCard br-16 w-100">
                          <div className="heading">Lifetime Gross Revenue</div>
                          <div className="num">$27656</div>
                          <div className='smCart'>
                            <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mb-2">
                        <div className="smCard br-16 w-100">
                          <div className="heading">Lifetime Refunds</div>
                          <div className="num">27656</div>
                          <div className='smCart'>
                            <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                          </div>
                        </div>
                      </div>
                </div>
                <div className="row1Main mt-3">
                  <div className="row mx-0">
                    <div className="col-lg-4">
                      <div className="smCard py-3 w-100 d-flex jc-sb ai-center">
                          <div>
                            <div className="heading">Total User Accounts</div>
                            <div className="num">27656</div>
                          </div>
                          <div className='smCart w135'>
                            <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                          </div>
                      </div>
                      <div className="smCard py-3 w-100 d-flex jc-sb ai-center">
                          <div>
                            <div className="heading">Total User Accounts</div>
                            <div className="num">27656</div>
                          </div>
                          <div className='smCart w135'>
                            <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                          </div>
                      </div>
                      <div className="smCard py-3 w-100 d-flex jc-sb ai-center">
                          <div>
                            <div className="heading">Total User Accounts</div>
                            <div className="num">27656</div>
                          </div>
                          <div className='smCart w135'>
                            <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                          </div>
                      </div>
                      <div className="smCard py-3 w-100 d-flex jc-sb ai-center">
                          <div>
                            <div className="heading">Total User Accounts</div>
                            <div className="num">27656</div>
                          </div>
                          <div className='smCart w135'>
                            <RevenueChart lineColor={"#0000B0"} data={data} showNum={false} />
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="subsChart">
                          <div className="row1">
                            <p>Filter</p>
                            <p>Last 24hours</p>
                          </div>
                          <div className="heading">Merchants</div>
                          <div className="chart2">
                            <MultiLineChart2 lineColor={"#0000B0"} data={data2} showNum={true} />
                          </div>
                          <div className="row2">
                            <div className="col1"><span className='me-1'></span>Merchants</div>
                            <div className="col2"><span className='me-1'></span>Product created</div>
                            <div className="col3"><span className='me-1'></span>Cancelled Subscriptions</div>
                            <div className="col4"><span className='me-1'></span>Flagged Subscription</div>
                            <div className="col5"><span className='me-1'></span>Refunds</div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        {/* /.container-fluid */}
       
    </>
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
              <h6 className='pageHeading'>Analytics</h6>
             
              {/* Topbar Navbar */}
              <div className="rightBtnMain ms-auto">
                <div className="calender">
                    <img src={calendar} alt="calendar" /> 12 Nov,2022 - 18 Nov, 2022
                </div>
              </div>

         
        </nav>
        {/* End of Topbar */}
      </>
  )
}

function RevenueChart({lineColor,data,showNum,height}) {
   
    return(
      <ResponsiveContainer width="100%" height={"100%"}>
      <LineChart layout="horizontal"  data={data} >
        {/* <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#129a74" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#000" stopOpacity={0.1}/>
            </linearGradient>
        </defs> */}

        {/* <CartesianGrid  /> */}
        <XAxis dataKey={showNum ? "amt":"null"}  tickLine={false} axisLine={false} padding={{ left: 30, right: 30 }} />
        <YAxis tick={false} hide />
        <Tooltip />
        <CartesianGrid horizontal={false} vertical={false} />
        {/* <Line type="monotone" dataKey="pv" stroke="#FF007A" stroke-width="2" activeDot={{ r: 8 }} /> */}
        <Line type="monotone"  dataKey="amt" fill="url(#colorUv)" stroke={lineColor} stroke-width="3" dot={false} activeDot={false} />
      </LineChart>
    </ResponsiveContainer>

    )
    
  }
  

function MultiLineChart({lineColor,data,showNum,height}) {
   
    return(
      <ResponsiveContainer width="100%" height={"100%"}>
      <LineChart layout="horizontal"  data={data} >
        {/* <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#129a74" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#000" stopOpacity={0.1}/>
            </linearGradient>
        </defs> */}

        {/* <CartesianGrid  /> */}
        <XAxis dataKey={showNum ? "merchant":"null"}  tickLine={false} axisLine={false} padding={{ left: 30, right: 30 }} />
        <YAxis tick={false} hide />
        <Tooltip />
        <CartesianGrid horizontal={false} vertical={false} />
        <Line type="monotone" dataKey="merchant" stroke="#FF007A" stroke-width="2" dot={false} activeDot={false} />
        <Line type="monotone"  dataKey="product" fill="#000" stroke={"#044BA5"} stroke-width="3" dot={false} activeDot={false} />
        <Line type="monotone"  dataKey="cancel" fill="url(#colorUv)" stroke={"#C2514B"} stroke-width="3" dot={false} activeDot={false} />
        <Line type="monotone"  dataKey="flagged" fill="url(#colorUv)" stroke={"#FFC95B"} stroke-width="3" dot={false} activeDot={false} />
      </LineChart>
    </ResponsiveContainer>

    )
    
  }
function MultiLineChart2({lineColor,data,showNum,height}) {
   
    return(
      <ResponsiveContainer width="100%" height={"100%"}>
      <LineChart layout="horizontal"  data={data} >
        {/* <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#129a74" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#000" stopOpacity={0.1}/>
            </linearGradient>
        </defs> */}

        {/* <CartesianGrid  /> */}
        <XAxis dataKey={showNum ? "merchant":"null"}  tickLine={false} axisLine={false} padding={{ left: 30, right: 30 }} />
        <YAxis tick={false} hide />
        <Tooltip />
        <CartesianGrid horizontal={false} vertical={false} />
        <Line type="monotone" dataKey="merchant" stroke="#FF007A" stroke-width="2" dot={false} activeDot={false} />
        <Line type="monotone"  dataKey="product" fill="#000" stroke={"#044BA5"} stroke-width="3" dot={false} activeDot={false} />
        <Line type="monotone"  dataKey="cancel" fill="url(#colorUv)" stroke={"#C2514B"} stroke-width="3" dot={false} activeDot={false} />
        <Line type="monotone"  dataKey="flagged" fill="url(#colorUv)" stroke={"#FFC95B"} stroke-width="3" dot={false} activeDot={false} />
        <Line type="monotone"  dataKey="refund" fill="url(#colorUv)" stroke={"#04A55E"} stroke-width="3" dot={false} activeDot={false} />
      </LineChart>
    </ResponsiveContainer>

    )
    
  }
  

export {Analytics};
