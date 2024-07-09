import Container from '@/components/Container/Container';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import Image from 'next/image';
import { BiFootball, BiGame } from 'react-icons/bi';
import { BsAirplane } from 'react-icons/bs';
import { FaApple, FaGoogle, FaPaypal, FaReact } from 'react-icons/fa6';
import { GrGraphQl } from 'react-icons/gr';
import { ImNewTab } from 'react-icons/im';
import { IoLogoJavascript } from 'react-icons/io';
import { PiCurrencyDollarSimpleDuotone } from 'react-icons/pi';
import { SiUikit } from 'react-icons/si';
import { TbBrandTypescript, TbBrandNextjs } from 'react-icons/tb';

export default function Home() {
  const date = new Date();
  return (
    <main className="flex flex-col gap-y-6">
      {/* About Me */}
      <Container className="flex flex-col gap-y-4">
        <p className="text-sm text-center md:text-left">About Me:</p>
        <h1 className="text-2xl font-medium text-center md:text-3xl md:text-left">
          <span className="text-gray-500">{'{{'}</span>Frontend Engineer
          <span className="text-gray-500">{'}}'}</span> @ ConvertKit 🚀
        </h1>
        <div className="flex overflow-scroll gap-x-2 no-scrollbar">
          <div className="flex gap-2 items-center border rounded-xl px-2 bg-white dark:bg-[#121212]">
            <FaReact />
            React
          </div>
          <div className="flex gap-2 items-center border rounded-xl px-2 bg-white dark:bg-[#121212]">
            <TbBrandTypescript />
            TypeScript
          </div>
          <div className="flex gap-2 items-center border rounded-xl px-2 bg-white dark:bg-[#121212]">
            <IoLogoJavascript />
            JavaScript
          </div>
          <div className="flex gap-2 items-center border rounded-xl px-2 bg-white dark:bg-[#121212]">
            <TbBrandNextjs />
            NextJS
          </div>
          <div className="flex gap-2 items-center border rounded-xl px-2 bg-white dark:bg-[#121212]">
            <GrGraphQl />
            GraphQL
          </div>
        </div>
        <p className="text-lg text-center md:text-xl md:text-left">
          I&apos;m a seasoned Frontend Engineer that is all about crafting
          exceptional digital experiences. With a career spanning over five
          years, I&apos;ve mastered my skills in driving impactful projects and
          delivering tangible results. <br /> I thrive on overcoming technical
          challenges and leveraging emerging technologies to drive innovation
          and create beautiful visual experiences for my end-users.
        </p>
      </Container>
      {/* Blog - top 4 */}
      <div className="grid gap-6 md:grid-cols-2">
        <Container className="flex flex-col items-center gap-y-2 md:items-start">
          <h2 className="text-2xl font-medium md:text-left">Wages of sin</h2>
          <Image
            alt="blog item"
            src="https://loremflickr.com/300/300"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover object-center w-full h-auto rounded-2xl"
          />
        </Container>
        <Container className="flex flex-col items-center gap-y-2 md:items-start">
          <h2 className="text-2xl font-medium">The 10x Engineer</h2>
          <Image
            alt="blog item"
            src="https://loremflickr.com/300/300"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover object-center w-full h-auto rounded-2xl"
          />
        </Container>
        <Container className="flex flex-col items-center gap-y-2 md:items-start">
          <h2 className="text-2xl font-medium">Netlify vs Sanity vs Strapi</h2>
          <Image
            alt="blog item"
            src="https://loremflickr.com/300/300"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover object-center w-full h-auto rounded-2xl"
          />
        </Container>
        <Container className="flex flex-col items-center gap-y-2 md:items-start">
          <h2 className="text-2xl font-medium">What is Blockchain?</h2>
          <Image
            alt="blog item"
            src="https://loremflickr.com/300/300"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover object-center w-full h-auto rounded-2xl"
          />
        </Container>
      </div>
      {/* Experience */}
      <Container className="flex flex-col items-center gap-y-2 md:items-start">
        <h2 className="text-2xl font-medium">Experience</h2>
        {/* Work experience item */}
        <div className="flex flex-col items-center justify-between gap-2 py-4 border-b md:flex-row md:items-start w-full">
          <div className="flex flex-col items-center gap-1 md:flex-row">
            <FaGoogle size={24} />
            <p className="text-base">
              Software Engineer III @{' '}
              <span className="font-medium">Google</span>
            </p>
          </div>
          <p>Jun 2023 - Present</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 py-4 border-b md:flex-row md:items-start w-full">
          <div className="flex flex-col items-center gap-1 md:flex-row">
            <FaPaypal size={24} />
            <p className="text-base">
              Software Engineer @ <span className="font-medium">PayPal</span>
            </p>
          </div>
          <p>Jun 2023 - Present</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 py-4 border-b md:flex-row md:items-start w-full">
          <div className="flex flex-col items-center gap-1 md:flex-row">
            <FaApple size={24} />
            <p className="text-base">
              Software Engineer II @ <span className="font-medium">Apple</span>
            </p>
          </div>
          <p>Jun 2023 - Present</p>
        </div>
      </Container>
      {/* Projects */}
      <Container className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-medium text-center md:text-left">
          Projects
        </h2>
        <div className="flex flex-col items-center justify-between gap-2 py-4 md:border-b md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <div className="flex items-center justify-center w-10 h-10 p-1 border rounded-xl">
              <PiCurrencyDollarSimpleDuotone size={24} />
            </div>
            <span className="font-medium">Lisk Wallet</span>
          </div>
          <button className="flex items-center p-2 px-4 border rounded-full md:gap-x-6 w-full md:w-auto justify-between">
            Take a look <ImNewTab />
          </button>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 py-4 md:border-b md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <div className="flex items-center justify-center w-10 h-10 p-1 border rounded-xl">
              <SiUikit />
            </div>
            <span className="font-medium">ConvertKit Website</span>
          </div>
          <button className="flex items-center p-2 px-4 border rounded-full md:gap-x-6 w-full md:w-auto justify-between">
            Take a look <ImNewTab />
          </button>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 py-4 md:border-b md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <div className="flex items-center justify-center w-10 h-10 p-1 border rounded-xl">
              <PiCurrencyDollarSimpleDuotone size={24} />
            </div>
            <span className="font-medium">Swoop Broker Portal</span>
          </div>
          <button className="flex items-center p-2 px-4 border rounded-full md:gap-x-6 w-full md:w-auto justify-between">
            Take a look <ImNewTab />
          </button>
        </div>
      </Container>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Hobbies */}
        <Container className="flex flex-col gap-y-2">
          <h2 className="text-2xl text-center md:text-left font-medium">
            Hobbies
          </h2>
          <div className="flex justify-between py-4 md:border-b">
            <div className="flex flex-col md:flex-row items-center gap-2 m-auto md:m-0">
              <div className="flex items-center justify-center w-10 h-10 p-1 border rounded-xl">
                <BiFootball size={24} />
              </div>
              <span className="font-medium">Football</span>
            </div>
          </div>
          <div className="flex md:justify-between py-4 md:border-b">
            <div className="flex flex-col md:flex-row items-center gap-2 m-auto md:m-0">
              <div className="flex items-center justify-center w-10 h-10 p-1 border rounded-xl">
                <BiGame size={24} />
              </div>
              <span className="font-medium">Gaming</span>
            </div>
          </div>
          <div className="flex justify-between py-4 md:border-b">
            <div className="flex flex-col md:flex-row items-center gap-2 m-auto md:m-0">
              <div className="flex items-center justify-center w-10 h-10 p-1 border rounded-xl">
                <BsAirplane size={24} />
              </div>
              <span className="font-medium">Travelling</span>
            </div>
          </div>
        </Container>
        {/* Gallery */}
        <Container className="flex flex-col gap-y-2">
          <Image
            alt="blog item"
            src="https://loremflickr.com/300/300"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover object-center w-full h-auto rounded-2xl"
          />
        </Container>
      </div>
      {/* Footer */}
      <footer>
        <Container className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-2">
          <p className="text-sm">&copy; {date.getFullYear()} Gad Jacobs</p>
          <div className="flex gap-2">
            <SocialLinks />
          </div>
          <p className="text-sm">Designed by Gad Jacobs</p>
        </Container>
      </footer>
    </main>
  );
}
