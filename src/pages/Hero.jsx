import React, { useState } from "react";
import Globelogo from '../assets/globeLogo.png'
import { NavLink } from 'react-router-dom';
import { Dot } from 'lucide-react';
// import Typed from 'react-typed'


function Hero() {
    return (
        <header class="bg-white ">
            {/* <nav class="bg-white shadow flex">
                <NavLink to='/home' className=' m-2 rounded-3xl p-2 flex'>
                    <img className=' mx-auto w-11 p-1' src={logo} alt="Logo" />
                    <h1 className='ml-2'>Global news</h1>
                </NavLink>
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize ">

                    <a href="/home" class="text-gray-800 transition-colors duration-300 transform  border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>
                    <a href="/home" class="text-gray-800 transition-colors duration-300 transform  border-b-2 border-blue-500 mx-1.5 sm:mx-6">Live</a>
                    <a href="/home" class="text-gray-800 transition-colors duration-300 transform  border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6">features</a>

                </div>
            </nav> */}


            <div class="container px-6 p-5 lg:p-14 mx-auto">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2 flex justify-center">
                        <div class="w-full lg:max-w-lg">
                            <h1 class="text-4xl  text-center font-semibold text-gray-800 dark:text-black lg:text-4xl">Real-time news <br /> at your <span class="text-blue-500 ">fingertips.</span></h1>

                            <p class="mt-3 text-center text-gray-600 dark:text-black-400">Experience the pulse of the world with our live news application, delivering real-time updates and insights straight to your fingertips. Stay informed, stay connected, and stay ahead with the latest news, wherever you are.</p>
                            <div className="mx-auto flex w-full">
                                <a onClick={(e) => { localStorage.setItem('TAB', 'LIVE') }} class="mx-auto text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-red-600 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500 flex items-center" href="/live"><Dot className="h-10 w-10 animate-pulse" /><p className="mr-4">Watch Live</p></a>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full lg:mt-0 lg:w-1/2">
                        <img class="w-[70%] " src={Globelogo} alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Hero;