import localFont from "next/font/local";
import "./globals.css";
import { Inria_Sans } from 'next/font/google';
import './globals.css'; 

const inriaSans = Inria_Sans({
  weight: ['300', '400', '700'],  // Select weights you need
  subsets: ['latin'],  // Optional, can also add 'latin-ext' or other subsets
  style: ['normal', 'italic'],  // Optional, depending on your needs
});

export const metadata = {
  title: 'My Next.js App',
  description: 'A sample app with Inria Sans font.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inriaSans.className}>
      <body>{children}</body>
    </html>
  );
}
