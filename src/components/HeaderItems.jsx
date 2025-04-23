import React from 'react'

function HeaderItems({name,Icon}) {
  return (
    <div className='text-black flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline 
    underline-offset-8'>
    <Icon/>
    <h2>{name}</h2>
    </div>
  )
}

export default HeaderItems