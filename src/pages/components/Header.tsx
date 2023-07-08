import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let Links =[
        {name:"Home",link:"#home"},
        {name:"About Us",link:"#about"},
        {name:"Services",link:"#services"},
        {name:"Contact Us",link:"#contact"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-16 px-16'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <span>FinEdge</span>
                </div>
                <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                            <a href={link.link} className='text-gray-800 hover:text-orange-400 duration-500'>{link.name}</a>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;