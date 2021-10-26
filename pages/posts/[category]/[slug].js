import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "../../../components/codeblock"
import { getPostBySlug } from '../../../lib/posts'
import SnippetInfo from '../../../components/snippet-info'
import Head from 'next/head'


export default function Post({ post }) {


const share = [
  {
      reddit: {
        socialShareUrl: 'https://peterpeterparker.io',
        socialSharePopupWidth: 300,
        socialSharePopupHeight: 500
      }
    },
]

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
          {router.isFallback ? (
          <Head><title>Loading…</title></Head>
        ) : (
          <>

<div className=" w-full md:flex md:flex-row md:min-h-screen bg-blueGray-50 pt-1">
            <div className="flex flex-col flex-shrink-0 w-full bg-white text-blueGray-700 md:w-64  order-2">

              <nav className="">
                <ul className="inline">
                  <li className=" inline text-center md:text-left">
                    <a className="md:block px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-l-4 border-blue-600 text-blueGray-500  ring-offset-current ring-offset-2 hover:text-black" href="#">Report an issue</a>
                  </li>
                  <li className=" inline text-center md:text-left">
                    <a className="md:block px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-l-4 border-white text-blueGray-500 hover:border-blue-600 ring-offset-current ring-offset-2 hover:text-black" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fparse.com">
Tweet
                    </a>

                  </li>
                </ul>
              </nav>
          
            </div>

            <article className="flex flex-col mt-8  order-1">
            <Head><title>{post.title}</title></Head>
                <h1 className=" text-3xl font-bold leading-none tracking-tighter text-comet lg:text-4xl">{post.title}</h1>
                <SnippetInfo {...post}/>
                <div className=" sm:text-lg md:mt-5 md:text-xl">
                <web-social-share show="true">
    <div className="fab fa-reddit" slot="reddit"></div>
</web-social-share>

                <ReactMarkdown components={CodeBlock}>{post.content}</ReactMarkdown>
                </div>
            </article>

          </div>

            
          </>
        )}
     </>
  )
}



export async function getServerSideProps({ params }) {
 
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt',
    'category',
    'folder'
  ], params.category)
  const content = post.content || ''

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}




