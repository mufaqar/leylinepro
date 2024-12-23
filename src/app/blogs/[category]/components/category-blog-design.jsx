import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryBlogDesign = () => {
    return (
        <article className='flex flex-col sm:flex-row gap-8'>
            <figure className='sm:w-[40%]'>
                <Image src="https://leylinepro.net/wp-content/uploads/2024/12/1-60.webp" className='w-full' alt='' width={800} height={400} />
            </figure>
            <div className='sm:w-[60%]'>
                <h6 className={` bg-[#588A8D] capitalize text-sm hover:text-gray-200 inline py-1 px-2 text-white`}><Link href="#">AI Commercials</Link></h6>
                <h2 className={`text-gray-200 font-bold text-xl md:text-2xl hover:text-gray-400 cursor-pointer capitalize mt-3`}>Commercial Video AI | Benefits of Using Commercial Video AI in 2024</h2>
                <h4 className='text-gray-200 font-medium mt-2 mb-5'>Updated on December 22, 2024</h4>
                <p className='text-gray-200 mb-5 text-lg'>The digital landscape is evolving rapidly, and so are the tools used by content creators to produce high-quality videos…</p>
                <Link href="#" className='font-bold text-white hover:text-[#588A8D]'>Read More</Link>
            </div>
        </article>
    )
}

export default CategoryBlogDesign