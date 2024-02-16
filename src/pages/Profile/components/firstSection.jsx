import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoGoogleplus } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";
import './firstSection.sass'
import about1 from "../../../assets/img/item-cart-01.jpg";

export const FirstSection = () => {
    return (
        <>
        {/* contact page */}
            <div className="bg-about h-[30vh] flex justify-center items-center ">
                <h1 className="font-bold text-5xl text-center   text-white">Contact</h1>
            </div>
            <div className=" h-fit flex justify-center items-center  ">
                <div className=" w-[80%] h-fit flex gap-6 py-7">

                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212718.0489908319!2d-7.897624969482391!3d33.58663108108031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7ccfd41592471%3A0xb86b76b40ca42d9e!2sMcDonald&#39;s%20A%C3%AFn%20Seba%C3%A2!5e0!3m2!1sen!2sus!4v1707926340660!5m2!1sen!2sus" width="600" height="610" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="w-[50%] px-4">
                        <h2 className="text-2xl font-mono">Send us your message</h2>

                    <form action="" className='flex flex-wrap gap-5 text-gray-500 py-8'>
                        <input type="text" className='w-[100%] py-3' placeholder='Name' />
                        <input type="text" className='w-[100%] py-3' placeholder='Email' />
                        <input type="text" className='w-[100%] py-3' placeholder='Phone' />
                        <textarea name="" id="" className='w-[100%] py-2' cols="30" rows="10"></textarea>
                        <div className="py-3">

                    <button className="text-white bg-black rounded-full py-2  text-center w-[10vw]">Send</button>
                    </div>
                    </form>

                    </div>
                </div>

            </div>
            
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

                    <input type="text" placeholder="Email Address" className="border-none  bg-transparent"/>
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
    )
}
