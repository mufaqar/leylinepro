import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='border-t border-b py-8'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center max-w-[1200px] mx-auto px-3'>
                    <ul className='flex flex-col md:flex-row gap-5 text-white font-semibold uppercase'>
                        <li><Link href="/blogs/animation/" className='hover:text-[#00ADAE]'>Animation</Link></li>
                        <li><Link href="/blogs/ai-content-creation/" className='hover:text-[#00ADAE]'>AI Content Creation</Link></li>
                        <li><Link href="/blogs/ai-commercials/" className='hover:text-[#00ADAE]'>AI Commercials</Link></li>
                        <li><Link href="/blogs/ai-videos/" className='hover:text-[#00ADAE]'>AI Videos</Link></li>
                    </ul>
                    <ul className='flex mt-4 md:mt-0 items-center md:flex-row gap-5 text-white font-semibold uppercase'>
                        <Link href="/blogs/ai-videos/"><li className='border border-white h-10 flex w-10 flex-col items-center justify-center rounded-[3px] hover:border-[#00ADAE]'>
                            <svg class="kadence-svg-icon kadence-facebook-svg" fill="currentColor" version="1.1" width="24" height="24" viewBox="0 0 32 32"><title>Facebook</title><path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
                            </svg>
                        </li></Link>
                        <Link href="https://x.com/LeyLine_Market" target='_blank'><li className='border border-white h-10 flex w-10 flex-col items-center justify-center rounded-[3px] hover:border-[#00ADAE]'>
                            <svg class="kadence-svg-icon kadence-twitter-x-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 24"><title>X</title><path d="M13.969 10.157l8.738-10.157h-2.071l-7.587 8.819-6.060-8.819h-6.989l9.164 13.336-9.164 10.651h2.071l8.012-9.313 6.4 9.313h6.989l-9.503-13.831zM11.133 13.454l-8.316-11.895h3.181l14.64 20.941h-3.181l-6.324-9.046z"></path>
                            </svg>
                        </li></Link>
                        <Link href="/"><li className='border border-white h-10 flex w-10 flex-col items-center justify-center rounded-[3px] hover:border-[#00ADAE]'>
                            <svg class="kadence-svg-icon kadence-instagram-alt-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Instagram</title><path d="M7 1c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243v10c0 1.657 0.673 3.158 1.757 4.243s2.586 1.757 4.243 1.757h10c1.657 0 3.158-0.673 4.243-1.757s1.757-2.586 1.757-4.243v-10c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757zM7 3h10c1.105 0 2.103 0.447 2.828 1.172s1.172 1.723 1.172 2.828v10c0 1.105-0.447 2.103-1.172 2.828s-1.723 1.172-2.828 1.172h-10c-1.105 0-2.103-0.447-2.828-1.172s-1.172-1.723-1.172-2.828v-10c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172zM16.989 11.223c-0.15-0.972-0.571-1.857-1.194-2.567-0.754-0.861-1.804-1.465-3.009-1.644-0.464-0.074-0.97-0.077-1.477-0.002-1.366 0.202-2.521 0.941-3.282 1.967s-1.133 2.347-0.93 3.712 0.941 2.521 1.967 3.282 2.347 1.133 3.712 0.93 2.521-0.941 3.282-1.967 1.133-2.347 0.93-3.712zM15.011 11.517c0.122 0.82-0.1 1.609-0.558 2.227s-1.15 1.059-1.969 1.18-1.609-0.1-2.227-0.558-1.059-1.15-1.18-1.969 0.1-1.609 0.558-2.227 1.15-1.059 1.969-1.18c0.313-0.046 0.615-0.042 0.87-0.002 0.74 0.11 1.366 0.47 1.818 0.986 0.375 0.428 0.63 0.963 0.72 1.543zM17.5 7.5c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path>
                            </svg>
                        </li></Link>
                    </ul>
                </div>
            </footer>
            <p className='text-center text-white py-8 font-semibold md:text-lg'>© 2024 LeyLine</p>
        </>
    )
}

export default Footer