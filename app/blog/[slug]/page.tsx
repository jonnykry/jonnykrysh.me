'use server';

import { promises as fs } from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import Link from 'next/link';
import { cache } from 'react';
import { BlogMDXComponent } from '../../components/BlogMDXComponent';

const getPostData = cache(async (slug: string) => {
  const blogPostContent = await fs.readFile(
    process.cwd() + path.resolve(`/app/_posts/${slug}.mdx`),
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
});

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await getPostData(params.slug);
  const frontmatter = (
    <div className='italic text-gray-500'>
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
    <article className='prose prose-emerald prose-overrides prose-li:marker:text-emerald-700 prose-blockquote:border-l-slate-700 prose-blockquote:bg-slate-100 prose-blockquote:p-4 self-center max-w-3xl'>
      <Link href='/blog'>&larr; All Blog Posts</Link>
      <h1 className='pt-5'>{result.frontmatter.title}</h1>
      {frontmatter}
      <BlogMDXComponent code={result.code} />
      <hr className='my-10 border-gray-400' />
      <Link href='/blog'>&larr; All Blog Posts</Link>
    </article>
  );
}
