import {Roboto} from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
