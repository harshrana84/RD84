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



      <h2 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center pt-18 sm:pt-20 lg:pt-24  tracking-widest uppercase"><span className="font-bold">Our</span> Catelog</h2>

      
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 mb-0 place-items-start mt-8">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>


    </>
  );
}
