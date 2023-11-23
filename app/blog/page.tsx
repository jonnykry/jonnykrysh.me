'use server';

import { promises as fs } from 'fs';
import Link from 'next/link';

const getPosts = async () => {
  const files = await fs.readdir(process.cwd() + '/_posts');

  return {
    files: files,
  };
};

export default async function Page() {
  const response = await getPosts();

  const blogPosts = response.files.map((file) => {
    // TODO: better way to handle dates
    const fullName = file.substring(0, file.length - 4); // remove trailing mdx
    const name = fullName.substring(11, file.length); // remove date
    const date = file.substring(0, 10);

    const newWords = name.split('-');
    const capitalizedWords = newWords.map((word: string) =>
      word ? word[0].toUpperCase() + word.substring(1) : ''
    );
    const blogTitle = capitalizedWords.join(' ');

    return (
      <li key={name}>
        <Link href={`/blog/${fullName}`}>{`${date} · ${blogTitle}`}</Link>
      </li>
    );
  });

  return (
    <div className='min-w-full mt-10'>
      <h1 className='text-6xl font-staatliches mb-5'>Blog Entries</h1>
      <ul className='list-disc pl-5'>
        {blogPosts}
        <li>... more coming soon!</li>
      </ul>
    </div>
  );
}
