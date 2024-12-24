import React from 'react'
import SinglePostTemp from './components/singlepost'

async function getBlogs(slug) {
  const response = await fetch(`https://leylinepro.net/wp-json/wp/v2/posts?slug=${slug}`)
  const Blogsresponse = await fetch("https://leylinepro.net/wp-json/wp/v2/posts")

  return {
    singleBlog : await response.json(),
    blogs: await Blogsresponse.json(),
  }
}


const SinglePost = async ({params}) => {
  const {singleBlog, blogs} = await getBlogs(params?.single)

  return (
    <>
        <SinglePostTemp data={singleBlog[0]} blogs={blogs.slice(0, 3)}/>
    </>
  )
}

export default SinglePost