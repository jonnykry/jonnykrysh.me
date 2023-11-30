import Link from 'next/link';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex flex-col h-full gap-2 self-center max-w-3xl w-full'>
      <Link className=' self-start' href='/blog'>
        &larr; All Blog Posts
      </Link>
      <LoadingSpinner />
    </div>
  );
}
