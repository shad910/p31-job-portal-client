import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.png';
import team2 from '../../assets/team/team2.png';


const Banner = () => {
    return (
        <div className=" w-11/12 mx-auto  min-h-96">
            <div className="flex flex-col lg:flex-row">

                <section className="flex-1  py-10 px-4 md:px-10">
                    <div className="max-w-4xl mx-auto ">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Find Jobs,<br />
                            <motion.span
                                animate={{
                                    color: ["#ff5733", "#4fc751", "#57bad0", "#bf7fe1", "#e17fbf", "#e56868"],
                                    transition: { duration: 5, repeat: Infinity }
                                }}
                                className="text-gray-900">Hire Creatives</motion.span>
                        </h1>
                        <p className="mt-4 text-gray-500 text-base">
                            Each month, more than 3 million job seekers turn to our website in their search for work,
                            making over 140,000 applications every single day.
                        </p>

                        <div className="mt-8 flex  gap-4 flex-wrap">
                            <button className="btn  btn-primary px-6">Get Started</button>
                            <button className="btn btn-outline px-6">Learn more</button>
                        </div>

                        <div className="mt-12 text-left">
                            <p className="text-gray-400 text-sm mb-3">Trusted by</p>
                            <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                                <img src="https://i.ibb.co/9ktRGF9F/google.png" alt="Google" />

                                <img src="https://i.ibb.co/hxTbLj3n/microsoft.png" alt="Microsoft" />

                                <img src="https://i.ibb.co/XxXZFQVy/facebook.png" alt="Facebook" />

                                <img src="https://i.ibb.co/B5yzJr54/X.png" alt="X" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex-1 hidden md:flex items-center justify-center relative'>
                    <div>
                        <motion.img
                            src={team1}
                            animate={{
                                y: [100, 160, 100],

                                transition: { duration: 4, repeat: Infinity }
                            }}
                            className="max-w-xs rounded-t-[40px] rounded-r-[30px] border-blue-400 border-l-8 border-b-8 shadow-2xl"
                        />
                        <motion.img
                            src={team2}
                            animate={{
                                x: [100, 160, 100],

                                transition: { duration: 8, delay:2, repeat: Infinity }
                            }}
                            className="max-w-xs rounded-t-[40px] rounded-r-[30px] border-blue-400 border-l-8 border-b-8 shadow-2xl"
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Banner;