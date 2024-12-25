import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <header className='bg-[#232529] border-b z-50 border-black sticky top-0 flex items-center justify-between px-5'>
                <div className='flex items-center gap-4 sm:gap-10 py-4'>
                    <Link href="/">
                        <Logo />
                    </Link>
                    <ul className='flex items-center text-gray-400 sm:text-lg gap-4 sm:gap-10'>
                        <li className='hover:text-white'><Link href="#">Discover</Link></li>
                        <li className='hover:text-white'><Link href="#">Jobs</Link></li>
                        <li className='hover:text-white'><Link href="#">Producer Tool</Link></li>
                        <li className='hover:text-white'><Link href="#">AI</Link></li>
                    </ul>
                </div>
                <div className=' items-center gap-3 hidden md:flex'>
                    <Link href="#" className='bg-[#1F3337] text-[#00ADAE] text-lg hover:opacity-80 px-6 py-2 rounded-full'>Sign In</Link>
                    <Link href="#" className='bg-[#00ADAE] text-[#fff] text-lg hover:opacity-80 px-6 py-2 rounded-full'>Sign Up</Link>
                </div>
            </header>
        </>
    )
}

export default Header



const Logo = () => {
    return (
        <svg width="60" height="35" viewBox="0 0 60 35" fill="none"><g clipPath="url(#clip0_2143_2883)"><path d="M34.3518 5.83126C34.3518 5.83126 31.1762 1.52783 30.688 0.958851C30.1998 0.389877 27.4308 -1.15218 24.9066 1.52782C22.3825 4.20783 1.70104 29.4602 1.29371 29.8664C0.886386 30.2726 -0.741509 31.8961 0.398159 33.9264C1.21281 35.2257 3.98108 34.9788 5.12075 34.9788C6.26041 34.9788 60 34.8974 60 34.8974L59.6743 34.3291C59.6743 34.3291 22.3009 34.4947 21.5693 34.4133C20.8376 34.3319 13.1821 34.9823 14.8923 28.6485C15.6247 27.8361 34.3518 5.83126 34.3518 5.83126Z" fill="#578A8C"></path><path d="M37.12 8.75415C37.12 8.75415 20.7538 27.5114 20.1024 28.2424C19.4509 28.9734 18.7186 30.6783 19.6957 32.221C20.6729 33.7638 24.5808 33.4396 25.1507 33.4396L58.7462 33.4677L54.7891 29.4603H32.5585C31.988 29.4603 29.9556 29.2169 30.6858 26.4562C31.9071 24.7507 38.909 17.4431 39.8045 16.6307C40.7001 15.8183 40.9449 13.0583 40.456 12.3273C39.967 11.5962 37.12 8.75415 37.12 8.75415Z" fill="#578A8C"></path></g><defs><clipPath id="clip0_2143_2883"><rect width="60" height="35" fill="white"></rect></clipPath></defs></svg>
    )
}