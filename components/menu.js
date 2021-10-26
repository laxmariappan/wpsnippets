import Link from 'next/link'

export default function Menu(){

    return(
        <>
      <div className="p-5 mt-3 overflow-y-auto border-t whitespace-nowrap scroll-hidden">

       <ul className="inline-flex items-center list-none">

        {
            process.env.menu.map( (category) => (
                <li key={category} className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
                     <Link
                        href={{
                            pathname: `/posts/[category]/`,
                            query: {
                            category: category,
                            },
                        }}
                        as={`/posts/${category}/`}>
              <a className="">{category}</a>
            </Link>
                </li>
            ) )
        }
    
               </ul>
        </div>
        </>
    )
}