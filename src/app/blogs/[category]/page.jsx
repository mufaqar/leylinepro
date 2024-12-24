import React from 'react'
import Banner from './components/banner'
import CategoryBlogDesign from './components/category-blog-design'
import Footer from "../components/footer"

const Category = ({params}) => {
  return (
    <section className='bg-[#1A202C]'>
      <Banner />
      <div className='flex max-w-[1280px] flex-col lg:flex-row gap-7 lg:gap-16 mx-auto px-3 py-20 w-full'>
        <div className='lg:w-[70%] flex flex-col gap-6'>
          {[1, 2]?.map((item, idx) => (
            <CategoryBlogDesign key={idx} small />
          ))}
        </div>
        <div className="lg:w-[30%] flex flex-col gap-6">
          <div className="bg-[#252C39] p-6">
            <h5 className="font-bold text-gray-200 text-2xl text-center capitalize">Subscribe our newsletter</h5>
            <input type="text" name="" id="" className="text-gray-200 bg-[#1A202C] p-4 mt-4 text-lg w-full" placeholder="Your Email Address..." />
            <button className="bg-[#588A8D] text-white font-semibold mt-4 w-full text-center text-lg p-4">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Category