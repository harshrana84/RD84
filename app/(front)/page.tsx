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
      {/* ********* Banner ********* */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100 rounded-t-lg"></div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2830&amp;q=80&amp;sat=-100" alt="People working on laptops" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-orange-700 mix-blend-multiply"></div>
            </div>
            <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Take control of your</span>
                <span className="block text-white">customer support</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white opacity-90 sm:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:space-y-0">
                  <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-xl font-medium text-orange-700 shadow-sm hover:bg-indigo-50 sm:px-8">Get started</a>
                  {/* <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-orange-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">Live demo</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********* End Banner ********* */}


      {/* ****** Logo Section ***** */}
      <div className="bg-gray-100 rounded-b-lg">
        <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
          <p className="text-center text-base font-semibold text-gray-500">Trusted by over 5 very average small businesses</p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
            </div>
          </div>
        </div>
      </div>
      {/* ****** End Logo Section ***** */}


      {/* ****** Image with Text Section ****** */}
      <div className="relative mt-20">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"></div>
              <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"></rect>
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
              {/* <!-- Testimonial card--> */}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.6&amp;fp-z=3&amp;width=1440&amp;height=1440&amp;sat=-100" alt="" />
                <div className="absolute inset-0 bg-orange-500 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-800 via-orange-600 opacity-90"></div>
                <div className="relative px-8">
                  <div>
                    <img className="h-12" src="https://tailwindui.com/img/logos/workcation.svg?color=white" alt="Workcation" />
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-orange-800" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                      </svg>
                      <p className="relative">Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.</p>
                    </div>

                    <footer className="mt-4">
                      <p className="text-base font-semibold text-orange-200">Sarah Williams, CEO at Workcation</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* <!-- Content area --> */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">On a mission to empower teams</h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                <p className="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                <p className="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
              </div>
            </div>

            {/* <!-- Stats section --> */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                <div className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-medium text-gray-500">Founded</dt>
                  <dd className="text-3xl font-bold tracking-tight text-gray-900">2021</dd>
                </div>

                <div className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-medium text-gray-500">Employees</dt>
                  <dd className="text-3xl font-bold tracking-tight text-gray-900">5</dd>
                </div>

                <div className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-medium text-gray-500">Beta Users</dt>
                  <dd className="text-3xl font-bold tracking-tight text-gray-900">521</dd>
                </div>

                <div className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-medium text-gray-500">Raised</dt>
                  <dd className="text-3xl font-bold tracking-tight text-gray-900">$25M</dd>
                </div>
              </dl>
              <div className="mt-10">
                <a href="#" className="text-base font-medium text-orange-500">Learn more about how we're changing the world →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ****** End Image with Text Section ****** */}


{/* ************* USP's Section ***************** */}
<div className="relative bg-white">
  <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
    <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80" alt="Support team"/>
  </div>
  <div className="relative mx-auto max-w-7xl py-8 px-6 sm:py-12 lg:py-16">
    <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
          {/* <!-- Heroicon name: outline/users --> */}
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
          </svg>
        </div>
      </div>
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Deliver what your customers want every time</h2>
      <p className="mt-6 text-lg text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur deserunt voluptatibus.</p>
      <div className="mt-8 overflow-hidden">
        <dl className="-mx-8 -mt-8 flex flex-wrap">
          <div className="flex flex-col px-8 pt-8">
            <dt className="order-2 text-base font-medium text-gray-500">Delivery</dt>
            <dd className="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">24/7</dd>
          </div>
          <div className="flex flex-col px-8 pt-8">
            <dt className="order-2 text-base font-medium text-gray-500">Pepperoni</dt>
            <dd className="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">99.9%</dd>
          </div>
          <div className="flex flex-col px-8 pt-8">
            <dt className="order-2 text-base font-medium text-gray-500">Calories</dt>
            <dd className="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">100k+</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>
{/* ************* End USP's Section ***************** */}


      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pt-18 sm:pt-20 lg:pt-24">Trending Products</h2>
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
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pt-18 sm:pt-20 lg:pt-24"
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

 

{/* ************* Testimonial ************ */}
<div className="relative">
      {/* <!-- Decorative background --> */}
      <div aria-hidden="true" className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50"></div>

      <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-rose-500 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
          <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
            <img src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1216&amp;q=80" alt="" className="h-full w-full object-cover"/>
          </div>
          <div className="relative lg:col-span-1">
            <img className="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt=""/>
            <blockquote className="mt-6 text-white">
              <p className="text-xl font-medium sm:text-2xl">This app has completely transformed how we interact with customers. We've seen record bookings, higher customer satisfaction, and reduced churn.</p>
              <footer className="mt-6">
                <p className="flex flex-col font-medium">
                  <span>Marie Chilvers</span>
                  <span>CEO, Workcation</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
{/* ************* End Testimonial ************ */}

      {/* ******** Footer ********** */}
      <footer className="bg-gray-50" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">Footer</h2>
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8 lg:pt-24">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-base font-medium text-gray-900">Solutions</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Marketing</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Analytics</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Commerce</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Insights</a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-base font-medium text-gray-900">Support</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Documentation</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Guides</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">API Status</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-base font-medium text-gray-900">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Jobs</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Press</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Partners</a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-base font-medium text-gray-900">Legal</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Claim</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 xl:mt-0">
          <h3 className="text-base font-medium text-gray-900">Subscribe to our newsletter</h3>
          <p className="mt-4 text-base text-gray-500">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form className="mt-4 sm:flex sm:max-w-md">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input type="email" name="email-address" id="email-address"  className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500" placeholder="Enter your email"/>
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button type="submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
        <div className="flex space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Dribbble</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
        <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">© 2020 Your Company, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
      {/* ******** END Footer ********** */}
    </>
  );
}
