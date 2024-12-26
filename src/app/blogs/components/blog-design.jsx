import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {dateFormate} from '@/utils/date-formate'

const BlogDesign = ({readmore, small, data}) => {
  return (
    <article>
        <figure>
            <Image src={data?.featured_image_src_large[0]} className='w-full' alt='' width={800} height={400}/>
        </figure>
        <h6 className={`mt-2 text-[#588A8D] capitalize text-xl hover:text-gray-200 underline ${small && 'text-base'}`}><Link href={`/blogs/${data?.category_info[0]?.slug}`}>{data?.category_info[0]?.name}</Link></h6>
        <h2 className={`text-gray-200 font-bold text-xl md:text-3xl lg:text-4xl hover:text-gray-400 cursor-pointer capitalize mt-3 ${small && "md:text-xl lg:text-2xl"}`}>
          <Link href={`/${data?.slug}`}>{data?.title?.rendered}</Link>
        </h2>
        <h4 className='text-gray-200 font-medium mt-2 mb-5'>Updated on {dateFormate(data?.modified_gmt)}</h4>
        {readmore && <Link href={`/${data?.slug}`} className='font-bold text-white hover:text-[#588A8D]'>Read More</Link>}
    </article>
  )
}

export default BlogDesign