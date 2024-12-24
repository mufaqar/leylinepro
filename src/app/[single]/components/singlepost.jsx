import { dateFormate } from '@/utils/date-formate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SinglePostTemp = ({ data, blogs }) => {
    return (
        <>
            <section className="bg-[#1A202C] py-10 md:py-20">
                <div className="flex max-w-[1280px] flex-col md:flex-row gap-7 lg:gap-16 mx-auto px-3 w-full">
                    <div className="md:w-[70%] gap-4 sm:gap-8">
                        <div>
                            <h6 className={` bg-[#588A8D] capitalize font-bold rounded-md text-sm hover:text-gray-200 w-fit py-1 px-2 text-white`}><Link href={`/blogs/${data?.category_info[0]?.slug}`}>{data?.category_info[0]?.name}</Link></h6>
                            <h2 className={`text-gray-200 font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl xl:leading-[56px] mb-6  cursor-pointer capitalize mt-3`}><Link href={`/${data?.slug}`}>{data?.title?.rendered}</Link></h2>
                            <Image src={data?.featured_image_src_large[0]} className='w-full' alt='' width={800} height={400} />
                            <div className='mt-5 lg:text-lg _content'>
                                <div dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[30%] flex flex-col gap-6">
                        <div className='bg-[#252C39] p-7 flex flex-col gap-5'>
                            {
                                blogs?.slice(3)?.map((item, idx) => (
                                    <article key={idx}>
                                        <figure>
                                            <Image src={item?.featured_image_src_large[0]} className='w-full' alt='' width={800} height={400} />
                                        </figure>
                                        <h2 className={`text-gray-200 font-bold text-xl hover:text-gray-400 cursor-pointer capitalize mt-3`}>
                                            <Link href={`/${data?.slug}`}>{data?.title?.rendered}</Link>
                                        </h2>
                                        <h4 className='text-gray-200 font-medium mt-2 mb-5'>Updated on {dateFormate(data?.modified_gmt)}</h4>
                                        <Link href={`/${data?.slug}`} className='font-bold text-white uppercase hover:text-[#588A8D]'>Read More</Link>
                                    </article>
                                ))
                            }
                        </div>
                        <div className="bg-[#252C39] p-6">
                            <h5 className="font-bold text-gray-200 text-2xl text-center capitalize">Subscribe our newsletter</h5>
                            <input type="text" name="" id="" className="text-gray-200 bg-[#1A202C] p-4 mt-4 text-lg w-full" placeholder="Your Email Address..." />
                            <button className="bg-[#588A8D] text-white font-semibold mt-4 w-full text-center text-lg p-4">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SinglePostTemp