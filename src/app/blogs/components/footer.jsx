import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='border-t border-b py-8'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center max-w-[1200px] mx-auto px-3'>
                    <ul className='flex flex-col md:flex-row gap-5 text-white font-semibold uppercase'>
                        <li>Animation</li>
                        <li>AI Content Creation</li>
                        <li>AI Commercials</li>
                        <li>AI Videos</li>
                    </ul>
                    <ul className='flex mt-4 md:mt-0 flex-col md:flex-row gap-5 text-white font-semibold uppercase'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter X</li>
                    </ul>
                </div>
            </footer>
            <p className='text-center text-white py-8 font-semibold md:text-lg'>© 2024 LeyLine</p>
        </>
    )
}

export default Footer