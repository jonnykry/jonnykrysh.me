'use server';

import { promises as fs } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import Link from 'next/link';

const getPostData = async (slug: string) => {
  const blogPostContent = await fs.readFile(
    process.cwd() + `/_posts/${slug}.mdx`,
    'utf8'
  );

  const result = await bundleMDX({
    source: blogPostContent,
  });

  return {
    code: result.code,
    frontmatter: result.frontmatter,
    fallback: false,
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await getPostData(params.slug);
  const BlogPost = getMDXComponent(result.code);
  const frontmatter = (
    <div className='italic'>
      <div>{result.frontmatter.description}</div>
      <div className='flex gap-2'>
        {result.frontmatter.tags.map((tag: string) => (
          <div key={tag}>{`#${tag}`}</div>
        ))}
      </div>
      <br />
      <div>{result.frontmatter.date.toDateString()}</div>
      <hr className='my-10 border-gray-400' />
    </div>
  );

  return (
    <div className='prose prose-zinc prose-quoteless py-10'>
      <Link href='/blog'>&larr; All Blog Posts</Link>
      <h1 className='pt-5'>{result.frontmatter.title}</h1>
      {frontmatter}
      <BlogPost />
      <hr className='my-10 border-gray-400' />
      <Link href='/blog'>&larr; All Blog Posts</Link>
    </div>
  );
}
