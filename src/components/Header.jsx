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
            <div className=' hidden  md:flex  gap-8'>
            {menu.map((item) => (
                <HeaderItems name={item.name} Icon={item.icon} />
            )
            )}
            </div>
            <div className='flex md:hidden gap-5'>
            {menu.map((item,index) =>index<3 && (
                <HeaderItems name={''} Icon={item.icon} />
            )
            )}
            <div className='md:hidden'>
            <HeaderItems name={''} Icon={HiDotsVertical} />
            <div className='absolute mt-3 bg-blue-400 border-1px p-3'>
            {menu.map((item,index) =>index>3 && (
                <HeaderItems name={item.name} Icon={item.icon} />
            )
            )}
            </div>

            </div>
            </div>
            </div>
            <img src={user} className='w-[40px] rounded-b-full'/>
            
        </div>
    )

}



export default Header