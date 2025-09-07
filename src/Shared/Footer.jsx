import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='grid grid-cols-1 md:grid-cols-4 justify-self-center gap-6 md:gap-20 p-6 bg-base-300 '>
            <aside>
                <Link to="/" className='flex items-center gap-0.5 mb-2'>
                    <img className='w-6' src="https://i.ibb.co.com/KjYLPHzm/code.png" alt="logo"  />
                    <span className="text-xl font-bold">
                        <span className='text-blue-400'>
                            CAREER-</span>CODE
                    </span>
                </Link>
                <p className='text-xs text-gray-500'>
                    Offering reliable service since 2005.<br/> Connect with compatible roommates based on location, budget, and lifestyle.Sign up and sync today!
                </p>
            </aside>
            <aside>
                <h6 className="footer-title">Legal</h6>
                <div className='flex flex-col text-sm'>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </aside>
            <aside>
                <h6 className="footer-title">Contact Us</h6>
                <div className='flex flex-col text-sm'>
                    <a className="link link-hover">Email</a>
                    <a className="link link-hover">Phone</a>
                    <a className="link link-hover">Help Line</a>
                </div>
            </aside>
            <aside >
                 <h6 className="footer-title">Follow Us</h6>
                <div className='flex gap-2.5'>
                   
                    <a href="https://www.facebook.com/shadshs91">
                        <img className='w-[25px]' src="https://i.ibb.co.com/jk6xD7Sk/facebook-1.png" alt="" />
                    </a>

                    <a href="https://www.instagram.com/shadshs91/">
                        <img className='w-[25px]' src="https://i.ibb.co.com/m5RpCK7K/instagram.png" alt="" />
                    </a>

                    <a href="https://x.com/shadshs91">
                        <img className='w-[25px]' src="https://i.ibb.co.com/93TS9HqW/twitter-1.png" alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/md-sahadot-hossen-shad-838251345/">
                        <img className='w-[25px]' src="https://i.ibb.co.com/mL1Gc9g/linkedin.png" alt="" />
                    </a>

                    <a href="https://github.com/shad910">
                        <img className='w-[25px] ' src="https://i.ibb.co.com/N61tpTrW/github.png" alt="" />
                    </a>
                  
                </div>
            </aside>
        </footer>
    );
};

export default Footer;