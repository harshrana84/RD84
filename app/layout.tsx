import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import DrawerButton from '@/components/DrawerButton'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/header/Header1'
import Link from 'next/link'
import fav_icon from '../public/images/favicon.ico'
import logo from '../public/images/logo.png'
import logo_text from '../public/images/logo-text.png'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Radiant Destiny',
  description: 'Modern ECommerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="uIf2WdUrATlXLc6MFQpXjzwQZUqRbuyjwCYChXx9nGE" />
        <link rel="icon" href={fav_icon.src} sizes="any" />
        {(process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="uzmjYNidBmfTkrjuGX2MCMtkbOc1KPZa481BWSVJ"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}

      </head>
      <body className={inter.className}>
        <Providers>
          <div className="drawer tracking-tight">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col dark:bg-gray-900 bg-zinc-50">
                <Header />
                {children}
                <footer className="footer footer-center py-8 px-4 text-base-content bg-slate-200 dark:bg-slate-950 ">
                  <Link href="/" className="flex bg-slate-200 border-2 border-slate-200 dark:border-slate-950 dark:bg-slate-950 rounded-full relative">
                    <span className="sr-only">{process.env.brandName}</span>
                    <div className='relative'>

                      <Image
                        className="h-24 sm:h-[6.2rem] w-auto spin p-2"
                        src={logo.src}
                        alt={process.env.brandName || 'RD Labels'}
                        width={200}
                        height={200}
                      />
                      <Image
                        src={logo_text.src}
                        className="rounded_text absolute top-0 left-0 w-full h-full spin-reverse"
                        alt={process.env.brandName || 'RD Labels'}
                        width={200}
                        height={200}
                      />
                    </div>
                  </Link>
                  <p className='text-gray-600 dark:text-gray-200'>
                    Copyright © 2023 - All right reserved by <span className="block sm:inline font-semibold">{process.env.brandName}</span>
                  </p>
                </footer>
              </div>
            </div>
            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
