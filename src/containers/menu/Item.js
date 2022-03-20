import React from 'react'
import { useNavigate } from 'react-router-dom';


const Item = ({title, linkUrl, imageUrl}) => {
    const navigate = useNavigate();

  return (
    <div 
        className='overflow-hidden h-80 lg:h-96 min-w-[30%] border flex justify-center align-center flex-auto cursor-pointer'
        onClick={() => navigate(`/collection/${linkUrl}`)}
    >
        <div 
            className='w-full h-full bg-center bg-cover hover:scale-110 hover:transition-transform hover:duration-[2500ms]' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />  
        <div className='absolute self-center flex align-center justify-center flex-col bg-slate-200 border h-24 px-6 opacity-75 hover:opacity-90' >
            <h1 className='font-bold mb-2 text-xl'>{title.toUpperCase()}</h1>
            <span className='font-light text-base'>SHOP NOW</span>
        </div>
    </div>
  )
}

export default Item