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

function App() {
  // const serverBaseURL = 'http://localhost:8000/stream_summary'
  const [openMenu, setOpenMenu] = useState(false)
  function handleNav() {

  }

  return (
    <>
      <Router>
        <div className="sticky top-0 z-20 bg-[#0e0e0e] w-full">
          <nav class="bg-white shadow flex">

            <NavLink to='/home' className='w-full lg:w-auto'>
              <img className='w-32 sticky p-2 mx-auto lg:ml-20' src={logo} alt="Logo" />
              {/* <h1 className='ml-2'>Global news</h1> */}
            </NavLink>

            <div onClick={(e) => { setOpenMenu(!openMenu) }} className="absolute right-5 top-1/2 transform -translate-y-1/2 md:hidden hover:scale-105 cursor-pointer">
              {openMenu ? <X size={30} /> : <Tally3 className="rotate-90" size={30} />}
            </div>
            <div className={openMenu ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-white ease-in-out duration-500 md:hidden" : 'fixed left-[-100%] top-0 w-[60%] border-r h-full border-r-gray-900 bg-white ease-out duration-500'}>
              <h1 className='w-full m-4 text-3xl font-bold '><span className="text-red-500">Live</span> News.</h1>
              <ul className="p-4 uppercase">
                <li className="mb-4 p-4 border-b border-black cursor-pointer hover:bg-gray-200 hover:scale-105 duration-300"><a href="/home">Home</a></li>
                <li className="mb-4 p-4 border-b border-black cursor-pointer hover:bg-gray-200 hover:scale-105 duration-300"><a href="/live">Live</a></li>
                <li className="mb-4 p-4 border-b border-black cursor-pointer hover:bg-gray-200 hover:scale-105 duration-300"><a href="/about">About Us</a></li>
              </ul>
            </div>

            <div class="hidden container md:flex items-center justify-center p-6 mx-auto text-gray-600 capitalize ">
              <a onClick={(e) => { localStorage.setItem('TAB', 'HOME') }} href="/home" class={`text-xl ${localStorage.getItem('TAB') === 'HOME' ? 'text-gray-800 transition-colors duration-300 transform  border-b-2 border-blue-500' : 'border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500'} mx-1.5 sm:mx-6`}>Home</a>
              <a onClick={(e) => { localStorage.setItem('TAB', 'LIVE') }} href="/live" class={`text-xl ${localStorage.getItem('TAB') === 'LIVE' ? 'text-gray-800 transition-colors duration-300 transform  border-b-2 border-blue-500' : 'border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500'} mx-1.5 sm:mx-6`}>Live</a>
              <a onClick={(e) => { localStorage.setItem('TAB', 'ABOUT') }} href="/about" class={`text-xl ${localStorage.getItem('TAB') === 'ABOUT' ? 'text-gray-800 transition-colors duration-300 transform  border-b-2 border-blue-500' : 'border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500'} mx-1.5 sm:mx-6`}>About us</a>
              {/* <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6">features</a> */}
            </div>

          </nav>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<TestVideo />} />
          <Route path="/video" element={<VideoCard />} />
          <Route path="/stream" element={<LiveStream />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;


