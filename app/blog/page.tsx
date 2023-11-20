import Link from 'next/link';

export default function Page({ props }: any) {
  console.log(props);

  return (
    <div>
      Blog
      <div>
        <Link href='/blog/posts/test.html'>Post 1</Link>
      </div>
    </div>
  );
}
