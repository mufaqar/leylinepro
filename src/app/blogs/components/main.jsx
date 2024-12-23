import React from 'react'
import BlogDesign from './blog-design'

const Hero = () => {
  return (
    <main className='flex max-w-[1280px] flex-col md:flex-row gap-7 lg:gap-16 mx-auto px-3 py-10 w-full'>
        <div className='md:w-[70%]'>
            <BlogDesign readmore/>
        </div>
        <div className='md:w-[30%] flex flex-col gap-6'>
            {[1,2]?.map((item,idx)=>(
                <BlogDesign key={idx} small/>
            ))}
        </div>
    </main>
  )
}

export default Hero