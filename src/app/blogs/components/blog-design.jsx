import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogDesign = ({readmore, small}) => {
  return (
    <article>
        <figure>
            <Image src="https://leylinepro.net/wp-content/uploads/2024/12/1-60.webp" className='w-full' alt='' width={800} height={400}/>
        </figure>
        <h6 className={`mt-2 text-[#588A8D] capitalize text-xl hover:text-gray-200 underline ${small && 'text-base'}`}><Link href="#">AI Commercials</Link></h6>
        <h2 className={`text-gray-200 font-bold text-xl md:text-3xl lg:text-4xl hover:text-gray-400 cursor-pointer capitalize mt-3 ${small && "md:text-xl lg:text-2xl"}`}>Commercial Video AI | Benefits of Using Commercial Video AI in 2024</h2>
        <h4 className='text-gray-200 font-medium mt-2 mb-5'>Updated on December 22, 2024</h4>
        {readmore && <Link href="#" className='font-bold text-white hover:text-[#588A8D]'>Read More</Link>}
    </article>
  )
}

export default BlogDesign