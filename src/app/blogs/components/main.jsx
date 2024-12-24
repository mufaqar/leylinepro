import React from 'react'
import BlogDesign from './blog-design'

const Hero = ({data}) => {
  return (
    <main className='flex max-w-[1280px] flex-col md:flex-row gap-7 lg:gap-16 mx-auto px-3 py-10 w-full'>
        <div className='md:w-[70%]'>
            <BlogDesign readmore data={data[0]}/>
        </div>
        <div className='md:w-[30%] flex flex-col gap-6'>
            {data.slice(1)?.map((item,idx)=>(
                <BlogDesign key={idx} data={item} small/>
            ))}
        </div>
    </main>
  )
}

export default Hero