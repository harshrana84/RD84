/* eslint-disable @next/next/no-img-element */
import ProductItem from "@/components/products/ProductItem";
import productService from "@/lib/services/productService";
import { convertDocToObj } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

// Banner Images import from local folder
import bannerImage_1 from "../../public/images/banner_images/home-page-03-hero-image-tile-01.jpg";
import bannerImage_2 from "../../public/images/banner_images/home-page-03-hero-image-tile-02.jpg";
import bannerImage_3 from "../../public/images/banner_images/home-page-03-hero-image-tile-03.jpg";
import bannerImage_4 from "../../public/images/banner_images/home-page-03-hero-image-tile-04.jpg";
import bannerImage_5 from "../../public/images/banner_images/home-page-03-hero-image-tile-05.jpg";
import bannerImage_6 from "../../public/images/banner_images/home-page-03-hero-image-tile-06.jpg";
import bannerImage_7 from "../../public/images/banner_images/home-page-03-hero-image-tile-07.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "The 84",
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    `${process.env.brandName} : Surat’s go-to eCommerce store for premium products. Shop kitchenware, decor, and organization essentials for an elevated living experience in South Gujarat.`,
};

export default async function Home() {
  // const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest();
  return (
    <>
      <div className="relative overflow-hidden mr-[-16px]">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 overflow-hidden rounded-2xl">
          <div className="relative mx-auto max-w-7xl px-0 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-xl">
              <h1 className="text-4xl font-medium  tracking-tighter text-gray-950 dark:text-slate-50 sm:text-6xl leading-tight">
                Surat’s Best Online Store for{" "}
                <span className="animated_text_bg font-semibold">Premium</span> Products.
              </h1>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 pr-2">
                Elevate your home with {process.env.brandName}. Browse our selection of
                kitchenware, decor, and organization items and order online
                today.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          {/* <Image
                            className="h-full w-full object-cover object-center"
                            src={bannerImage_1.src}
                            alt={process.env.brandName || 'RD Labels'}
                            width={200}
                            height={200}
                          /> */}
                          

                          <video
                            className="h-full w-full object-cover object-center"
                            data-type="mp4"
                            src="https://pouch.jumpshare.com/preview/aIlMzuMmJkxu-q_h7kIZBquyxOM6gBi2_2RT6vbbkmAEuEqm30ahlh07YslbGdvfu0zUmQa-hjSK5ZUmAtxyoRAYh214hA_8KJSifKRCXRP4PV2gJeHHMlq2TfCNriCXgk0KPRkh4fBz0bPwccw6W26yjbN-I2pg_cnoHs_AmgI.mp4"
                            loop
                            muted
                            playsInline
                            autoPlay
                            width={200}
                            height={200}
                          ></video>
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <video
                            className="h-full w-full object-cover object-center"
                            data-type="mp4"
                            src="https://pouch.jumpshare.com/preview/0NTU-0KRiAO06nJs_bPFoaaJi0jKqxu35JNTciU0N34RQLG96-HIrOVGLSPIcFpExqudvsfJ_4iHS9I7XP1Dj43YGqzB5Gep0o8Z-pkZH4KATBIhWJobIble3Cl_0SG2HLHGVRguSeb5s-NmmsoyXm6yjbN-I2pg_cnoHs_AmgI.mp4"
                            loop
                            muted
                            playsInline
                            autoPlay
                            width={200}
                            height={200}
                          ></video>
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <video
                            className="h-full w-full object-cover object-center"
                            data-type="mp4"
                            src="https://pouch.jumpshare.com/preview/hYtKZgv5IgXO9LVSYfRvIrEXgmX4trMIy2gfxzy4vvCvyt9b7HMw5Xev-xuOK_zb2nr9Hy_G474GX8OECxDuyvF1S9kKwp9gc5jXE4i3dttP2uRg8Uyc3eoh480eOMcFp8yQsdT0iP-Nen85XhYYeG6yjbN-I2pg_cnoHs_AmgI.mp4"
                            loop
                            muted
                            playsInline
                            autoPlay
                            width={200}
                            height={200}
                          ></video>
                        
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <video
                            className="h-full w-full object-cover object-center"
                            data-type="mp4"
                            src="https://pouch.jumpshare.com/preview/0-3SMb44B6LDbZHgmzdJcGi4srXfjpdP_mUmPDntR-dbrOHyqvFwdzdqeagaRCGCV68ZWGAPPFQZ_5l-9jH4bK7Lrswsu-eQo4ZH-wCvzPCvgUNYuJtari9GP9aWuL-LUjSMl-Ex405g0uxjMkDL4G6yjbN-I2pg_cnoHs_AmgI.mp4"
                            loop
                            muted
                            playsInline
                            autoPlay
                            width={200}
                            height={200}
                          ></video>
                        
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <video
                            className="h-full w-full object-cover object-center"
                            data-type="mp4"
                            src="https://pouch.jumpshare.com/preview/U-Ju-ljZ47u9nyKJQD83iEW2M7npO5Kd37782I3emLKv9S8rgDIKS564q1NAW5tA5zcFvz6IRJnz3Zt1vH3zse1zj9mQgxBSf6NaZNVQTqjrO-6y5f9zfkUCs2Py3dTXjfsHkfrWwC3ufsJdWRt1SW6yjbN-I2pg_cnoHs_AmgI.mp4"
                            loop
                            muted
                            playsInline
                            autoPlay
                            width={200}
                            height={200}
                          ></video>
                        
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <video
                            className="h-full w-full object-cover object-center"
                            data-type="mp4"
                            src="https://pouch.jumpshare.com/preview/nd8scG8S42qMbIu8AZlQDfBwaBf4wjh4irPAVZ2cPLf0THSt9xEamlzHKfjcP3Eu0DN8DYiF-y9Cqbf_-8esxaKxeFbO-qt5GUyzX4FtDgL05t1tDnd2W0Iq-6KZHw4MhqPNHOzYUQQaKg5zIRChOW6yjbN-I2pg_cnoHs_AmgI.mp4"
                            loop
                            muted
                            playsInline
                            autoPlay
                            width={200}
                            height={200}
                          ></video>
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <video
                            className="h-full w-full object-cover object-center"
                            data-type="mp4"
                            src="https://pouch.jumpshare.com/preview/rtJp4wfKiDDW1izB8kYfsBTdcyCUIehb2b9PySqBM2z3SYAr0R602TMUWSts4bgghWmreB3vWpHxDj13OmvCRgoBSdvkY25bnGi3j60vytdsabzAV8BEpo8kVnW0WG5Z_OoLVZIRqSsUmJDHwD9KM26yjbN-I2pg_cnoHs_AmgI.mp4"
                            loop
                            muted
                            playsInline
                            autoPlay
                            width={200}
                            height={200}
                          ></video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Link href="/search" className="inline-block  border border-transparent py-3 px-8 text-center font-medium text-white animated_btn bg-orange-700 hover:bg-orange-600 transition ease-linear rounded-lg">Shop Now</Link> */}
                <Link href="/search" className="custom_btn">
                  <span className="text-lg">Shop Now</span>
                  <svg
                    viewBox="-5 -5 110 110"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2
        id="sale-heading"
        className="text-3xl font-semibold dark:text-gray-200 text-gray-900 text-center mt-20 tracking-tighter"
      >
        Trending
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-kesari dark:text-gray-200 mx-2 inline opacity-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>
        Products
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mb-0 place-items-start mt-8">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>

      <div className="relative overflow-hidden ">
        <section
          aria-labelledby="testimonial-heading"
          className="relative mx-auto  py-20 px-4 sm:px-6 lg:py-32 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2
              id="testimonial-heading"
              className="text-2xl font-semibold tracking-tight dark:text-gray-200 text-gray-900 text-center"
            >
              What are people saying?
            </h2>

            <div className="mt-12 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              <blockquote className="sm:flex lg:block">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="flex-shrink-0 dark:text-gray-200 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <p className="text-sm sm:text-lg dark:text-gray-300 text-gray-600">
                    My order arrived super quickly. The product is even better
                    than I hoped it would be. Very happy customer over here!
                  </p>
                  <cite className="mt-4 block font-semibold not-italic dark:text-gray-200 text-gray-900">
                    Sarah Peters, New Orleans
                  </cite>
                </div>
              </blockquote>

              <blockquote className="sm:flex lg:block">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="flex-shrink-0 dark:text-gray-200 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <p className="text-sm sm:text-lg dark:text-gray-300 text-gray-600">
                    I had to return a purchase that didn&rsquo;t fit. The whole
                    process was so simple that I ended up ordering two new
                    items!
                  </p>
                  <cite className="mt-4 block font-semibold not-italic dark:text-gray-200 text-gray-900">
                    Kelly McPherson, Chicago
                  </cite>
                </div>
              </blockquote>

              <blockquote className="sm:flex lg:block">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="flex-shrink-0 dark:text-gray-200 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <p className="text-sm sm:text-lg dark:text-gray-300 text-gray-600">
                    Now that I&rsquo;m on holiday for the summer, I&rsquo;ll
                    probably order a few more shirts. It&rsquo;s just so
                    convenient, and I know the quality will always be there.
                  </p>
                  <cite className="mt-4 block font-semibold not-italic dark:text-gray-200 text-gray-900">
                    Chris Paul, Phoenix
                  </cite>
                </div>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
