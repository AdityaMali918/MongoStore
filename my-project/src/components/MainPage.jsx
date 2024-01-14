// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function
//     () {
//     return (
//         <>
//             <div className='h-[590px]  rounded-md overflow-hidden bg-cover bg-center relative' >
//                 <img className='absolute mt-3 mb-2 z-0 h-auto w-screen object-cover' src="/images/cplusplus.jpg" alt="" />
//             </div>
//             <div className='bg-gray -900 bg-opacity-60 flex items-center  absolute w-full z-10 top-0 h-screen'>
//                 <div className='px-10 max-w-xl'>
//                     <h2 className=' text-2xl mb-2 text-green-500'>Tech Shirts</h2>
//                     <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque et autem libero beatae, nulla, quas sint sed expedita ipsum commodi ratione, labore accusamus.</p>
//                     <Link to={'/shop'} className="w-25 h-2 py-5 px-10 bottom-0 rounded-2xl bg-green-500 text-white text-sm uppercase font-medium hover:bg-green-300 focus:outline-none">
//                         <button className='mt-14'>
//                             Shop
//                         </button></Link>
//                 </div>
//             </div>
//         </>
//     )
// }

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className='h-[605px] rounded-md overflow-hidden bg-cover bg-center relative '>
                <img
                    className='absolute pt-4 mb-2 z-0 h-full w-full object-cover'
                    src="/images/cplusplus.jpg"
                    alt=""
                />
            </div>
            <div className='bg-gray-900 bg-opacity-60 flex items-center absolute w-full h-[590px] z-10 top-20 mt-5 p-0 '>
                <div className='px-10 max-w-xl'>
                    <h2 className='text-2xl mb-2 text-green-500'>Tech Shirts</h2>
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
                        itaque et autem libero beatae, nulla, quas sint sed expedita ipsum commodi
                        ratione, labore accusamus.
                    </p>
                    <Link
                        to={'/shop'}
                        className='w-25 h-2 py-5 px-10 bottom-0 rounded-2xl bg-green-500 text-white text-sm uppercase font-medium hover:bg-green-300 focus:outline-none'
                    >
                        <button className='mt-14'>Shop</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
