import Link from "next/link"
export default function SnippetInfo({
    author,
    date,
    category,
    excerpt
  }) {
    return (
      <div className="py-5  text-left">
        <div className="grid grid-cols-2 pt-8 mt-8 border-t lg:grid-cols-3 lg:gap-3">
            <div className="mt-2  md:mt-0">
              <span className="text-sm font-normal leading-6 uppercase text-manatee">
                Published on
              </span>
              <div className="mt-2 text-xl text-gray-500 lg:mx-auto">
                <div>
                  <div>{date}</div>
                </div>
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-sm font-normal leading-6 uppercase text-manatee">
                Published by
              </span>
              <div className="mt-2 text-xl text-gray-500">
                <div>
                  <div>{author}</div>
                </div>
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-sm font-normal leading-6 uppercase text-manatee">
                Category
              </span>
              <div className="mt-2 text-xl text-gray-500">
                <div>
                  <span className="m-1 p-1 rounded bg-indigo-500 text-white  capitalize">
                    <Link
              href={{
                pathname: `/posts/[category]/`,
                query: {
                  category: category,
                },
              }}
              as={`/posts/${category}/`}
            >
              <a className="">{category}</a>
            </Link>
                    </span>
                    </div>
              </div>
            </div>
          </div>
         
          <div className="block w-full border rounded py-5 px-2 mt-16 sm:text-lg md:mt-5 md:text-xl bg-gray-50">
              <p>{excerpt}</p>
          </div>
      </div>
    )
  }
  