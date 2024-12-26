import { dateFormate } from '@/utils/date-formate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryBlogDesign = ({data}) => {
    return (
        <article className='flex flex-col sm:flex-row gap-8'>
            <figure className='sm:w-[40%]'>
                <Image src={data?.featuredImage?.node?.mediaItemUrl} className='w-full' alt='' width={800} height={400} />
            </figure>
            <div className='sm:w-[60%]'>
                <h6 className={` bg-[#588A8D] capitalize text-sm hover:text-gray-200 inline py-1 px-2 text-white`}><Link href={`/blogs/${data?.categories?.nodes[0]?.slug}`}>{data?.categories?.nodes[0]?.name}</Link></h6>
                <h2 className={`text-gray-200 font-bold text-xl md:text-2xl hover:text-gray-400 cursor-pointer capitalize mt-3`}><Link href={`/${data?.slug}`}>{data?.title}</Link></h2>
                <h4 className='text-gray-200 font-medium mt-2 mb-5'>Updated on {dateFormate(data?.dateGmt)}</h4>
                <p className='text-gray-200 mb-5 text-lg'>
                    <div dangerouslySetInnerHTML={{__html: data?.excerpt}}/>
                </p>
                <Link href={`/${data?.slug}`} className='font-bold text-white hover:text-[#588A8D]'>Read More</Link>
            </div>
        </article>
    )
}

export default CategoryBlogDesign