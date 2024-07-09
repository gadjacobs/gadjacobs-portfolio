'use client';
import ThemeChanger from '@/utils/ThemeChanger';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterXLine,
} from 'react-icons/ri';
import SocialLinks from '../SocialLinks/SocialLinks';

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <nav className="flex flex-col md:flex-row items-center py-2 gap-x-4 gap-y-4 md:gap-y-0">
      <div className="w-16 h-16 overflow-hidden rounded-full">
        <Image
          src="/images/headshot.png"
          width={64}
          height={64}
          alt="gads headshot"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-4 md:gap-0">
        <div className="flex flex-col gap-1 items-center md:items-start">
          {/* title - small */}
          <h3 className="text-xl font-medium">Gad Jacobs</h3>
          {/* text - small */}
          <p className="text-base font-light">Senior Frontend Engineer</p>
        </div>
        {/* socials */}
        <div className="flex items-center gap-x-2">
          {/* dark mode toggle */}
          <div className="flex items-center justify-center w-10 h-10 p-1 border rounded-full">
            <ThemeChanger />
          </div>
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
}
