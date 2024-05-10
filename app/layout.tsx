import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import Head from 'next/head';


export const metadata = {
  title: 'Dynamic Startups - Empowering Entrepreneurs',
  description: 'Dynamic Startups specializes in guiding early-stage startups through every phase of their journey, providing comprehensive support to help entrepreneurs succeed.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
        {/* Add other meta tags as needed */}
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
