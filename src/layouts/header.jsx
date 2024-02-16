import React from 'react';
import "./header.sass"
import logo from '../assets/img/pngegg (2).png'
import { Link } from 'react-router-dom';
import { GoHeart } from "react-icons/go";
import { TiSocialFacebook } from "react-icons/ti";
import { SlBasket } from "react-icons/sl";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoGoogleplus } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";

export const Header = () => {
    return (
        <>


            {/* <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <span class="self-center text-2xl  whitespace-nowrap dark:text-white font-bold font-mono">w i s s .</span>
                    </a>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <Link to={'/market'}> 
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shop </a>
                                
                                </Link>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}





                <div className='h-[5vh] bg-[#f5f5f5]  text-[#888888] flex free'>
                    <div className='flex gap-4 text-xl px-7 py-2'>
                    <TiSocialFacebook />
                    <TiSocialPinterestCircular />
                    <SlSocialTwitter />
                    <SlSocialInstagram />
                    <IoLogoGoogleplus />

                    </div>
                    <div className=' w-[73%] flex justify-center'>

                    <div className='font-mono py-2 '>
                    Free shipping for standard order over $100
                    </div>
                    </div>

                </div>
            <Navbar fluid rounded className='bg-white shadow-lg  font-mono py-5 h-[10vh]'>
                <Navbar.Brand href="https://flowbite-react.com" className='px-5'>

                    <span className="self-center whitespace-nowrap text-3xl font-bold  dark:text-white">w i s s .</span>
                </Navbar.Brand>
                <div className="flex md:order-2 text-2xl gap-4 cursor-pointer w-[10vw]  text-gray-500  justify-center">
                <GoHeart />
                <div className='border-l-2 px-5'>

                <SlBasket className='cursor-pointer'  />
                </div>
                    <Navbar.Toggle />
                </div>
                <div className=' w-[40vw] text-5xl flex justify-center gap-2  '>

                <Navbar.Collapse className='  w-[100vw] flex justify-between'>
                    <Navbar.Link href="#"  active>
                        <Link to={'/home'} className='text-xl'>Home</Link>
                        
                    </Navbar.Link>
                    <Navbar.Link href="#" className='text-xl'>
                    <Link to={'/market'} className='text-xl'>About</Link>
                    
                    </Navbar.Link>
                    <Navbar.Link href="#" className='text-xl'>
                    <Link to={'/login'} className='text-xl'>Shop</Link>
                    
                    </Navbar.Link>
                    <Navbar.Link href="#" className='text-xl'>
                    <Link to={'/profile'}>
                    Contact
                    </Link>
                    </Navbar.Link>
                </Navbar.Collapse>
                    </div>
            </Navbar>
            



        </>
    );
};

