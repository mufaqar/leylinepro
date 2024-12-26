import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SliderPostDesign = ({ data }) => {
    return (
        <div className='px-4 mb-6'>
            <figure>
                <Image src={data?.featured_image_src_large[0]} className='w-full z-[-1]' alt='' width={800} height={400} />
            </figure>
            <div className='px-5 z-10 -mt-14 relative'>
                <div className='bg-[#1A202C] text-center p-6'>
                    <h6 className={`mt-2 text-[#588A8D] capitalize text-lg hover:text-gray-200 underline`}><Link href={`/blogs/${data?.category_info[0]?.slug}`}>{data?.category_info[0]?.name}</Link></h6>
                    <h2 className={`text-gray-200 font-bold text-xl hover:text-gray-400 cursor-pointer capitalize mt-3 md:text-xl lg:text-2xl `}>
                        <Link href={`/${data?.slug}`}>{data?.title?.rendered}</Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default SliderPostDesign