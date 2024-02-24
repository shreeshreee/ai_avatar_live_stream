import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
function Footer() {
    return (
        <div className="bg-black">
            <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
                <div>
                    <h1 className='w-full text-3xl font-bold text-[#00df9e]'>Live News.</h1>
                    {/* <p className="md:text-[1rem] text-left p-0 py-4 m-0">Experience the pulse of the world with our live news application, delivering real-time updates and insights straight to your fingertips. Stay informed, stay connected, and stay ahead with the latest news, wherever you are.</p> */}
                    <p className="md:text-[1rem] text-left p-0 py-4 m-0">Our live news application harnesses the power of AI to deliver timely and reliable content sourced from public news channels. With an emphasis on efficiency and robustness, we aim to provide users with accurate and up-to-date information in real-time, ensuring they stay informed about global events effortlessly.</p>
                    <div className="flex justify-between md:w-[75%] my-6">
                        {/* <Facebook className="cursor-pointer" size={30} /> */}
                        <Instagram className="cursor-pointer" size={30} />
                        <Twitter className="cursor-pointer" size={30} />
                        <Linkedin className="cursor-pointer" size={30} />
                    </div>


                </div>
                <div class="">
                    <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>
                    <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                        <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                        <button class=" px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            Subscribe
                        </button>
                    </div>

                    <div className="m-4 flex justify-center lg:justify-start">
                        <div className="m-3 lg:m-4">
                            <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>
                            <div class="flex flex-col items-start mt-2 space-y-2">
                                <a href="/home" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                                <a href="/live" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Live</a>
                                <a href="/about" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                                {/* <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a> */}
                            </div>
                        </div>
                        <div className="m-3 lg:m-4">
                            <p class="font-semibold text-gray-800 dark:text-white">Features</p>
                            <div class="flex flex-col items-start mt-2 space-y-2">
                                <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 ">Live News</p>
                                <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 ">Latest Updates</p>
                                {/* <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a> */}
                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </div>
    )
}
export default Footer;