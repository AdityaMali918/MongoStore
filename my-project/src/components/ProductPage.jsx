

import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as Realm from "realm-web";

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const REAL_APP_ID = "products-ndbcu";
            const app = new Realm.App({ id: REAL_APP_ID });
            const credentials = Realm.Credentials.anonymous();

            try {
                const user = await app.logIn(credentials);

                const data = await user.functions.getOneProduct(parseInt(id));
                console.log(data.result);
                setProduct(data.result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Invoke the async function directly

    }, [id]);

    const addCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const subtractCount = () => {
        setCount((prevCount) => Math.max(1, prevCount - 1));
    };

    return (
        <>
            <div className='flex flex-col p-2 justify-center h-screen md:flex-row mt-5' >
                {product.map((p) => (
                    <>
                        <div className='h-fit w-full md:w-[650px] rounded-3xl  '>
                            <img className=' w-full h-42 md:p-12 md:h-[500px]  rounded-xlm-3  ' src={p.image} alt="" />
                        </div>

                        <div className='flex flex-col justify-end pt-16 pl-12 w-1/3 h-1/3'>
                            <div className='border-b-2 border-black'>
                                <h2 className='pb-2 font-bold text-3xl'>{p.name}</h2>
                                <h4 className='text-xl pb-4'>$ {p.price}</h4>
                            </div>
                            <div>
                                <h1>Count</h1>
                                <div className='flex'>
                                    <span className='p-3 cursor-pointer' onClick={subtractCount} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        
                                    </span>
                                    <span className='p-3'>
                                        {count}
                                    </span>
                                    <span className='p-3 cursor-pointer' onClick={addCount} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className='pt-3 pl-3'>
                                <button className='p-3 bg-green-400 hover:bg-green-600 text-white px-[100px] text-center'>Add To Cart</button>
                                </div>
                                
                            </div>
                        </div>
                    </>
                ))}

            </div>
        </>
    );
}

export default ProductPage;
