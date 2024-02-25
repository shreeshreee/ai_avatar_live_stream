import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import "./Scrollbar.css";
import { API } from '../ApiClient';
import axios from "axios";
import logo from '../assets/siteLogo.png'
import video from '../assets/news_video.mp4'
import { Radio } from 'lucide-react';

function Live() {
    useEffect(()=>{
        localStorage.setItem('TAB','LIVE')
    },[])
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const usaDate = today.toLocaleDateString('en-US', options);
    const [newsContent, setNewsContent] = useState([
        { 'headline': '2024 SKF Annual General Meeting Notice', 'description': "Aktiebolaget SKF will hold its Annual General Meeting on 26 March 2024 at the Radisson Blu Scandinavia Hotel, Gothenburg, Sweden, at 14:00. Shareholders are invited to attend in person or by proxy and may request postal voting forms and submit completed forms by the deadline. The meeting Agenda includes presentation of annual reports, election of Board members, and approval of the Performance Share Programme 2024." },
        { 'headline': 'SKF Annual General Meeting', 'description': "SKF's Annual General Meeting will be held on Tuesday, 26 March 2024, at the Radisson Blu Scandinavia Hotel in Gothenburg, Sweden. The meeting will cover various items, including the presentation of the annual report, election of Board members, and a proposal for the SKF Performance Share Programme 2024." },
        { 'headline': 'Focus Financial Lawsuit', 'description': "Investors who lost more than $100,000 in Focus Financial Partners Inc. (FOCS) during the period of February 27, 2023 to August 31, 2023 have until March 4, 2024 to file lead plaintiff applications in a class-action lawsuit alleging the company failed to disclose material information leading up to its acquisition by Clayton, Dubilier & Rice, LLC." },
        { 'headline': 'ESG Recognition for WuXi Biologics', 'description': "WuXi Biologics has been recognized as a 2024 Industry Top-Rated and Regional Top-Rated Company by Morningstar Sustainalytics' Environmental, Social and Governance (ESG) Ratings, marking the fourth consecutive year the company has achieved this honor. This recognition places WuXi Biologics in the top 2% of nearly 1,000 companies assessed in the pharmaceutical sector." },
        { 'headline': 'Geospatial Land Use Innovation', 'description': "In a major move, Regrid and Zoneomics have partnered to unveil the Standardized Zoning geospatial product. This innovation will provide professionals with comprehensive insights into land use permissions through national standardization of local zoning data sets. Regrid's Standardized Zoning product will be available through flexible delivery methods and includes 26 fields of zoning boundary data, revolutionizing land use planning and property insights across the United States." },
        { 'headline': 'Lighting Growth Opportunities', 'description': "Advancements in connectivity and wireless technologies are expected to drive the lighting industry in 2024.  Adoption of connected lighting solutions will surge, fueled by their energy efficiency, data insights, and improved user experience.  The lighting industry will see increased focus on sustainability and smart buildings, creating opportunities for revenue growth and technology development." },
        { 'headline': 'Medical Fiber Optics Market', 'description': "The global medical fiber optics market is anticipated to reach USD 1.7 Billion by 2030, driven by technological advancements, increasing healthcare expenditure, and rising prevalence of cancer. Leading players like Boston Scientific, Coherent, and IPG Photonics are shaping market trends. " },
        { 'headline': 'Joint Replacement Devices Market Boom', 'description': "The global Joint Replacement Devices market is predicted to reach 27.1 billion USD by 2031, with a 5.7% CAGR. The market growth is driven by the rising prevalence of joint-related disorders and the increasing popularity of minimally invasive surgical techniques." },
    ])
    useEffect(() => {

    })

    async function getNewsContent() {
        const URL = API + "getNewsContent/";

        try {
            const response = await axios.get(URL);
            // const response = await axios.post(URL, {data: chatData,odd:data1,even:data2});
            if (response.status === 200) {
                let d = { title: response.data.title, content: response.data.content }
                console.log(d)
                newsContent.push(d)
                setNewsContent(newsContent)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div className='bg-black'>
            {/* <nav class="bg-white shadow flex">
                <Link to='/home' className=' m-2 rounded-3xl p-2 flex'>
                    <img className=' mx-auto w-11 p-1' src={logo} alt="Logo" />
                    <h1 className='ml-2'>Global news</h1>
                </Link>
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize ">

                    <a href="/home" class="text-gray-800 transition-colors duration-300 transform  border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform  hover:border-blue-500 mx-1.5 sm:mx-6">features</a>

                </div>
            </nav> */}
            <div class="m-4">
                <h1 class="text-4xl  text-center font-semibold text-white text-white lg:text-5xl">24/7 <span class="bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">Live News</span></h1>
            </div>

            <div className='lg:h-[75vh] z-10 w-full relative'>
                {/* <video autoPlay muted loop className='absolute inset-0 opacity-40 w-full h-full object-cover'>
          <source src={background_video} type="video/webm" />
          Your browser does not support the video tag.
        </video>   */}
                {/* <ReactPlayer width="100%" height="100%" className='react-player' url={`https://www.youtube.com/watch?v=9zMMogeBzyY`} controls /> */}
                <ReactPlayer
                    playing={true}
                    loop={true}
                    width="100%"
                    height="100%"
                    className='react-player'
                    // url={`https://apis.elai.io/public/video/65cdbdb04533bfff728207a5.mp4?s=8c1df9019f381bcf7a6027650c8999d035ec087e82a40ff1471ece5cda83ed11`}
                    // url={'https://www.youtube.com/watch?v=qfHhtQYAeLA?modestbranding=0'}
                    url={'https://www.youtube.com/watch?v=wPV9FxeQXxI'}
                    // url={video}
                    config={{
                        youtube: {
                            playerVars: {
                                modestbranding: 1
                            }
                        }
                    }}
                    controls
                />
            </div>
            <div className='bg-black text-white'>
                <div className='mt-2 justify-between items-center p-4  '>
                    <h1 className='font-sans text-2xl font-[700] pl-4 lg:inline-flex lg:p-4 lg:rounded-3xl '>Latest News Updates: {usaDate}</h1>
                </div>
                {/* <div className=' text-center my-4 mx-auto font-sans text-white text-2xl font-[700]'><h3 className='bg-[#111111] inline-flex p-4 rounded-3xl'>News Content</h3></div> */}
                {/* <div id="scrollbar-chat" className='w-full  h-[75vh] justify-center flex flex-wrap p-2 lg:p-10  overflow-y-scroll scrollbar' >

                    {newsContent.map((news, index) => (
                        // <div className='border rounded-xl shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] bg-white mb-4 md:m-4 p-4 lg:w-[30%] flex flex-col  '>
                        //     <img className='w-32 mx-auto p-2' src={logo} alt="Logo" />
                        //     <p className='text-lg font-bold bg-gradient-to-r from-violet-800 to-red-600 bg-clip-text text-transparent'>{index + 1}. {news.headline}</p>
                        //     <p className='text-sm leading-7'>{news.description}</p>
                        // </div>
                        <div class="w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                            <div class="p-4 bg-fuchsia-700 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14">
                                </polyline></svg></div><div><h3 class="text-lg font-bold sm:text-xl">24/7 Content Generation</h3></div><div>
                                    <p class="text-sm sm:text-base text-center md:text-left">NewGenius keeps the content flowing round the clock with AI-powered algorithms, ensuring you're always ahead of the curve.</p></div></div>
                    ))}
                </div> */}
                    <div class="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
                {newsContent.map((news, index) => (
                        <div class="w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                            <div class="p-4 bg-fuchsia-700 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock">
                                    {/* <circle cx="12" cy="12" r="10"></circle> */}
                                    {/* <polyline points="12 6 12 12 16 14"></polyline> */}
                                    <Radio />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold sm:text-xl">{index + 1}. {news.headline}</h3>
                            </div>
                            <div>
                                <p class="text-sm sm:text-base text-start my-2">{news.description}</p>
                            </div>
                        </div>

                        
                ))}
                </div>

            </div>
        </div>
    )
}
export default Live;


