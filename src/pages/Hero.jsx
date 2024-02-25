import React, { useState } from "react";
import Globelogo from '../assets/globeLogo.png'
import { NavLink } from 'react-router-dom';
import { Dot } from 'lucide-react';
import ReactPlayer from 'react-player'
// import Typed from 'react-typed'
import cube from '../assets/cubic.mp4'


function Hero() {
    return (
        <header class="bg-black ">


            <div class="container px-6 p-5 lg:p-14 mx-auto">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2 flex justify-center">
                        <div class="w-full lg:max-w-lg">
                            <h1 class="text-4xl  text-center font-semibold text-gray-800 dark:text-white lg:text-6xl">Real-time news <br /> at your <span class="bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">fingertips.</span></h1>

                            <p class="mt-3 text-center text-white dark:text-black-400 lg:text-md">Experience the pulse of the world with our live news application, delivering real-time updates and insights straight to your fingertips. Stay informed, stay connected, and stay ahead with the latest news, wherever you are.</p>
                            <div className="mx-auto my-3 flex w-full">
                                <a onClick={(e) => { localStorage.setItem('TAB', 'LIVE') }} class="mx-auto text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-red-600 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500 flex items-center" href="/live"><Dot className="h-10 w-10 animate-pulse" /><p className="mr-4">Watch Live</p></a>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full lg:mt-0 lg:w-1/2">
                        {/* <img class="w-[70%] animate" src={Globelogo} alt="Catalogue-pana.svg" /> */}
                        {/* <video src={cube} autoPlay={true} loop={true} className="w-[80%]" /> */}
                        <ReactPlayer
                            // Disable download button
                            config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                            playing={true}
                            loop={true}
                            onContextMenu={e => e.preventDefault()}

                            url={cube}
                            className="react-player w-[70%]"
                            
                            width="70%"
                            height="100%"
                        />

                    </div>
                    {/* <div className="w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10">
            <div className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start">
                <canvas
                    className="block"
                    style={{ width: "1200px", height: "1200px" }}
                    data-engine="three.js r149"
                    width="1500"
                    height="1500"
                ></canvas>
            </div>
        </div> */}
                </div>
            </div>
        </header>
    )
}
export default Hero;