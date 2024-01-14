import React, { useState,useContext } from 'react';
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';

function UserPage() {
    const { user,setUser } = useContext(UserContext);
    const handleClick=()=>{
        setUser(null);
    }

    if(!user){
        return <Navigate to="/login" />
    }
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
        <div className='p-8'>
            <h1 className='p-5 bg-green-400 w-full text-center rounded-2xl text-white'>My Profile</h1>
            <p className='pb-2 pt-5'>Logged in as : {user.name}</p>
            <p>email : {user.email}</p>
        </div>
        <div>
            <button onClick={handleClick} className='px-[180px] py-2 rounded-full hover:bg-green-500 text-white bg-green-400'>Logout</button>
        </div>
    </div>
    </>
  )
}

export default UserPage