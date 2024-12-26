// "use client"
import React from "react";
import Hero from "./components/main";
import BlogDesign from "./components/blog-design";
import PostSlider from "./components/PostSlider";
import Footer from "./components/footer"

async function getBlogs() {
  const response = await fetch("https://leylinepro.net/wp-json/wp/v2/posts")
  return response.json()
}

const Blogs = async () => {
  const response = await getBlogs()
 
  return (
    <>
      <Hero data={response.slice(0,3)}/>
      <section className="bg-[#1A202C] py-10 md:py-20">
        <div className="flex max-w-[1280px] flex-col md:flex-row gap-7 lg:gap-16 mx-auto px-3 w-full">
          <div className="md:w-[70%] grid sm:grid-cols-2 gap-4 sm:gap-8">
            {response?.slice(3)?.map((item, idx) => (
              <BlogDesign key={idx} small data={item}/>
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
      <PostSlider data={response.slice(6)}/>
    </>
  );
};

export default Blogs;
