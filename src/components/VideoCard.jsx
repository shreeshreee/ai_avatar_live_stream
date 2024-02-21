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
        <video autoPlay muted loop className='absolute inset-0 opacity-40 w-full h-full object-cover'>
          <source src={background_video} type="video/webm" />
          Your browser does not support the video tag.
        </video>

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
        <ReactPlayer autoPlay width="100%" height="100%" className='react-player' url={`https://apis.elai.io/public/video/65cdbdb04533bfff728207a5.mp4?s=8c1df9019f381bcf7a6027650c8999d035ec087e82a40ff1471ece5cda83ed11`} controls />
      </div>
      <div className='mt-2 bg-[#0e0e0e] justify-between items-center my-auto p-4 text-white '>
        <h1 className='font-sans text-2xl font-[700] pl-4'>Latest Updates: {usaDate}</h1>
        {/* <ThumbsUp className='w-10 h-6' /> */}
        {/* <span className='text-[12.4px] sm:text-[14.4px] text-[#0f0f0f] font-medium tracking-wide'>{"Likes"}</span> */}
        {/* <img className='w-40 ml-4' src="https://assets-global.website-files.com/623ae64112adcf772da9687e/623b0335353b456141200393_pv%20logo-min.png" /> */}

      </div>
      <div className='my-4 mx-auto font-sans text-white text-2xl font-[700]'>News Content</div>
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
          <p className='text-lg font-bold'>Focus Financial Lawsuit</p>
          <p className='text-sm'>Investors who lost more than $100,000 in Focus Financial Partners Inc. (FOCS) during the period of February 27, 2023 to August 31, 2023 have until March 4, 2024 to file lead plaintiff applications in a class-action lawsuit alleging the company failed to disclose material information leading up to its acquisition by Clayton, Dubilier & Rice, LLC.</p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>Focus Financial Lawsuit</p>
          <p className='text-sm'>Investors who lost more than $100,000 in Focus Financial Partners Inc. (FOCS) during the period of February 27, 2023 to August 31, 2023 have until March 4, 2024 to file lead plaintiff applications in a class-action lawsuit alleging the company failed to disclose material information leading up to its acquisition by Clayton, Dubilier & Rice, LLC.</p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>Focus Financial Lawsuit</p>
          <p className='text-sm'>Investors who lost more than $100,000 in Focus Financial Partners Inc. (FOCS) during the period of February 27, 2023 to August 31, 2023 have until March 4, 2024 to file lead plaintiff applications in a class-action lawsuit alleging the company failed to disclose material information leading up to its acquisition by Clayton, Dubilier & Rice, LLC.</p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>Focus Financial Lawsuit</p>
          <p className='text-sm'>Investors who lost more than $100,000 in Focus Financial Partners Inc. (FOCS) during the period of February 27, 2023 to August 31, 2023 have until March 4, 2024 to file lead plaintiff applications in a class-action lawsuit alleging the company failed to disclose material information leading up to its acquisition by Clayton, Dubilier & Rice, LLC.</p>
        </div>
        <div className='my-2'>
          <p className='text-lg font-bold'>Focus Financial Lawsuit</p>
          <p className='text-sm'>Investors who lost more than $100,000 in Focus Financial Partners Inc. (FOCS) during the period of February 27, 2023 to August 31, 2023 have until March 4, 2024 to file lead plaintiff applications in a class-action lawsuit alleging the company failed to disclose material information leading up to its acquisition by Clayton, Dubilier & Rice, LLC.</p>
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