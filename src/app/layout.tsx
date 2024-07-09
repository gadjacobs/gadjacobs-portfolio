import Navbar from '@/components/Navbar/Navbar';
import type { Metadata } from 'next';
import { Encode_Sans, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/utils/ThemeProvider';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceCodePro.className} max-w-3xl m-auto p-6 flex flex-col gap-y-4`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
