import React, { useEffect, useState } from "react";
import useStore from "../VariableStore";
import { CalendarDays } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { API } from '../ApiClient';
import { Filter, Dribbble, Drama, FilterX,Loader2 } from 'lucide-react';
import './Scrollbar.css'

function News() {
    const { toggleDarkTheme, darkTheme } = useStore();
    const [selectedDate, setSelectedDate] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [category, setCategory] = useState(null);
    const [newsContent, setNewsContent] = useState([]);
    const [filter, setFilter] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getNewsContent();
    }, [selectedDate, category]);

    function formatDate(datetime) {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
            timeZone: "Asia/Kolkata",
            timeZoneName: "short",
        };
        const formattedDate = new Date(datetime).toLocaleString("en-US", options);
        const formattedDateWithIST = formattedDate.replace("GMT+5:30", "IST");

        return formattedDateWithIST;
    }


    function convertToEST(datetime) {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
            timeZone: "America/New_York",
        };
        const dateObject = new Date(datetime);
        if (dateObject.getHours() === 24) {
            dateObject.setHours(0);
        }
        const formattedDate = dateObject.toLocaleString("en-US", options);
        const timezoneAbbreviation = "EST";
        return formattedDate + " " + timezoneAbbreviation;
    }


    async function getNewsContent() {
        setLoading(true)
        const form = new FormData();
        form.append('category', category);
        if (selectedDate) {
            form.append('date', selectedDate.toISOString());
        }
        else {
            form.append('date', selectedDate);
        }
        // console.log(form, category, selectedDate, '**********')

        try {
            const response = await axios.post(API + "getNews/", form);
            if (response.status === 200) {

                setNewsContent(response.data.news_articles);
                console.log(response.data.news_articles)
            }
            setLoading(false)
        } catch (error) {
            console.error('Error:', error);
            setLoading(false)
        }
    }

    return (
        <div className={`w-full font-roboto h-full px-5 lg:px-16 ${darkTheme ? "bg-black" : "bg-white"} ${darkTheme ? "text-white" : "text-black"} `}>
            {loading ? (
                <div className={`w-full h-[80vh] flex justify-center items-center lg:flex-row ${darkTheme ? "text-white" : "text-black"}`}>
                    <Loader2 className="animate-spin w-8 h-8 text-blue-500"/>
                </div>
            ) : (
                <div>
                    <header className="mx-auto flex items-center justify-between z-20">
                        <h2 className="text-4xl mt-5 mb-5 font-bold font-roboto">
                            {category && category.charAt(0).toUpperCase() + category.slice(1)}
                        </h2>

                        <div class="relative inline-block">
                            {filter ? (
                                <FilterX
                                    onClick={(e) => { setFilter(!filter) }}
                                    className="my-auto ml-auto cursor-pointer"
                                />

                            ) : (
                                <Filter
                                    onClick={(e) => { setFilter(!filter) }}
                                    className="my-auto ml-auto cursor-pointer"
                                />
                            )

                            }
                            <p id='scrollbar' className={`absolute z-10 ${filter ? "flex-col" : "hidden"} items-center justify-center overflow-y-scroll scrollbar w-52 p-3 text-gray-600 bg-white rounded-lg shadow-lg -left-[13.2rem] -top-4`}>
                                <div
                                    onClick={(e) => { setCategory('sports'); setFilter(false) }}
                                    className={`${category === 'sports' ? 'border-blue-500 text-blue-600' : ''} mx-3 flex text-center my-4 text-lg lg:hover:border-blue-500 lg:cursor-pointer border-b-2`}>
                                    <Dribbble className={`mr-2`} />
                                    Sports
                                </div>
                                <div
                                    onClick={(e) => { setCategory('entertainment'); setFilter(false) }}
                                    className={`mx-3 flex text-center  my-4 text-lg ${category === 'entertainment' ? 'border-blue-500 text-blue-600' : ''} lg:hover:border-blue-500 lg:cursor-pointer border-b-2`}>
                                    <Drama className="mr-2" />
                                    Entertainment
                                </div>

                            </p>
                        </div>
                    </header >

                    {
                        newsContent.length > 0 && (
                            <div className={`w-full flex flex-col lg:flex-row ${darkTheme ? "text-white" : "text-black"}`}>
                                <div className="lg:w-[50%] ">
                                    <div className="relative">
                                        <img src={newsContent[0].img_url} alt="Article" className="w-[100%]" />
                                        {/* <span className="absolute bottom-2 left-2 text-red-600">Latest Update</span> */}
                                    </div>
                                    <p className="text-xs text-gray-600 my-1 font-roboto font-semibold">{formatDate(newsContent[0].datetime)}</p>
                                    <h2 className="text-xl mt-5 mb-5 font-bold">{newsContent[0].headline}</h2>
                                    <p className="my-5">{newsContent[0].description}</p>
                                </div>

                                <div className="lg:w-[25%]  lg:mx-6 flex">
                                    <div className="">
                                        <img src={newsContent[1].img_url} alt="Article" className="w-full" />

                                        <p className="text-xs text-gray-600 my-1 font-roboto font-semibold">{formatDate(newsContent[1].datetime)}</p>
                                        <h2 className=" text-xl mt-5 font-bold">{newsContent[1].headline}</h2>
                                        <p className="my-5">{newsContent[1].description}</p>
                                    </div>
                                </div>

                                <div className="lg:w-[25%]  flex">
                                    <div className="">
                                        <img src={newsContent[2].img_url} alt="Article" className="w-full" />

                                        <p className="text-xs text-gray-600 my-1 font-roboto font-semibold">{formatDate(newsContent[2].datetime)}</p>
                                        <h2 className=" text-xl mt-5 font-bold">{newsContent[2].headline}</h2>
                                        <p className="my-5">{newsContent[2].description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    < div className={`grid grid-cols-1 lg:grid-cols-4 gap-4   my-2 ${darkTheme ? "text-white" : "text-black"}`
                    }>
                        {
                            newsContent.slice(3).map((news, index) => (
                                <div key={index} className={`col-span-1 mb-6 ${index % 4 === 1 || index % 4 === 2 ? 'mx-auto' : ''}`}>
                                    <div className="">
                                        <img src={news.img_url} alt="Article" className="rounded-sm w-full" />
                                        <p className="text-xs text-gray-600 my-1 font-roboto font-semibold">{formatDate(news.datetime)}</p>
                                        <p className={`text-md font-semibold text-gray-950 ${darkTheme ? "text-white" : "text-black"}`}>{news.headline}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div >


                </div >


            )}
        </div >
    )
}
export default News;
