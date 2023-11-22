import Link from 'next/link';


export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className='flex flex-row items-center justify-center text-xl gap-5 py-5'><Link href='/'>Home</Link><Link href='/blog'>Blogs</Link></header>
      <section className='h-screen flex flex-col p-10 max-w-3xl mx-auto'>{children}</section>
    </>
  );
}

