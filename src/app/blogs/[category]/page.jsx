import React from 'react'
import Banner from './components/banner'
import CategoryBlogDesign from './components/category-blog-design'


export async function generateMetadata({ params }) {  
  return {
    title: `${(params?.category).replace('-', ' ')} | Leylinepro`,
    description: `${(params?.category).replace('-', ' ')} | Leylinepro`,
    alternates: {
      canonical: `https://leylinepro.net/blogs/${params?.category}`,
      languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    }
  }
}

const Category = async ({params}) => {
  const res = await fetchDataByCategory(params?.category)

  return (
    <section className='bg-[#1A202C]'>
      <Banner title={params?.category} />
      <div className='flex max-w-[1280px] flex-col lg:flex-row gap-7 lg:gap-16 mx-auto px-3 py-20 w-full'>
        <div className='lg:w-[70%] flex flex-col gap-6'>
          {res?.map((item, idx) => (
            <CategoryBlogDesign key={idx} data={item} small />
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
    </section>
  )
}

export default Category




const fetchDataByCategory = async (slug) => {
  const endpoint = 'https://leylinepro.net/graphql';
  
  const query = `
    query NewQuery {
      category(id: "${slug}", idType: SLUG) {
        posts(first: 100) {
          nodes {
            title
            slug
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            excerpt
            categories(first: 1) {
              nodes {
                slug
                name
              }
            }
            dateGmt
          }
        }
      }
    }
  `;
  
  var result

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    result = await response.json();

  } catch (error) {
    console.error('Error fetching GraphQL data:', error);
  }

  return result.data?.category?.posts?.nodes
};