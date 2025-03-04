import React from 'react'
import { developmentIcon } from '../../assets/Icon'

const ServiceCard = ({title,des}) => {
  return (
  
    <div className="flex flex-col cursor-pointer hover:scale-105 hover:border-[#01B379] duration-500  items-center py-2 px-5 rounded-xl shadow-lg bg-white border border-gray-300 w-[260px]">
    {/* Icon and Title */}
    <div className="flex flex-col items-center justify-center w-full">
      <span className="text-4xl mb-2">{developmentIcon}</span>
      <h1 className="text-black font-bold text-lg">{title}</h1>
      <hr className="w-3/4 border-gray-300 mt-2" />
    </div>
    
    {/* Description */}
    <div className="text-center mt-4">
      <p className="text-sm text-gray-600">
       {des}
      </p>
    </div>
  </div>
  )
}

export default ServiceCard