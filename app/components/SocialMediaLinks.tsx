import Image from 'next/image';
import Link from 'next/link';

const SocialMediaLinks = () => {
  return (
    <>
      <Link
        className='no-underline text-black'
        href='mailto:jonnykry93@gmail.com'
        target='_blank'
      >
        <Image
          className='h-5 w-5 sm:w-5 sm:h-5'
          src='/mail.svg'
          height={50}
          width={50}
          alt={'MailTo icon'}
        />
      </Link>
      <Link
        className='no-underline text-black'
        href='https://www.linkedin.com/in/jonnykry/'
        target='_blank'
      >
        <Image
          className='h-5 w-5 sm:w-5 sm:h-5'
          src='/linkedin.svg'
          height={50}
          width={50}
          alt={'LinkedIn icon'}
        />
      </Link>
      <Link
        className='no-underline text-black'
        href='https://github.com/jonnykry'
        target='_blank'
      >
        <Image
          className='h-5 w-5 sm:w-5 sm:h-5'
          src='/github.svg'
          height={50}
          width={50}
          alt={'GitHub icon'}
        />
      </Link>
    </>
  );
};

export default SocialMediaLinks;
