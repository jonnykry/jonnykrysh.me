'use client';

import Link from 'next/link';
import BlogsLayout from '../blog/layout';

export default function ErrorBoundary({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <BlogsLayout>
      <div className='flex flex-col h-full gap-2 self-center max-w-3xl w-full'>
        <h1>{title}</h1>
        <div>{description}</div>
        <div className='flex gap-2'>
          <div>
            Head back
            <Link className='px-1' href='/'>
              Home
            </Link>
            or check out my
            <Link className='px-1' href='/blog'>
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </BlogsLayout>
  );
}
