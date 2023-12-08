import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

const getPosts = async () => {
  const postsDirectory = path.join(process.cwd(), 'app', '_posts');
  const files = await fs.readdir(postsDirectory);

  return {
    files: files,
  };
};

export default async function Page() {
  const response = await getPosts();

  const blogPosts = response.files.map((file) => {
    const fullName = file.substring(0, file.length - 4); // remove trailing mdx
    const newWords = fullName.split('-');
    const capitalizedWords = newWords.map((word: string) =>
      word ? word[0].toUpperCase() + word.substring(1) : ''
    );
    const blogTitle = capitalizedWords.join(' ');

    return (
      <li key={fullName}>
        <Link href={`/blog/${fullName}`}>{`${blogTitle}`}</Link>
      </li>
    );
  });

  return (
    <div className='self-center max-w-3xl w-full'>
      <h1 className='text-5xl font-staatliches mb-5'>Blog Entries</h1>
      <ul className='list-disc pl-5'>
        {blogPosts}
        <li>... more coming soon!</li>
      </ul>
    </div>
  );
}
