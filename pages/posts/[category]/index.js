

import Head from 'next/head'
import { getPosts } from '../../../lib/posts'
import MoreStories from '../../../components/morePosts'

export default function Index({ allPosts,category }) {

  const morePosts = allPosts
  return (
    <>
    <Head>
            <title>WP Snippets - {category}</title>
          </Head>
          <div className="grid grid-cols-2 pb-8 mt-8 border-b lg:grid-cols-3 lg:gap-3">
            <h1 className=" text-3xl font-bold leading-none tracking-tighter text-comet lg:text-4xl ">{category} snippets</h1>
          </div>
     <MoreStories posts={morePosts}/>
        
    </>
  )
}



export async function getServerSideProps({ params,query: { page = 1 } }) {
  const allPosts = getPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'category',
  ],params.category)
  if (!allPosts) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const category = params.category
  return {
    props: { 
      allPosts,
      category,
      page: +page,
    },
  }

}



