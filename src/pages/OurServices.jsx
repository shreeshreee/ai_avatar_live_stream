import React from "react";
import latestNews from '../assets/latestNews.png'
import liveStreaming from '../assets/liveStreaming.png'
import notifications from '../assets/notifications.png'
// import text2speech from '../assets/text2speech.jpg'
// import summary from '../assets/summary.jpg'
// import transcription from '../assets/transcription.png'
// import query from '../assets/query.jpg'
// import subtitles from '../assets/subtitles.png'
// import livetrans from '../assets/live_transcription.jpg'
// import vision from '../assets/vision.jpg'
import useStore from "../VariableStore";


function OurServices(){
    const { toggleDarkTheme, darkTheme } = useStore() 
    return(
        <div className={`w-full py-[5rem] px-4 ${darkTheme ? "bg-black" : "bg-white"} ${darkTheme ? "text-white" : "text-black"} mx-auto`}>
            <div className="max-w-[1240px] mx-auto p-4 flex justify-center mb-4">
                <h1 className={`md:text-5xl  sm:text-3xl text-2xl font-bold p-3 ${darkTheme ? "border-b-2 border-blue-500" : "border-b-2"} rounded-3xl bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent`}>Our Services</h1>
            </div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[350px] mx-auto my-4 rounded-3xl" src={latestNews}  alt="/" />
                <div className="flex flex-col justify-center">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"><span className="text-red-500">Latest</span> News</h1>
                    <p className="md:text-[1rem] text-left p-0 m-0">Stay updated with our latest news feature for real-time updates on global events. Our AI avatar delivers breaking news, trending topics, and significant events, keeping you informed and engaged.</p>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[350px] mx-auto my-4 rounded-3xl" src={liveStreaming}  alt="/" />
                <div className="flex flex-col justify-center md:order-first">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"><span className="text-blue-600">24/7</span> Live <span className="text-red-500">Streaming</span></h1>
                    <p className="md:text-[1rem] text-left p-0 m-0">Experience news like never before with our 24/7 live streaming feature. Our platform offers uninterrupted access to live news broadcasts, keeping you connected to the pulse of the world around the clock.</p>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[350px] mx-auto my-4 rounded-3xl" src={notifications}  alt="/" />
                <div className="flex flex-col justify-center">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Get <span className="text-blue-500">Notificed</span></h1>
                    <p className="md:text-[1rem] text-left p-0 m-0">Stay ahead of the curve with our Newsletter feature, where users can subscribe to our newsletter and receive the latest news updates directly to their inbox. By subscribing, users gain access to a curated selection of breaking news, top stories, and insightful analyses, ensuring they never miss a beat.</p>
                </div>
            </div>

            
        </div>
    )
}
export default OurServices;