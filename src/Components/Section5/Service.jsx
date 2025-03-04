import React from 'react'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (

    <div className=" p-7 bg-white mt-10 w-[100%] rounded-r-xl md:w-[93%] sm:w-[100%] lg:w-[95%]">

           <div className=' flex  mt-[-6px]   flex-col items-center justify-center gap-5'>
            <h1 className='text-3xl text-[#01B379] font-bold'>Services We Offer</h1>
           <p className=' text-sm text-center'>Development Services and Solutions for Various Industries</p>
           <div className=' grid  grid-cols-1 mt-10  gap-7 md:grid-cols-4' >
            <ServiceCard title={'Web Applications'}     des={"Build scalable, custom web applications tailored to meet your business needs."} />
            <ServiceCard title={'Desktop Applications'} des={"Create robust and efficient desktop software for seamless performance and productivity."}  />
            <ServiceCard title={'KIOSK Applications'}   des={"Deliver intuitive KIOSK applications for interactive and hassle-free user experiences."}   />
            <ServiceCard title={'Mobile Applications'}  des={"Develop user-friendly mobile apps to keep your business connected anytime, anywhere."}  />

           </div>
           </div>

    </div>
  )
}

export default Service