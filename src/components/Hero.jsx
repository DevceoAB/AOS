import React from 'react'

const Hero = () => {
    return(
        <div className='flex p-16 bg-gray-200 '>
        <div data-aos="fade-right" data-aos-duration='1400' className='w-[50%] bg-gray-700 flex items-start flex-col justify-center'>
         <h1 className='text-4xl py-4 pl-8 text-white'>Hi there ✋</h1>
         <h1 className='text-5xl font-semibold text-white py-4 pl-8'>I am FullStack Develper</h1>
        </div>
        <div className='w-[50%] flex items-center justify-center'>
          <div data-aos="fade-down" data-aos-duration='1400' className='bg-red-400 w-[300px] h-[300px] rounded-full'></div>
        </div>
      </div>
    )
}

export default Hero