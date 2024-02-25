import React, { useEffect, useState } from "react";
import LiveAvatar from "./components/LiveAvatar";
import Live from "./components/Live";
import TestVideo from "./components/TestVideo";
import VideoCard from "./components/VideoCard";
import LiveStream from "./components/LiveStream";
import Home from "./components/Home";
import { NavLink } from "react-router-dom";
import logo from './assets/siteLogo.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import { Tally3, X } from 'lucide-react';
import WebsocketStreaming from "./components/WebsocketStreaming";

function App() {
  // const serverBaseURL = 'http://localhost:8000/stream_summary'
  const [openMenu, setOpenMenu] = useState(false)
  function handleNav() {

  }

  return (
    <>
      <Router>
        <div className="sticky top-0 z-20 bg-[#0e0e0e] w-full">
        <nav class="bg-black shadow flex border-b-[0.25px] border-gradient-violet-red ">

            <NavLink to='/home' className='w-full lg:w-auto items-center flex'>
              {/* <img className='w-32 sticky p-2 mx-auto lg:ml-20' src={logo} alt="Logo" /> */}
              <h1 className='w-56 sticky p-2 mx-auto lg:ml-20 text-white font-semibold text-4xl '><span className="bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text text-transparent">Globe news</span></h1>
              {/* <h1 className="md:text-4xl  sm:text-3xl text-2xl font-bold p-3 border-2 border-red-300  rounded-3xl bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">Our Services</h1> */}
            </NavLink>

            <div onClick={(e) => { setOpenMenu(!openMenu) }} className="absolute right-5 top-1/2 transform text-white -translate-y-1/2 md:hidden hover:scale-105 cursor-pointer">
              {openMenu ? <X size={30} /> : <Tally3 className="rotate-90" size={30} />}
            </div>
            <div className={openMenu ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-black text-white ease-in-out duration-500 md:hidden" : 'fixed left-[-100%] top-0 w-[60%] border-r h-full border-r-gray-900 bg-white ease-out duration-500'}>
              <h1 className='w-full m-4 text-3xl font-bold '><span className="text-red-500">Live</span> News.</h1>
              <ul className="p-4 uppercase">
                <li className="mb-4 p-4 border-b border- text-white cursor-pointer hover:bg-gray-200 hover:scale-105 duration-300"><a href="/home">Home</a></li>
                <li className="mb-4 p-4 border-b border-white cursor-pointer hover:bg-gray-200 hover:scale-105 duration-300"><a href="/live">Live</a></li>
                <li className="mb-4 p-4 border-b border-white cursor-pointer hover:bg-gray-200 hover:scale-105 duration-300"><a href="/about">About Us</a></li>
              </ul>
            </div>

            <div class="hidden container md:flex items-center justify-center p-6 mx-auto text-gray-600 capitalize ">
              <a onClick={(e) => { localStorage.setItem('TAB', 'HOME') }} href="/home" class={`text-xl ${localStorage.getItem('TAB') === 'HOME' ? 'text-white transition-colors duration-300 transform  border-b-2 border-blue-500' : 'border-b-2 text-white border-transparent hover:text-white transition-colors duration-300 transform  hover:border-blue-500'} mx-1.5 sm:mx-6`}>Home</a>
              <a onClick={(e) => { localStorage.setItem('TAB', 'LIVE') }} href="/live" class={`text-xl ${localStorage.getItem('TAB') === 'LIVE' ? 'text-white transition-colors duration-300 transform  border-b-2 border-blue-500' : 'border-b-2 text-white border-transparent hover:text-white transition-colors duration-300 transform  hover:border-blue-500'} mx-1.5 sm:mx-6`}>Live</a>
              <a onClick={(e) => { localStorage.setItem('TAB', 'ABOUT') }} href="/about" class={`text-xl ${localStorage.getItem('TAB') === 'ABOUT' ? 'text-white transition-colors duration-300 transform  border-b-2 border-blue-500' : 'border-b-2 text-white border-transparent hover:text-white transition-colors duration-300 transform  hover:border-blue-500'} mx-1.5 sm:mx-6`}>About us</a>
              {/* <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6">features</a> */}
            </div>

          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<TestVideo />} />
          <Route path="/video" element={<VideoCard />} />
          <Route path="/stream" element={<LiveStream />} />
          <Route path="/websocket" element={<WebsocketStreaming />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;


