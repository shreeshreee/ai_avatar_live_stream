import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import background_video from "../assets/background_video.webm"
import "./Scrollbar.css";
import { API } from '../ApiClient';
import axios from "axios";


function VideoCard(props) {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const usaDate = today.toLocaleDateString('en-US', options);
  const [newsContent,setNewsContent]=useState([])
  useEffect(()=>{

  })

  async function getNewsContent() {
    const URL = API + "getNewsContent/";
  
    try {
        const response = await axios.get(URL);
        // const response = await axios.post(URL, {data: chatData,odd:data1,even:data2});
        if (response.status === 200) {
            let d= { title: response.data.title, content: response.data.content }
            console.log(d)
            newsContent.push(d)
            setNewsContent(newsContent)
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

  return (
    <>
      <div className='sticky top-0 z-20 bg-[#0e0e0e] w-full'>
        {/* <video autoPlay muted loop className='absolute inset-0 opacity-40 w-full h-full object-cover'>
          <source src={background_video} type="video/webm" />
          Your browser does not support the video tag.
        </video> */}

        <div className='relative z-20 flex w-full items-center space-x-2 lg:space-x-20 xl:space-x-64'>
          <Link to='/video' className='mx-auto lg:ml-20'>
            <img className='w-40 mx-auto lg:ml-20' src="https://assets-global.website-files.com/623ae64112adcf772da9687e/623b0335353b456141200393_pv%20logo-min.png" alt="Logo" />
          </Link>
        </div>
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
        url={`https://apis.elai.io/public/video/65cdbdb04533bfff728207a5.mp4?s=8c1df9019f381bcf7a6027650c8999d035ec087e82a40ff1471ece5cda83ed11`} 
        controls 
        />
      </div>
      <div className='mt-2 bg-[#0e0e0e] justify-between items-center my-auto p-4 text-white '>
        <h1 className='font-sans text-2xl font-[700] pl-4'>Latest Updates: {usaDate}</h1>
        {/* <ThumbsUp className='w-10 h-6' /> */}
        {/* <span className='text-[12.4px] sm:text-[14.4px] text-[#0f0f0f] font-medium tracking-wide'>{"Likes"}</span> */}
        {/* <img className='w-40 ml-4' src="https://assets-global.website-files.com/623ae64112adcf772da9687e/623b0335353b456141200393_pv%20logo-min.png" /> */}

      </div>
      <div className=' text-center my-4 mx-auto font-sans text-white text-2xl font-[700]'><h3 className='bg-[#0e0e0e] inline-flex p-4 rounded-3xl'>News Content</h3></div>
      <div id="scrollbar-chat" className='w-[100%] h-[75vh] flex-col p-4 text-white overflow-y-scroll scrollbar' >

        <div className='my-2'>
          <p className='text-lg font-bold'>2024 SKF Annual General Meeting Notice</p>
          <p className='text-sm'>Aktiebolaget SKF will hold its Annual General Meeting on 26 March 2024 at the Radisson Blu Scandinavia Hotel, Gothenburg, Sweden, at 14:00. Shareholders are invited to attend in person or by proxy and may request postal voting forms and submit completed forms by the deadline. The meeting Agenda includes presentation of annual reports, election of Board members, and approval of the Performance Share Programme 2024.</p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>SKF Annual General Meeting</p>
          <p className='text-sm'>SKF's Annual General Meeting will be held on Tuesday, 26 March 2024, at the Radisson Blu Scandinavia Hotel in Gothenburg, Sweden. The meeting will cover various items, including the presentation of the annual report, election of Board members, and a proposal for the SKF Performance Share Programme 2024.</p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>Focus Financial Lawsuit</p>
          <p className='text-sm'>Investors who lost more than $100,000 in Focus Financial Partners Inc. (FOCS) during the period of February 27, 2023 to August 31, 2023 have until March 4, 2024 to file lead plaintiff applications in a class-action lawsuit alleging the company failed to disclose material information leading up to its acquisition by Clayton, Dubilier & Rice, LLC.</p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>ESG Recognition for WuXi Biologics</p>
          <p className='text-sm'>WuXi Biologics has been recognized as a 2024 Industry Top-Rated and Regional Top-Rated Company by Morningstar Sustainalytics' Environmental, Social and Governance (ESG) Ratings, marking the fourth consecutive year the company has achieved this honor. This recognition places WuXi Biologics in the top 2% of nearly 1,000 companies assessed in the pharmaceutical sector.</p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>Geospatial Land Use Innovation</p>
          <p className='text-sm'>In a major move, Regrid and Zoneomics have partnered to unveil the Standardized Zoning geospatial product. This innovation will provide professionals with comprehensive insights into land use permissions through national standardization of local zoning data sets. Regrid's Standardized Zoning product will be available through flexible delivery methods and includes 26 fields of zoning boundary data, revolutionizing land use planning and property insights across the United States.</p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>Lighting Growth Opportunities</p>
          <p className='text-sm'>Advancements in connectivity and wireless technologies are expected to drive the lighting industry in 2024.  Adoption of connected lighting solutions will surge, fueled by their energy efficiency, data insights, and improved user experience.  The lighting industry will see increased focus on sustainability and smart buildings, creating opportunities for revenue growth and technology development.</p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>Medical Fiber Optics Market</p>
          <p className='text-sm'>The global medical fiber optics market is anticipated to reach USD 1.7 Billion by 2030, driven by technological advancements, increasing healthcare expenditure, and rising prevalence of cancer. Leading players like Boston Scientific, Coherent, and IPG Photonics are shaping market trends. </p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>Joint Replacement Devices Market Boom</p>
          <p className='text-sm'>The global Joint Replacement Devices market is predicted to reach 27.1 billion USD by 2031, with a 5.7% CAGR. The market growth is driven by the rising prevalence of joint-related disorders and the increasing popularity of minimally invasive surgical techniques.</p>
        </div>


      </div>
      {/* <div className='mt-1 border-2 items-center'>
        <div className='w-[96%] mx-auto  lg:max-w-[850px] h-[240px] sm:h-[320px] lg:h-[430px] container'>
          <ReactPlayer width="100%" height="100%" className='react-player' url={`https://www.youtube.com/watch?v=9zMMogeBzyY`} controls />
          <div>
            <div className='flex gap-x-1'>
            </div>
            <h2 className='text-md sm:text-xl md:text-2xl text-[#000000] font-medium'>{"This is latest news updates"}</h2>
            <div className='sm:flex items-center justify-between mt-3 space-y-3'> */}


      {/* <img className='rounded-[20px]' src="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s48-c-k-c0x00ffffff-no-rj" /> */}
      {/* <div className='flex flex-col -gap-y-6'> */}

      {/* <h5 className='w-fit text-sm sm:text-md font-medium text-[#000000] px-3 py-2 rounded-[10px] bg-[#f2f2f2] tracking-wide'>{"news details"}</h5> */}

      {/* </div> */}

      {/* <div className='flex items-center gap-x-3 mb-5 sm:mb-0'>
                <div className='flex items-center bg-[#f2f2f2] px-3 py-2 rounded-[10px]'>
                  <ThumbsUp className='w-10 h-6' />
                  <span className='text-[12.4px] sm:text-[14.4px] text-[#0f0f0f] font-medium tracking-wide'>{"Likes"}</span>
                </div>
                <span className='text-[12.4px] sm:text-[14.4px] text-[#0f0f0f] font-medium tracking-wide bg-[#f2f2f2] px-3 py-2 rounded-[10px]'>{" Views"}</span>
              </div>
            </div>
          </div>
        </div> */}


      {/* </div> */}
    </>
  )
}

export default VideoCard