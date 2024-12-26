import React from 'react'
import SinglePostTemp from './components/singlepost'

async function getBlogs(slug) {
  const response = await fetch(`https://leylinepro.net/wp-json/wp/v2/posts?slug=${slug}`)
  const Blogsresponse = await fetch("https://leylinepro.net/wp-json/wp/v2/posts")

  return {
    singleBlog: await response.json(),
    blogs: await Blogsresponse.json(),
  }
}

export async function generateMetadata({ params }) {
  const { singleBlog } = await getBlogs(params?.single)
  
  return {
    title: singleBlog[0]?.yoast_head_json.title,
    description: singleBlog[0]?.yoast_head_json.description,
    alternates: {
      canonical: `https://leylinepro.net/${singleBlog[0]?.slug}`,
      languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    },
    openGraph: {
      title: singleBlog[0]?.yoast_head_json.og_title,
      description: singleBlog[0]?.yoast_head_json.og_description,
    }
  }
}

const SinglePost = async ({ params }) => {
  const { singleBlog, blogs } = await getBlogs(params?.single)

  return (
    <>
      <SinglePostTemp data={singleBlog[0]} blogs={blogs.slice(0, 3)} />
    </>
  )
}

export default SinglePost