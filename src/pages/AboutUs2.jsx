import React from "react";

function AboutUs() {
    return (
        <div className="w-full py-[5rem] px-4 bg-white mx-auto">
            <div className="max-w-[1240px] mx-auto p-4 flex justify-center mb-4">
                <h1 className="md:text-4xl  sm:text-3xl text-2xl font-bold p-3 bg-[#00df9e] rounded-3xl">Our Services</h1>
            </div>
            <div className="items-center h-[80vh] block lg:flex w-full mb-16">
                <div className="grid grid-cols-1 border-2 md:grid-cols-3 gap-4 w-full h-[70%]">
                    <div className="bg-gray-200 p-4 border rounded-xl w-full">
                        <h1 className="text-xl text-blue-800 font-semibold text-center">Freedom from Human Bias:</h1>

                        <div className="flex my-4  items-center px-5 py-0 rounded-[0_30px_30px_0] hover:transition-[0.3s]">
                            <div className="w-[100%] bg-[rgb(230,230,230)] mx-auto h-full rounded-[40px] my-2">
                                <div className={`h-[4px] bg-[dodgerblue] rounded-[40px] `} style={{ width: `100%` }}></div>
                            </div>
                        </div>

                        <p className="p-2 leading-8 font-sans">Unlike traditional news sources, NewsGPT aims to provide an impartial perspective. </p>
                        <p className="p-2 leading-8 font-sans">Being an AI-driven platform, it relies on data and algorithms, not humans, to generate news articles, eliminating personal opinions and agendas. </p>
                        <p className="p-2 leading-8 font-sans">Viewers are encouraged to help our AI learn by reporting fake news and sharing the truth.</p>

                    </div>

                    <div className="bg-gray-200 p-4 border rounded-xl w-full">
                        <h1 className="text-xl text-blue-800 font-semibold text-center">Freedom from Human Bias:</h1>

                        <div className="flex my-4  items-center px-5 py-0 rounded-[0_30px_30px_0] hover:transition-[0.3s]">
                            <div className="w-[100%] bg-[rgb(230,230,230)] mx-auto h-full rounded-[40px] my-2">
                                <div className={`h-[4px] bg-[dodgerblue] rounded-[40px] `} style={{ width: `100%` }}></div>
                            </div>
                        </div>

                        <p className="p-2 leading-8 font-sans">Unlike traditional news sources, NewsGPT aims to provide an impartial perspective. </p>
                        <p className="p-2 leading-8 font-sans">Being an AI-driven platform, it relies on data and algorithms, not humans, to generate news articles, eliminating personal opinions and agendas. </p>
                        <p className="p-2 leading-8 font-sans">Viewers are encouraged to help our AI learn by reporting fake news and sharing the truth.</p>

                    </div>

                    <div className="bg-gray-200 p-4 border rounded-xl w-full">
                        <h1 className="text-xl text-blue-800 font-semibold text-center">Freedom from Human Bias:</h1>

                        <div className="flex my-4  items-center px-5 py-0 rounded-[0_30px_30px_0] hover:transition-[0.3s]">
                            <div className="w-[100%] bg-[rgb(230,230,230)] mx-auto h-full rounded-[40px] my-2">
                                <div className={`h-[4px] bg-[dodgerblue] rounded-[40px] `} style={{ width: `100%` }}></div>
                            </div>
                        </div>

                        <p className="p-2 leading-8 font-sans">Unlike traditional news sources, NewsGPT aims to provide an impartial perspective. </p>
                        <p className="p-2 leading-8 font-sans">Being an AI-driven platform, it relies on data and algorithms, not humans, to generate news articles, eliminating personal opinions and agendas. </p>
                        <p className="p-2 leading-8 font-sans">Viewers are encouraged to help our AI learn by reporting fake news and sharing the truth.</p>

                    </div>


                </div>
            </div>

        </div>
    )
}
export default AboutUs;
