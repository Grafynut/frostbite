import { Maven_Pro, Nunito_Sans, Galad } from 'next/font/google';
import './globals.css'
import Navbar from './ui/navbar'
import Footer from './ui/footer';
import Head from 'next/head';

const nunito_Sans = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Wellcome to Frostbite',
  description: 'This is ice-creame company website build in next js develop by subhajit maity',
  developerEmail: "su6hajit@gmail.com"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className={nunito_Sans.className}>
        <main className="min-h-screen justify-between bg-white max-w-full">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
