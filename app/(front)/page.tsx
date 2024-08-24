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

      <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">

        <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Best Deal</h1>
              <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2">Save upto <span className="font-bold">50%</span></p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
              <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" className="" />
            </div>
          </div>
          <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Game Console</h1>
              <p className="text-base lg:text-xl text-gray-800 dark:text-white">Save Upto <span className="font-bold">30%</span></p>
            </div>
            <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
              <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center pt-12 sm:pt-20 lg:pt-24  tracking-widest uppercase">Our Catelog</h2>



      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5 mb-0 place-items-center mt-8 mb-8">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>


      <div className="text-center pt-5 mb-8">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>



      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 the84. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
      </footer>

    </>
  );
}
