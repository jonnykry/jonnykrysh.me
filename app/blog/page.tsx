import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link href='/blog/test'>Post 1</Link>
        </li>
      </ul>
    </div>
  );
}
