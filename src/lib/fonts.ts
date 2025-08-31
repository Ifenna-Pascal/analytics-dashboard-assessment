import { MuseoModerno, Poppins, Roboto_Mono } from 'next/font/google';

export const fontPoppins = Poppins({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins-sans',
});

export const fontRobotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const fontMuseMode = MuseoModerno({
  style: 'normal',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-muse-sans',
});
