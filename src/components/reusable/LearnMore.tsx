import Link from 'next/link';
import constants from '@/utils/constants/constans.json';

const LearnMore = ({ section, href }: { section: string; href: string }) => {
  return (
    <a
      href={href}
      title={`Learn More | Navigate to ${section} page | ${constants.aria_label}`}
      aria-label={`Learn More | Navigate to ${section} page | ${constants.aria_label}`}
    >
      <p className='bg-red-600 req-button z-[15] px-2 py-1 rounded-md font-bold text-white text-md hover:bg-red-700 duration-300 text-center w-fit'>
        {' '}
        More {section}
      </p>
    </a>
  );
};

export default LearnMore;
