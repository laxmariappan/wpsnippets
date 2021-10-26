import Link from 'next/link'

export default function MoreStories({ posts }) {
   
    return (
      <>
      


 
      <section className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-16 gap-y-10 md:gap-y-16 mb-16">
           
          {posts.map((post) => (
        
<section key={post.slug}
      className=" p-4  duration-300 transform bg-gray-100 rounded-2xl rotate-0 hover:rotate-3 ">
      

      <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    <Link
              href={{
                pathname: `/posts/[category]/`,
                query: {
                  category: post.category,
                },
              }}
              as={`/posts/${post.category}/`}
            >
              <a className="">{post.category}</a>
            </Link>
            
                    </span>
  
                </div>
      <h3 className="mb-4 text-1xl lg:text-2xl leading-tight">
            <Link
              href={{
                pathname: `/posts/[category]/[slug]`,
                query: {
                  slug: post.slug, 
                  category: post.category,
                },
              }}
              as={`/posts/${post.category}/${post.slug}/`}
            >
              <a className="">{post.title}</a>
            </Link>
          </h3>
          
          

      
  </section>

           
         
              
            
          ))}
        </div>
      </section>
      </>
    )
  }