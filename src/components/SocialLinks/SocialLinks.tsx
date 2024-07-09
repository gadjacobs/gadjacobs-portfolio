import Link from 'next/link';
import React from 'react';
import {
  RiTwitterXLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from 'react-icons/ri';

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <>
      {/* social icons */}
      <Link
        href={'/'}
        className="flex items-center justify-center w-10 h-10 p-1 border rounded-xl"
      >
        <RiTwitterXLine size={24} />
      </Link>
      <Link
        href={'/'}
        className="flex items-center justify-center w-10 h-10 p-1 border rounded-xl"
      >
        <RiInstagramLine size={24} />
      </Link>
      <Link
        href={'/'}
        className="flex items-center justify-center w-10 h-10 p-1 border rounded-xl"
      >
        <RiLinkedinBoxLine size={24} />
      </Link>
      <Link
        href={'/'}
        className="p-1 border flex items-center justify-center h-10 w-10 rounded-xl"
      >
        <RiGithubLine size={24} />
      </Link>
    </>
  );
}
