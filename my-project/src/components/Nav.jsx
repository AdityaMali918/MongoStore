import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Nav() {
    const { user } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="md:w-1/3 md:flex md:justify-end">
            {/* Desktop navigation */}
            <div className="hidden md:flex justify-between w-full gap-2">
                <Link to={'/'} className=" text-black hover:text-green-300 hover:underline cursor-pointer">Home</Link>
                <Link to={'/shop'} className=" text-black hover:text-green-300 hover:underline cursor-pointer">Shop</Link>
                <Link className=" text-black hover:text-green-300 hover:underline cursor-pointer">Contact</Link>
                <Link to={user?'/user':'login'} className="  hover:text-green-400 cursor-pointer bg-slate-300 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                </Link>
            </div>

            {/* Mobile navigation */}
            <div className="md:hidden">
                <button onClick={toggleNavbar} className='absolute right-3 top-5 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>

                </button>
                {isOpen && (
                    <div className="flex flex-col w-screen items-center  rounded-md justify-center  text-black pr-14">
                        <Link to={'/'} className=" text-black hover:text-green-300 hover:underline cursor-pointer p-1">Home</Link>
                        <Link to={'/shop'} className=" text-black hover:text-green-300 hover:underline cursor-pointer p-1">Shop</Link>
                        <Link className=" text-black hover:text-green-300 hover:underline cursor-pointer p-1">Contact</Link>
                        <Link to={user?'/user':'login'}  className=" text-black hover:text-green-300 hover:underline cursor-pointer p-1">User</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
