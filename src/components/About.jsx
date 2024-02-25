import React from "react";
import Footer from "../pages/Footer";

function About() {
    return (
        <div className=''>
            <div className="w-full py-[1rem] px-4 bg-black text-white mx-auto">

                <div className="max-w-[1240px] mx-auto grid">
                    <div className="flex flex-col justify-center">
                    <h1 className="text-3xl sm:text-3xl font-bold py-2 text-center bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">Who We Are:</h1>

                        <p className=" md:text-[1rem] pl-2 p-0 m-0 text-center">we are dedicated to revolutionizing the way people consume news and stay informed about global events. Our platform is built on the foundation of innovation, integrity, and inclusivity, with a mission to empower individuals with accurate, unbiased, and timely information.</p>
                    </div>
                </div>


                <h1 className="md:text-5xl sm:text-3xl text-2xl mt-4 font-bold py-2 text-center my-2  ">Our Vision:</h1>
                <div id="scrollbar-chat" className='w-full  justify-center flex flex-wrap lg:p-0' >
                    <div className=" w-full border rounded-xl bg-black   mb-4 p-2 md:p-4 lg:w-[30%] flex flex-col shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] ">
                        <h1 className="text-4xl text-blue-800 font-semibold text-center  lg:mb-7">Freedom from Human Bias:</h1>
                        <div className="flex my-2 items-center px-5 py-0 rounded-[0_30px_30px_0] hover:transition-[0.3s]">
                            <div className="w-full mx-auto h-full rounded-[40px] bg-gradient-to-r from-violet-500 to-red-500">
                                <div className="h-[2px] bg-transparent rounded-[40px]"></div>
                            </div>
                        </div>

                        <p className="p-2 leading-8 font-sans">Unlike traditional news sources, We aims to provide an impartial perspective. </p>
                        <p className="p-2 leading-8 font-sans">Being an AI-driven platform, it relies on data and algorithms, not humans, to generate news articles, eliminating personal opinions and agendas. </p>
                        <p className="p-2 leading-8 font-sans">Viewers are encouraged to help our AI learn by reporting fake news and sharing the truth.</p>
                    </div>
                    <div className=" w-full border rounded-xl bg-black mb-4 p-2 md:p-4 md:mx-4 lg:w-[30%] flex flex-col shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] ">
                        <h1 className="text-3xl text-blue-800 font-semibold text-center lg:mb-7">Comprehensive Coverage and Diverse Perspectives:</h1>
                        <div className="flex my-2 items-center px-5 py-0 rounded-[0_30px_30px_0] hover:transition-[0.3s]">
                            <div className="w-full mx-auto h-full rounded-[40px] bg-gradient-to-r from-violet-500 to-red-500">
                                <div className="h-[2px] bg-transparent rounded-[40px]"></div>
                            </div>
                        </div>

                        <p className="p-2 leading-8 font-sans">We has the capacity to process vast amounts of information from various sources, resulting in round the clock, round the world news coverage.</p>
                        <p className="p-2 leading-8 font-sans">By analyzing diverse perspectives, it offers viewers a holistic understanding of complex issues. Our algorithms are always learning and always improving.</p>

                    </div>
                    <div className=" w-full border rounded-xl bg-black mb-4 p-2 md:p-4 lg:w-[30%] flex flex-col shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] ">
                        <h1 className="text-4xl text-blue-800 font-semibold text-center lg:mb-7">A Glimpse into the Future:</h1>
                        <div className="flex my-2 items-center px-5 py-0 rounded-[0_30px_30px_0] hover:transition-[0.3s]">
                            <div className="w-full mx-auto h-full rounded-[40px] bg-gradient-to-r from-violet-500 to-red-500">
                                <div className="h-[2px] bg-transparent rounded-[40px]"></div>
                            </div>
                        </div>

                        <p className="p-2 leading-8 font-sans">The AI-driven nature of Live News will allow for personalized news tailored to the preferences of individual viewers.</p>
                        <p className="p-2 leading-8 font-sans">By understanding your interests, and, with the help of your feedback, our AI will soon be able to deliver a personalized news broadcast  made just for you.</p>
                        <p className="p-2 leading-8 font-sans">You deserve news that is interesting, informative and unbiased. You deserve Live News.</p>
                    </div>



                </div>
            </div>

            <Footer />
        </div>
    )
}
export default About;
