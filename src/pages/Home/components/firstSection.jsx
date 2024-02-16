// import { FirstSection } from './components/firstSection';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoGoogleplus } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";
import { Carousel } from 'flowbite-react';
import './firstSection.sass'
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import carousel1 from "../../../assets/img/master-slide-01.jpg"
export const FirstSection = () => {

    console.log();
    return (
        <>
            {/* carousel */}
            <div className=' h-screen  '>

                <div className="h-fit  sm:h-64 xl:h-70 2xl:h-[80%]">
                    <Carousel pauseOnHover>
                        <div className='bg-carousel h-[100%] w-[100%] flex flex-col justify-content-center align-items-center   '>

                            <div className=' font-mono w-[100%] h-[100%] mt-52 justify-content-center  align-items-center   text-center font-bold text-white py-4 flex flex-col gap-5' >
                                <h3 className='text-2xl'>hello lorem</h3>
                                <h1 className='text-5xl'>Lorem ipsum dolor </h1>
                                <div className='w-[100%] text-center'>

                                    <button className='bg-white rounded-full text-xl w-[10%] text-gray-400 px-3 py-1'>Shop Now</button>

                                </div>
                            </div>
                        </div>
                        <div className='bg-carousel1 bg-cover h-[100%] w-[100%] flex flex-col justify-content-center align-items-center   '>

                            <div className=' font-mono w-[100%] h-[100%] mt-52 justify-content-center  align-items-center   text-center font-bold text-white py-4 flex flex-col gap-5' >
                                <h3 className='text-2xl'>hello lorem</h3>
                                <h1 className='text-5xl'>Lorem ipsum dolor </h1>
                                <div className='w-[100%] text-center'>

                                    <button className='bg-white rounded-full py-1 text-xl w-[10%] text-gray-400 px-3'>Shop Now</button>

                                </div>
                            </div>
                        </div>
                        <div className='bg-carousel2 bg-cover h-[100%] w-[100%] flex flex-col justify-content-center align-items-center   '>

                            <div className=' font-mono w-[100%] h-[100%] mt-52 justify-content-center  align-items-center   text-center font-bold text-white py-4 flex flex-col gap-5' >
                                <h3 className='text-2xl'>hello lorem</h3>
                                <h1 className='text-5xl'>Lorem ipsum dolor </h1>
                                <div className='w-[100%] text-center'>

                                    <button className='bg-white rounded-full text-xl w-[10%] py-1 text-gray-400 px-3'>Shop Now</button>

                                </div>
                            </div>
                        </div>
                        <div className='bg-carousel3 bg-cover h-[100%] w-[100%] flex flex-col justify-content-center align-items-center   '>

                            <div className=' font-mono w-[100%] h-[100%] mt-52 justify-content-center  align-items-center   text-center font-bold text-white py-4 flex flex-col gap-5' >
                                <h3 className='text-2xl'>hello lorem</h3>
                                <h1 className='text-5xl'>Lorem ipsum dolor </h1>
                                <div className='w-[100%] text-center'>

                                    <button className='bg-white rounded-full py-1 text-xl w-[10%] text-gray-400 px-3'>Shop Now</button>

                                </div>
                            </div>
                        </div>
                        <div className='bg-carousel4 bg-cover h-[100%] w-[100%] flex flex-col justify-content-center align-items-center   '>

                            <div className=' font-mono w-[100%] h-[100%] mt-52 justify-content-center  align-items-center   text-center font-bold text-white py-4 flex flex-col gap-5' >
                                <h3 className='text-2xl'>hello lorem</h3>
                                <h1 className='text-5xl'>Lorem ipsum dolor </h1>
                                <div className='w-[100%] text-center'>

                                    <button className='bg-white rounded-xl text-2xl w-[10%] text-gray-400 px-3'>hello</button>

                                    {/* <img src={carousel1} className='h-[100%]'  alt="..." /> */}
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
            {/* cards */}
            <div className=' h-fit  grid'>
                <div className='flex flex-wrap gap-3  justify-center items-center'>
                    <div className='w-[25%] flex flex-col gap-2'>
                        <div className='overflow-hidden relative'>
                            <div className='bg-item1  h-[45vh] bg-cover transition-all  hover:scale-110'>
                            </div>
                            <button className='bg-slate-50 w-[30%]  py-2 absolute bottom-8 left-32'>wissuu </button>
                        </div>
                        <div className='overflow-hidden relative'>

                            <div className='bg-item2 h-[50vh] bg-cover transition-all  hover:scale-110'></div>
                            <button className='bg-slate-50 w-[30%]  py-2 absolute bottom-8 left-32'>wissuu </button>

                        </div>
                    </div>
                    <div className='w-[25%] flex flex-col gap-2'>
                        <div className='overflow-hidden relative'>

                            <div className='bg-item3 h-[30vh] bg-cover transition-all  hover:scale-110'></div>
                            <button className='bg-slate-50 w-[30%]  py-2 absolute bottom-8 left-32'>wissuu </button>

                        </div>
                        <div className='overflow-hidden relative'>

                            <div className='bg-item4 h-[65vh] bg-cover transition-all  hover:scale-110'></div>
                            <button className='bg-slate-50 w-[30%]  py-2 absolute bottom-8 left-32'>wissuu </button>

                        </div>
                    </div>
                    <div className='w-[25%] flex flex-col gap-2'>
                        <div className='overflow-hidden relative'>

                            <div className='bg-item5 h-[45vh] bg-cover transition-all  hover:scale-110'></div>
                            <button className='bg-slate-50 w-[30%]  py-2 absolute bottom-8 left-32'>wissuu </button>

                        </div>
                        <div className='overflow-hidden relative'>

                            <div className='bg-item6 h-[50vh] bg-cover transition-all  hover:scale-110'></div>
                            <button className='bg-slate-50 w-[30%]  py-2 absolute bottom-8 left-32'>wissuu </button>

                        </div>
                    </div>


                </div>


            </div>
            {/* products nav tab */}
            <h3 className='text-center font-bold text-3xl py-3'>FEATURED PRODUCTS</h3>
            <div className='bg-slate-50 h-[80vh] flex flex-col  items-center'>
                <Tabs aria-label="Tabs with icons" style="underline" className="flex items-center text-gray-400">
                    <Tabs.Item active title="Women" icon={HiUserCircle} >
                        <div className="flex justify-center items-center w-[100vw] p-7 gap-5">
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs1">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs2">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs3">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-4 00">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs4">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Mans" icon={MdDashboard}>
                        <div className="flex justify-center items-center w-[100vw] p-7 gap-5">
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs2">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs3">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs1">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-4 00">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs4">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="BOth" icon={HiAdjustments}>
                        <div className="flex justify-center items-center w-[100vw] p-7 gap-5">
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs1">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs2">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs3">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-4 00">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs4">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Childs" icon={HiClipboardList}>
                        <div className="flex justify-center items-center w-[100vw] p-7 gap-5">
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs1">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs2">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs3">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-4 00">$20.00</p>
                            </div>
                            <div>
                                <div className="bg-cover h-[50vh] w-[20vw] bg-tabs4">

                                </div>
                                <p className="text-gray-400 py-3">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-gray-400">$20.00</p>
                            </div>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item disabled title="Disabled">
                        Disabled content
                    </Tabs.Item>
                </Tabs>
            </div>
            {/* next section glasses */}
            <div className="bg-slate-50 h-fit flex justify-center items-center py-7 ">
                <div className="bg-gray-400 h-fit py-8  w-[100%] flex justify-center items-center ">

                    <div className=" w-[70%] flex justify-center items-center gap-4 overflow-hidden">


                        <div className="bg-glasses.girl h-[60vh] w-[50%] bg-cover relative transition-all  hover:scale-110 ">
                            <div className="text-white absolute bottom-28 left-24 text-center">
                                <h2 className="text-xl font-bold">The beauty</h2>
                                <h2 className="text-6xl font-bold">LOOKBOOK</h2>
                                <p>View collection </p>
                            </div>
                        </div>
                        <div className="bg-glasses h-[60vh] w-[50%] bg-cover relative transition-all  hover:scale-110">
                            <div className="text-gray-400 gap-3 flex flex-col absolute bottom-36 text-center left-36">
                                <p >Lorem ipsum dolor sit amet. tyfhh</p>
                                <p >$20.00</p>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* our blogs */}
            <h3 className='text-center font-bold text-3xl'>OUR BLOGS</h3>
            <div className=" h-[80vh] flex gap-7  py-9 justify-center items-start ">
                <div className="flex flex-col">
                    <div className="overflow-hidden">

                        <div className="bg-blog1 h-[40vh] w-[25vw] bg-cover transition-all  hover:scale-110 "> </div>
                    </div>
                    <h3 className="w-[25vw] font-bold">Lorem ipsum dolor sit amet consectetur adipisic elit. Architecto.</h3>
                    <p className="py-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                    <p className="w-[25vw] text-gray-400 py-2">Ocia illum possimus eaque assumenda repudiandae  aperiam quos accusantium harum. Maxime.</p>

                </div>
                <div className="flex flex-col">
                    <div className="overflow-hidden">

                        <div className="bg-blog2 h-[40vh] w-[25vw] bg-cover transition-all  hover:scale-110"> </div>
                    </div>
                    <h3 className="w-[25vw] font-bold">Lorem ipsum dolor sit amet consectetur adipisic elit. Architecto.</h3>
                    <p className="py-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                    <p className="w-[25vw] text-gray-400 py-2">Ocia illum possimus eaque assumenda repudiandae  aperiam quos accusantium harum. Maxime.</p>


                </div>
                <div className="flex flex-col">
                    <div className="overflow-hidden">

                        <div className="bg-blog3 h-[40vh] w-[25vw] bg-cover transition-all  hover:scale-110"> </div>
                    </div>
                    <h3 className="w-[25vw] font-bold">Lorem ipsum dolor sit amet consectetur adipisic elit. Architecto.</h3>
                    <p className="py-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                    <p className="w-[25vw] text-gray-400 py-2">Ocia illum possimus eaque assumenda repudiandae  aperiam quos accusantium harum. Maxime.</p>


                </div>

            </div>
            {/* follow */}
            <h3 className='text-center font-bold text-3xl'>@FOLLOW US ON INSTAGRAM</h3>
            <div className="flex h-[30vh] justify-center items-center gap-32">
                <div className="text-center text-gray-500">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="text-center text-gray-500">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="text-center text-gray-500">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                </div>

            </div>



            {/* footer */}
            <div className='bg-[#f5f5f5] h-[50vh] flex  justify-center p-5'>
                <div className='flex bg-yellow justify-between w-[90%] '>
                    <div className='gap-7 w-[30%] flex flex-col py-6 '> <h3 className='font-bold text-xl'>Get in touch</h3>
                        <p className='w-[100%] text-gray-500'> aspernatur dolorem distinctio repellendus sit fugit vel excepturi libero consequuntur.</p>
                        <div className='flex gap-4 text-xl  py-2 text-gray-500'>
                            <TiSocialFacebook />
                            <TiSocialPinterestCircular />
                            <SlSocialTwitter />
                            <SlSocialInstagram />
                            <IoLogoGoogleplus />

                        </div>
                    </div>

                    <div className='w-[10%]  flex flex-col py-6'> <h3 className='font-bold text-xl'>Categories</h3>
                        <div className="flex flex-col gap-6 py-6 text-gray-500">
                            <p>woman</p>
                            <p>man</p>
                            <p>boy</p>
                            <p>girlss</p>
                        </div>
                    </div>
                    <div className='w-[10%]  flex flex-col py-6'> <h3 className='font-bold text-xl'>Links</h3>
                        <div className="flex flex-col gap-6 py-6 text-gray-500">
                            <p>woman</p>
                            <p>man</p>
                            <p>boy</p>
                            <p>girlss</p>
                        </div>
                    </div><div className='w-[10%]  flex flex-col py-6'> <h3 className='font-bold text-xl'>Help</h3>
                        <div className="flex flex-col gap-6 py-6 text-gray-500">
                            <p>woman</p>
                            <p>man</p>
                            <p>boy</p>
                            <p>girlss</p>
                        </div>
                    </div>
                    <div className='w-[30%]  flex flex-col py-6'> <h3 className='font-bold text-xl'>NewsLeterrrrr</h3>
                        <div className="border-b-2 py-1">

                            <input type="text" placeholder="Email Address" className="border-none  bg-transparent" />
                        </div>
                        <div className="py-3">

                            <button className="text-white bg-black rounded-full py-2 px-3 w-[50%]">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    );
}
