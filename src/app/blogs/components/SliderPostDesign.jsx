import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SliderPostDesign = () => {
    return (
        <div className='px-4 mb-6'>
            <figure>
                <Image src="https://leylinepro.net/wp-content/uploads/2024/12/1-60.webp" className='w-full z-[-1]' alt='' width={800} height={400} />
            </figure>
            <div className='px-5 z-10 -mt-14 relative'>
                <div className='bg-[#1A202C] text-center p-6'>
                    <h6 className={`mt-2 text-[#588A8D] capitalize text-lg hover:text-gray-200 underline`}><Link href="#">AI Commercials</Link></h6>
                    <h2 className={`text-gray-200 font-bold text-xl hover:text-gray-400 cursor-pointer capitalize mt-3 md:text-xl lg:text-2xl `}>Commercial Video AI | Benefits of Using Commercial Video AI in 2024</h2>
                </div>
            </div>
        </div>
    )
}

export default SliderPostDesign