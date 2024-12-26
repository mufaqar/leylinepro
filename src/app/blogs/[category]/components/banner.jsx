import React from 'react'

const Banner = ({title}) => {
  return (
    <main className='bg-[#252C39] py-24 capitalize text-center text-6xl font-bold text-gray-200'>
        {title.replace(/-/g, ' ')}
    </main>
  )
}

export default Banner