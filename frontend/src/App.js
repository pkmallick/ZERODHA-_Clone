import React from "react";
import { Routes, Route } from "react-router-dom";


import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";


import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";


import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";


import Dashboard from "./dashboard/Dashboard";


function App() {

  return (

    <>

      <Navbar />


      <Routes>

        {/* Landing Pages */}

        <Route 
          path="/" 
          element={<HomePage />} 
        />


        <Route 
          path="/signup" 
          element={<Signup />} 
        />


        <Route 
          path="/login" 
          element={<Login />} 
        />


        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        {/* Other Pages */}

        <Route
          path="/about"
          element={<AboutPage />}
        />


        <Route
          path="/product"
          element={<ProductsPage />}
        />


        <Route
          path="/pricing"
          element={<PricingPage />}
        />


        <Route
          path="/support"
          element={<SupportPage />}
        />


        {/* 404 Page */}

        <Route
          path="*"
          element={<NotFound />}
        />


      </Routes>


      <Footer />

    </>

  );

}


export default App;