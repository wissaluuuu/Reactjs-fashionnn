import React, { useContext, useEffect, useState } from 'react';
import "./section.sass"
import { MyContext } from '../../../utils/contextProvider';
import { TiShoppingCart, TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoGoogleplus } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

export const Section = () => {
    const [myProduct, setProduct] = useContext(MyContext);
    const [panier, setpanier] = useState([]);
    const [random, setRandom] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { addItem } = useCart();
    const categories = ['Best seller', 'OLD', 'SALE', 'NEW'];
    const {
        isEmpty,
        totalUniqueItems,
        items,
        Price,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const RandomProducts = () => {
        const shuffledProducts = myProduct.sort(() => 0.5 - Math.random());
        setRandom(shuffledProducts.slice(0, 5));
    };
    const filterProductsByCategory = (category) => {
        setSelectedCategory(category);
    };


    const filter = selectedCategory ? myProduct.filter(product => product.Catégories === selectedCategory) : myProduct;


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
                        {categories.map(category => (
                            <p key={category} className={`py-2 ${selectedCategory === category ? 'font-bold' : ''}`} onClick={() => filterProductsByCategory(category)}>{category}</p>
                        ))}
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
                        filter.map((element, index) =>

                            <div className=' h-fit w-72 group flex flex-col'>
                                <div class="group w-72 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                    <div class="h-96 w-72">
                                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.image} alt="" />
                                    </div>
                                    <div class=" w-72 absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div key={element.id} class=" w-72 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                        <button key={element.id} class="rounded-full  py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-gray-900 hover:bg-pink-300 hover:text-white duration-300"
                                            onClick={() => addItem(element)}
                                        >ADD TO CART</button>
                                    </div>
                                </div>
                                <Link to={`/settings/${element.id}`} >
                                    <h1>{element.Name}</h1>
                                </Link>
                                <h1>{element.price}</h1>
                            </div>
                        )
                    }
                </div>

            </div>

        </>
    );
};
