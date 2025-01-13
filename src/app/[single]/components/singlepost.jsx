"use client"
import { dateFormate } from '@/utils/date-formate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SinglePostTemp = ({ data, blogs }) => {
    const handleOpenTableOfContent = () => {
        // alert('working ')
        const tocContainer = document.getElementById('toc_container')
        tocContainer.classList.toggle('!block')
    }
    return (
        <>
            <section className="bg-[#1A202C] py-10 md:py-20">
                <div className="flex max-w-[1280px] flex-col md:flex-row gap-7 lg:gap-16 mx-auto px-3 w-full">
                    <div className="md:w-[70%] gap-4 sm:gap-8">
                        <div>
                            <h6 className={` bg-[#588A8D] capitalize font-bold rounded-md text-sm hover:text-gray-200 w-fit py-1 px-2 text-white`}><Link href={`/blogs/${data?.category_info[0]?.slug}`}>{data?.category_info[0]?.name}</Link></h6>
                            <h2 className={`text-gray-200 font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl xl:leading-[56px] mb-6  cursor-pointer capitalize mt-3`}><Link href={`/${data?.slug}`}>{data?.title?.rendered}</Link></h2>
                            <Image src={data?.featured_image_src_large[0]} className='w-full' alt='' width={800} height={400} />
                            <button onClick={handleOpenTableOfContent} className='bg-white mt-5 flex items-center gap-1 p-4 py-3'>
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Table Of Content</p>
                            </button>
                            <div className='mt-5 lg:text-lg _content'>
                                <div dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[30%] flex flex-col gap-6">
                        <div className='bg-[#252C39] p-7 flex flex-col gap-5'>
                            {
                                blogs?.map((item, idx) => (
                                    <article key={idx}>
                                        <figure>
                                            <Image src={item?.featured_image_src_large[0]} className='w-full' alt='' width={800} height={400} />
                                        </figure>
                                        <h2 className={`text-gray-200 font-bold text-xl hover:text-gray-400 cursor-pointer capitalize mt-3`}>
                                            <Link href={`/${item?.slug}`}>{item?.title?.rendered}</Link>
                                        </h2>
                                        <h4 className='text-gray-200 font-medium mt-2 mb-5'>Updated on {dateFormate(item?.modified_gmt)}</h4>
                                        <Link href={`/${item?.slug}`} className='font-bold text-white uppercase hover:text-[#588A8D]'>Read More</Link>
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