import "./section.sass"
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoGoogleplus } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";
import picture from "../../../assets/img/Freepik_ Download Free Videos, Vectors, Photos, and PSD.jpeg";
import about1 from "../../../assets/img/item-cart-01.jpg";
export const Section = ({ data }) => {



    return (
        <>

            <div className="bg-about h-[30vh] flex justify-center items-center ">
                <h1 className="font-bold text-6xl text-center   text-white">About</h1>
            </div>
            <div className=" h-fit flex justify-center items-center p-7 ">
                <div className=" w-[80%] h-fit flex py-5 gap-9">

                    <div>

                        <img src={about1} className="w-[60vw]" alt="" />
                    </div>
                    <div className="w-[90vw]">
                        <h2 className="text-2xl font-mono">hello wissu</h2>
                        <p className="w-[90%] py-6 text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque saepe eveniet ad iure commodi nihil facere quibusdam quas perferendis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi reiciendis cum repellendus cupiditate vel veniam quam ducimus expedita corporis incidunt et quae vero asperiores, nihil atque eum, officiis sequi!
                            <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, eos odit! Voluptas voluptate est magni, sint voluptates repellendus doloremque molestias!
                        </p>
                        <div className="border-l-4">

                            <p className="w-[90%] py-4 text-gray-400 px-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis quidem aliquid veniam veritatis iste? Incidunt non pariatur veritatis a, amet laudantium fugit consequuntur nulla exercitationem dignissimos dolorum voluptatum voluptas.</p>
                            <h3 className="text-black  px-4">  wissu..</h3>
                        </div>

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
    )
}
