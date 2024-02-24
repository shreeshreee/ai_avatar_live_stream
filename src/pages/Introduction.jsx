import React from "react";
import ai from '../assets/ai.jpg'
function Introduction(){
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4 rounded-3xl" src={ai}  alt="/" />
                <div className="flex flex-col justify-center">
                    <h1 className="md:text-4xl sm:text-3xl text-center lg:text-left text-2xl font-bold py-2">Introducing <span className="text-red-600">Live</span> News</h1>
                    <p className="md:text-[1rem] text-center lg:text-left p-0 m-0">Welcome to our innovative news platform, where cutting-edge technology meets real-time journalism. Our application revolutionizes the way news is delivered by providing live news content that is presented by an AI avatar through live streaming. With a seamless blend of artificial intelligence and live broadcasting, we bring you the latest updates and insights in a dynamic and engaging format. Stay tuned for a unique news experience that combines the power of AI with the immediacy of live streaming.</p>
                    <a href='/live' className="bg-black text-[#00df9e] w-[200px] text-center rounded-md mx-auto md:mx-0 font-medium my-6 py-3">Live</a>
                </div>
                
            </div>
        </div>
    )
}
export default Introduction;