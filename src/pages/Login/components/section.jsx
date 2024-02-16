import React, { useContext, useEffect, useState } from 'react';
import "./section.sass"
import { MyContext } from '../../../utils/contextProvider';
import { TiShoppingCart, TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoGoogleplus } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from 'react-router-dom';

export const Section = () => {
    const [myProduct, setProduct] = useContext(MyContext);
    const [panier, setpanier] = useState([]);
    const [random, setRandom] = useState([]);
    
    const RandomProducts = () => {
        const shuffledProducts = myProduct.sort(() => 0.5 - Math.random()); 
        setRandom(shuffledProducts.slice(0, 5));
    };

    console.log(myProduct);
    return (
        <>
            {/* shop */}
            <div className="bg-shop h-[30vh] flex justify-center items-center ">
                <h1 className="font-bold text-6xl text-center   text-white">products</h1>
            </div>

            <div className='h-fit flex gap-4' >
                {/* side bar filter */}
                <div className=' w-[25%] h-fit flex flex-col items-center p-11  '>

                    <h2 className='font-extrabold text-2xl'>Catégories</h2>
                    <div className='text-start mr-11 text-gray-400'>

                        <p className='py-2 '>Best seller</p>
                        <p className='py-2 '>Featured</p>
                        <p className='py-2 '>Men</p>
                        <p className='py-2 '>Women</p>
                    </div>
                    <h2 className='font-extrabold text-2xl  w-[8vw] py-2'>Size</h2>
                    <div className='text-start mr-11  text-gray-400 flex flex-col w-[5vw]'>

                        <div className='py-3'><input type="checkbox" /> <label htmlFor=""> XS</label></div>
                        <div className='py-3'> <input type="checkbox" /> <label htmlFor=""> S</label></div>
                        <div className='py-3'><input type="checkbox" /> <label htmlFor=""> M</label></div>
                        <div className='py-3'><input type="checkbox" /> <label htmlFor=""> L</label></div>
                        <div className='py-3'><input type="checkbox" /> <label htmlFor=""> XL</label></div>
                    </div>
                </div>
                {/* products */}
                
                <div className=' w-[80%] h-fit  text-gray-500 flex flex-wrap gap-6 p-10 '>

                    {
                        myProduct.map((element, index) =>
                            <div key={index} className='flex flex-col w-[20vw] h-fit'>

                                <img src={element.image} alt="" className='w-[100%] h-fit min-h-[55vh] transition-opacity duration-300 hover:opacity-75' />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                </div>
                                <Link to={`/settings/${element.id}`} >
                                    <h1>{element.Name}</h1>
                                </Link>
                                <h1>{element.Price}</h1>
                            </div>
                        )
                    }
                </div>

            </div>
           
        </>
    );
};
