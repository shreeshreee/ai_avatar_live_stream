import React, { useState } from "react";
import Globelogo from '../assets/globeLogo.png'
import { NavLink } from 'react-router-dom';
import { Dot } from 'lucide-react';
import ReactPlayer from 'react-player'
// import Typed from 'react-typed'
import cube from '../assets/cubic.mp4'
import cubeWhite from '../assets/cubicWhite.mp4'
// import earthR from '../assets/earthRotating.mp4'
// import earth from '../assets/earth.mp4'
import useStore from "../VariableStore";
import Lottie from "lottie-react";
import earthAnimation from "../assets/earthAnimation.json";


function Hero() {
    const { toggleDarkTheme, darkTheme } = useStore()
    return (
        <header class={`${darkTheme ? "bg-black" : "bg-white"}`}>

            <div class="container px-6 p-5 lg:p-14 mx-auto">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2 flex justify-center">
                        <div class="w-full lg:max-w-lg">
                            <h1 className={`text-4xl text-center lg:text-left font-semibold  ${darkTheme ? "text-white" : "text-black"} lg:text-6xl`}>Real-time news <br /> at your <span class="bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">fingertips.</span></h1>

                            <p className={`mt-3 text-center lg:text-left ${darkTheme ? "text-white" : "text-gray-600"} dark:text-black-400 lg:text-md`}>Experience the pulse of the world with our live news application, delivering real-time updates and insights straight to your fingertips. Stay informed, stay connected, and stay ahead with the latest news, wherever you are.</p>
                            <div className="mx-auto my-3 flex w-full">
                                <a onClick={(e) => { localStorage.setItem('TAB', 'LIVE') }} class=" text-sm tracking-wider mx-auto lg:mx-0 text-white uppercase transition-colors duration-300 transform bg-red-600 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500 flex items-center" href="/live"><Dot className="h-10 w-10 animate-pulse" /><p className="mr-4">Watch Live</p></a>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full lg:mt-0 lg:w-1/2">

                        {/* <video src={cube} autoPlay={true} loop={true} className="w-[80%]" /> */}
                        {darkTheme ? (
                            // <ReactPlayer
                            //     config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                            //     playing={true}
                            //     loop={true}
                            //     // url={earthR}
                            //     url={cube}
                            //     // url="https://sketchfab.com/models/c60e261df7334f6e9a2d8d44f7b6f123"
                            //     className="react-player w-[70%]"

                            //     width="70%"
                            //     height="100%"
                            // />

                            <Lottie className="w-[70%]" animationData={earthAnimation} loop={true} />
                        ) : (
                            // <img class="w-[70%] animate" src={Globelogo} alt="Catalogue-pana.svg" />
                            <Lottie className="w-[70%]" animationData={earthAnimation} loop={true} />
                            // <ReactPlayer
                            //     config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                            //     playing={true}
                            //     loop={true}
                            //     // url={earthR}
                            //     url={cubeWhite}
                            //     // url="https://sketchfab.com/models/c60e261df7334f6e9a2d8d44f7b6f123"
                            //     className="react-player w-[70%]"

                            //     width="70%"
                            //     height="100%"
                            // />
                        )}


                    </div>

                </div>
            </div>
        </header>
    )
}
export default Hero;