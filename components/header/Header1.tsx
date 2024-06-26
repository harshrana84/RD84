import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { SearchBox } from './SearchBox'
import logo from '../../public/images/logo.png'
import logo_text from '../../public/images/logo-text.png'
import Image from 'next/image'

const Header = () => {
  const whatsappNumber = process.env.whatsAppNumber || '9924817983';
  return (
    <header className="bg-slate-200 dark:bg-slate-950 sticky top-0 z-50">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center lg:hidden">
              <label htmlFor="my-drawer" className="stroke-current btn btn-sm bg-white border-none dark:bg-slate-900 dark:text-gray-200 text-gray-950 hover:text-slate-200 cursor-pointer shadow-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 text-3xl font-semibold dark:text-gray-200 text-gray-900 text-center tracking-tight"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <Link href={`https://wa.me/${whatsappNumber}`} className="ml-2 p-2 text-base-400 hover:text-base-500 text-gray-950 hover:text-base-500 block cursor-pointer">
                <span className="sr-only">Message Me</span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-6 h-6"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <path
                    style={{ fill: '#ffffff' }}
                    d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0  S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"
                  />
                  <path
                    style={{ fill: '#55CD6C' }}
                    d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662  c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234  c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"
                  />
                  <path
                    style={{ fill: '#FEFEFE' }}
                    d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297  c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048  c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359  c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248  c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062  l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"
                  />
                </svg>
              </Link>
            </div>

            <div className="hidden lg:block lg:flex-1 lg:self-stretch">
              <div className="flex h-full space-x-8">

                <div className="flex items-center text-sm font-medium text-base-700 hover:text-base-800">
                  <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <Link href="/search" className="flex items-center text-sm font-medium dark:text-gray-300 text-gray-700 hover:text-gray-800">Our Products</Link>
                <Link href="/" className="flex items-center text-sm font-medium dark:text-gray-300 text-gray-700 hover:text-gray-800">Stores</Link>
              </div>
            </div>

            <Link href="/" className="logo flex bg-slate-200 border-4 border-slate-200 dark:border-slate-950 dark:bg-slate-950 rounded-full relative top-6 z-[84]">
              <span className="sr-only">Radiant Destiny</span>
              <div className='relative'>

                <Image
                  className="h-20 sm:h-[6.2rem] w-auto spin p-2"
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

            {/* Right SIde Link ------------------------ */}

            <div className="flex flex-1 items-center justify-end">
              <Menu />
            </div>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Header
