import React from "react";
import { Routes, Route } from "react-router-dom";


import TopBar from "./TopBar";
import WatchList from "./WatchList";

import Summary from "./Summary";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Orders from "./Orders";
import Funds from "./Funds";
import Apps from "./Apps";
import { GeneralContextProvider } from "./GeneralContext";
function Dashboard() {


  return (

    <GeneralContextProvider>


      <div className="dashboard-container">


        <TopBar />


        <div className="dashboard-main">


          {/* Left side */}

          <div className="watchlist-container">

            <WatchList />

          </div>

          {/* Right side */}

          <div className="content">


            <Routes>

              <Route
                index
                element={<Summary />}
              />


              <Route
                path="holdings"
                element={<Holdings />}
              />


              <Route
                path="positions"
                element={<Positions />}
              />


              <Route
                path="orders"
                element={<Orders />}
              />


              <Route
                path="funds"
                element={<Funds />}
              />


            </Routes>


          </div>


        </div>


      </div>


    </GeneralContextProvider>

  );

}


export default Dashboard;

// import React from "react";
// import { Routes, Route } from "react-router-dom";


// import TopBar from "./TopBar";
// import WatchList from "./WatchList";

// import Summary from "./Summary";
// import Holdings from "./Holdings"

// import Positions from "./Positions";
// import Orders from "./Orders";
// import Funds from "./Funds";
// import Apps from "./Apps";


// import { GeneralContextProvider } from "./GeneralContext";



// function Dashboard(){


// return(

// <GeneralContextProvider>
// <div className="dashboard-container">
// <TopBar />
// <div className="dashboard-main">
// <div className="watchlist-container">
// <WatchList />
// </div>

// <div className="content">
// <Routes>
// <Route index element={<Summary />}/>
// <Route path="holdings"element={<Holdings />}/>
// <Route path="positions" element={<Positions />}/>
// <Route path="orders"element={<Orders />}/>
// <Route path="funds"element={<Funds />}/>
// <Route path="apps"element={<Apps />}/>
// </Routes>
// </div>
// </div>
// </div>
// </GeneralContextProvider>
// );
// }

// export default Dashboard;