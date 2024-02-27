import React from "react";
import ai from '../assets/ai.jpg'
import { Dot } from 'lucide-react';
import useStore from "../VariableStore";
import Lottie from "lottie-react";
import aiCircute from "../assets/aiCircute.json";

function Introduction() {
    const { toggleDarkTheme, darkTheme } = useStore() 
    return (
        <div className={`w-full ${darkTheme ? "bg-black" : "bg-white"} py-16 px-4`}>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                {/* <img className="w-[500px] mx-auto my-4 rounded-3xl" src={ai} alt="/" /> */}
                <Lottie className="w-auto mx-auto my-4 rounded-3xl" animationData={aiCircute} loop={true} />
                <div className="flex flex-col justify-center">
                    <h1 className={`md:text-4xl sm:text-3xl text-center lg:text-left ${darkTheme ? "text-white" : "text-black"} text-2xl font-bold py-2`}>Introducing <span className="text-red-600">Globe</span> News</h1>
                    <p className={`md:text-[1rem] text-center lg:text-left p-0 m-0 ${darkTheme ? "text-white" : "text-black"}`}>Welcome to our innovative news platform, where cutting-edge technology meets real-time journalism. Our application revolutionizes the way news is delivered by providing live news content that is presented by an AI avatar through live streaming. With a seamless blend of artificial intelligence and live broadcasting, we bring you the latest updates and insights in a dynamic and engaging format. Stay tuned for a unique news experience that combines the power of AI with the immediacy of live streaming.</p>
                    {/* <a href='/live' className="bg-red-500  w-[200px] text-center rounded-md mx-auto md:mx-0 font-medium my-6 py-3">Live</a> */}
                    <div className="mx-auto my-3 flex w-full">
                        <a onClick={(e) => { localStorage.setItem('TAB', 'LIVE') }} class="mx-auto text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-red-600 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500 flex items-center" href="/live"><Dot className="h-10 w-10 animate-pulse" /><p className="mr-4">Watch Live</p></a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Introduction;