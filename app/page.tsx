import Link from "next/link";
import { getSortedPostsData } from "./lib/posts";
import DateTransformed from "./components/DateTransformed";


async function getData() {
  const postData = getSortedPostsData();
  return postData;
}

export default async function IndexPage() {
  const data = await getData();

  return (
    <div>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-3xl md:leading-none">
          All Posts
        </h1>
      </div>

      <ul>
        {data.filter((d) => d.id !== 'error').map((post) => (
          <li key={post.id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="text-base font-medium leading-6 text-gray-500">
                <DateTransformed dateString={post.date} />
              </div>

              <Link href={`/posts/${post.id}`} prefetch className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-200">
                    {post.title}
                  </h3>
                </div>

                {/* <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                  {post.overview}
                </p> */}
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
    
  )
}