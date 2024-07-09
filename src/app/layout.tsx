import type { Metadata } from 'next';
import { Encode_Sans } from 'next/font/google';
import './globals.css';

const encodeSans = Encode_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gad Jacobs - Senior Frontend Engineer',
  description:
    'Gad Jacobs is a senior frontend engineer with over 6 years of experience building web, mobile and desktop applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${encodeSans.className} max-w-3xl m-auto p-6 border`}>{children}</body>
    </html>
  );
}
