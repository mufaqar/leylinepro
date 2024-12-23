import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SinglePostTemp = () => {
    return (
        <>
            <section className="bg-[#1A202C] py-10 md:py-20">
                <div className="flex max-w-[1280px] flex-col md:flex-row gap-7 lg:gap-16 mx-auto px-3 w-full">
                    <div className="md:w-[70%] gap-4 sm:gap-8">
                        <div>
                            <h6 className={` bg-[#588A8D] capitalize font-bold rounded-md text-sm hover:text-gray-200 w-fit  py-1 px-2 text-white`}><Link href="#">AI Commercials</Link></h6>
                            <h2 className={`text-gray-200 font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl xl:leading-normal mb-6 hover:text-gray-400 cursor-pointer capitalize mt-3`}>Commercial Video AI | Benefits of Using Commercial Video AI in 2024</h2>
                            <Image src="https://leylinepro.net/wp-content/uploads/2024/12/1-60.webp" className='w-full' alt='' width={800} height={400} />
                            <div className='mt-5'>
                                <p className='pb-4 text-gray-200'>The digital landscape is evolving rapidly, and so are the tools used by content creators to produce high-quality videos. One such innovation is the AI reel maker, a groundbreaking tool that leverages the power of artificial intelligence to simplify and enhance the process of creating video reels. Traditionally, producing a professional reel required significant time, technical skills, and expertise in video editing software. However, with the advent of AI-powered tools, this process has become faster, more accessible, and incredibly efficient.</p>
                                <p className='pb-4 text-gray-200'>An AI reel maker is designed to automate the time-consuming and complex aspects of video production, enabling creators to focus on what matters most—the content. Whether you’re a professional looking to build a stunning portfolio or a business wanting to showcase its products and services, an AI reel maker can help you create polished, engaging video reels with ease. These tools analyze your raw footage, select the best moments, and even add transitions, music, and effects, all with minimal input from you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[30%] flex flex-col gap-6">
                        <div className='bg-[#252C39] p-7 flex flex-col gap-5'>
                            {
                                [1, 2, 3]?.map((item, idx) => (
                                    <article key={idx}>
                                        <figure>
                                            <Image src="https://leylinepro.net/wp-content/uploads/2024/12/1-60.webp" className='w-full' alt='' width={800} height={400} />
                                        </figure>
                                        <h2 className={`text-gray-200 font-bold text-xl hover:text-gray-400 cursor-pointer capitalize mt-3`}>Commercial Video AI | Benefits of Using Commercial Video AI in 2024</h2>
                                        <h4 className='text-gray-200 font-medium mt-2 mb-5'>Updated on December 22, 2024</h4>
                                        <Link href="#" className='font-bold text-white uppercase hover:text-[#588A8D]'>Read More</Link>
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