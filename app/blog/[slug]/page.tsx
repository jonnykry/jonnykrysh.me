'use server';

import { promises as fs } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';

const getPostData = async (slug: string) => {
  const blogPostContent = await fs.readFile(
    process.cwd() + `/_posts/${slug}.mdx`,
    'utf8'
  );

  const result = await bundleMDX({
    source: blogPostContent,
  });

  return { code: result.code, fallback: false };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await getPostData(params.slug);
  const BlogPost = getMDXComponent(result.code);

  return (
    <BlogPost />
  );
}
