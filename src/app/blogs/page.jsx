import React from "react";
import Hero from "./components/main";
import BlogDesign from "./components/blog-design";
import PostSlider from "./components/PostSlider";
import Footer from "./components/footer"

const Blogs = () => {
  return (
    <>
      <Hero />
      <section className="bg-[#1A202C] py-10 md:py-20">
        <div className="flex max-w-[1280px] flex-col md:flex-row gap-7 lg:gap-16 mx-auto px-3 w-full">
          <div className="md:w-[70%] grid sm:grid-cols-2 gap-4 sm:gap-8">
            {[1, 2, 3, 4, 5, 6,7]?.map((item, idx) => (
              <BlogDesign key={idx} small />
            ))}
          </div>
          <div className="md:w-[30%] flex flex-col gap-6">
            <div className="bg-[#252C39] p-6">
                <h5 className="font-bold text-gray-200 text-2xl text-center capitalize">Subscribe our newsletter</h5>
                <input type="text" name="" id="" className="text-gray-200 bg-[#1A202C] p-4 mt-4 text-lg w-full" placeholder="Your Email Address..."/>
                <button className="bg-[#588A8D] text-white font-semibold mt-4 w-full text-center text-lg p-4">
                    Submit
                </button>
            </div>
          </div>
        </div>
      </section>

      <PostSlider/>
      <Footer/>

    </>
  );
};

export default Blogs;
