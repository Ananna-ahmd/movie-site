import React from 'react'
import logo from './../assets/images/Disney+_logo.svg.png'
import { HiHome,  HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus,HiSearch, HiDotsVertical } from "react-icons/hi";
import HeaderItems from './HeaderItems';
import user from './../assets/images/man-user-svgrepo-com.svg'

function Header() {
    const menu = [
        {
            name: 'Home',
            icon: HiHome
        },
        {
            name: 'Search',
            icon: HiSearch
        },
        {
            name: 'Watch List',
            icon: HiPlus
        },
        {
            name: 'Orginals',
            icon: HiStar
        },
        {
            name: 'Movies',
            icon: HiPlayCircle
        },
        {
            name: 'TV Series',
            icon: HiTv
        },
    ]
    return (
        <div className='flex items-center gap-8 justify-between'>
            <div className='flex gap-8 items-center'>
            <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
            <div className='flex gap-8'>
            {menu.map((item) => (
                <HeaderItems name={item.name} Icon={item.icon} />
            )
            
            )}
            </div>
            </div>
            <img src={user} className='w-[40px] rounded-b-full'/>
            
        </div>
    )

}



export default Header