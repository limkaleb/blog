import DateTransformed from '@/app/components/DateTransformed';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { notFound } from "next/navigation"

// export const dynamicParams = false;
// export const dynamic = 'force-static';

export async function generateStaticParams() {

  const posts = await getAllPostIds() 

  if (!posts) return []

  return posts.map((post) => ({
      postId: post.id
  }))
}

async function getData(slug: string) {
  const postData = await getPostData(slug as string);
  return postData;
}

export default async function SlugPage({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  if (!data) notFound()

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">

          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {data.title}
            </h1>
          </div>
          <div className="space-y-10">
            <div className="text-base font-medium leading-6 text-gray-500">
              <DateTransformed dateString={data.date} />
            </div>
          </div>
        </div>

      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
          </div>
        </div> 
      </div>
    </div>
  )
}
