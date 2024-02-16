import React, { useContext } from 'react';
import "./section.sass"
import { MyContext } from '../../../utils/contextProvider';
import { useParams } from 'react-router-dom';
import carousel1 from "../../../assets/img/master-slide-01.jpg"

export const Section = () => {
    const { id } = useParams();
    const [myProduct, setProduct] = useContext(MyContext);
    const filteredProduct = myProduct.filter((product) => product.id == id);
    console.log(filteredProduct);

    return (
        <>
            

            <div className='h-screen  flex gap-6 p-9 justify-center'>
                {
                    filteredProduct.map((element, index) =>
                        <>

                            <div className='bg-white w-[40%] h-[80vh] flex gap-2 '>
                                <div className=' w-[18%]  h-[85vh] flex flex-col gap-2'>
                                    <img src={element.image} className='h-[100vh]' alt="" />
                                    <img src={element.image} className='h-[100vh]' alt="" />
                                    <img src={element.image} className='h-[100vh]' alt="" />
                                    <img src={element.image} className='h-[100vh]' alt="" />
                                </div>
                                <div className='bg-blue-400 w-[82%] '>
                                    {/* img */}
                                    <img src={element.image} alt="" />
                                </div>
                            </div>
                            <div className='bg-white w-[40%] h-[80vh] flex flex-col font-serif'>
                                <h1 className='text-4xl'>{element.Name}</h1>
                                <p className='text-4xl'>{element.Price}</p>
                                <p className='py-5 text-gray-500'>{element.Decription}</p>
                                <div className='py-5 flex gap-2 '>
                                    <div className='py-2 hover:bg-red-500 px-4 border '> S</div>
                                    <div className='py-2 hover:bg-red-500 px-4 border '> M</div>
                                    <div className='py-2 hover:bg-red-500 px-4 border '> L</div>
                                    <div className='py-2 hover:bg-red-500 px-4 border '> XL</div>
                                </div>
                                <div className='py-4 flex gap-6'>
                                <button className='bg-black text-white py-2 px-4 rounded-full'>Add to card </button>
                                </div>
                                <div className='flex text-gray-600 gap-28 border-b-2 py-8'>
                                    <p> Brand :{element.Brand}</p>
                                    <p> Catégories :{element.Name}</p>
                                </div>
                                <h2>Description</h2>
                                <p className='py-5 text-gray-500' >{element.logDescrition}</p>
                            </div>

                        </>
                    )
                }
            </div>



        </>
    );
};

