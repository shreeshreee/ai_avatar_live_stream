import React from "react";
import Hero from "../pages/Hero";
import Introduction from "../pages/Introduction";
import OurServices from "../pages/OurServices";
import Footer from "../pages/Footer";
import "./Scrollbar.css";


function LandingPage(){
  return (
    <div id="scrollbar-chat" className="">
      {/* <Navbar /> */}
      <Hero />
      <Introduction />
      <OurServices />
      <Footer />
    </div>
  )
}
export default LandingPage;
