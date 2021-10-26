
import Head from 'next/head'
import { getPosts } from '../lib/posts'
import MoreStories from '../components/morePosts'

export default function Index({ allPosts }) {
  const morePosts = allPosts
  return (
    <>
          <Head>
            <title>WP Snippets</title>
          </Head>
         <MoreStories posts={morePosts} />

        
    </>
  )
}

export async function getStaticProps() {
  const allcategories = process.env.menu
  const randomCategory = allcategories[Math.floor(Math.random()*allcategories.length)]
  const allPosts = getPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'folder',
    'category',
  ],randomCategory,4)

  return {
    props: { 
      allPosts,
    },
  }
}


