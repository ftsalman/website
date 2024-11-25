import React from 'react'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (

    <div className=" p-7 bg-white mt-10 w-[100%] rounded-r-xl md:w-[93%] sm:w-[100%] lg:w-[95%]">

           <div className=' flex  mt-[-6px]   flex-col items-center justify-center'>
            <h1 className='text-2xl text-[#7C5CFC] font-bold'>Services We Offer</h1>
           <p className=' text-sm text-center'>Development Services and Solutions for Various Industries</p>
           <div className=' grid  grid-cols-1 mt-10  gap-3 md:grid-cols-3' >
            <ServiceCard title={'App Development'}/>
            <ServiceCard title={'Web Development'}/>
            <ServiceCard title={'App Development'}/>

           </div>
           </div>

    </div>
  )
}

export default Service