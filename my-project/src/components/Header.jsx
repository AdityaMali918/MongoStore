import React from 'react'
import Logo from './Logo'
import Nav from './Nav'


export default function Header() {
  return (
    <div className='bg-gray-100  rounded-2xl sticky top-0 z-[20] flex-wrap mx-auto flex w-full items-center justify-between p-4'>
    <Logo/>
    <Nav/>
   
   </div>
  )
}

