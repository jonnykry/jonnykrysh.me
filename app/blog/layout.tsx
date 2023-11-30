'use client';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-full bg-emerald-50'>
      <Header />
      <div className='mt-20 h-full flex flex-col self-center w-max:full w-full p-10'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
