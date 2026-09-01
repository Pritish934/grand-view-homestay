import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: 'Grand View Homestay — Mawsmai, Sohra',
  description:
    'A small homestay on the edge of Mawsmai, Sohra, where the valley opens up right outside your window. Sunrise over the hills, stars at night, and quiet in between.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
