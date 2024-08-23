import AddToCart from '@/components/products/AddToCart'
import { convertDocToObj } from '@/lib/utils'
import productService from '@/lib/services/productService'
import Image from 'next/image'
import { Rating } from '@/components/products/Rating'

const currentDate = new Date();
const currentSeconds = currentDate.getSeconds();

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return <div>Product not found 🥺</div>
  }
  return (
    <>
      {/* <div className="my-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} ratings`}
              />
            </li>
            <li> {product.brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card  bg-base-200 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: '',
                      size: '',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
 */}


      <div className="rounded-lg">
        <div className="mx-auto my-0 sm:my-8 max-w-2xl px-0 pt-5 pb-5 sm:px-6 sm:pt-20 sm:pb-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 gap-8 grid sm:block">


         

          <div className="lg:max-w-lg lg:self-start">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                <li>
                  <div className="flex items-center text-sm">
                    <a href="javascript:void(0);" className="font-medium text-gray-500 hover:">{process.env.brandName}</a>

                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300">
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                    </svg>
                  </div>
                </li>

                <li>
                  <div className="flex items-center text-sm">
                    <a href="javascript:void(0);" className="font-medium text-gray-500 hover:">{product.brand}</a>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">{product.name}</h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">Product information</h2>

              <div className="flex items-center">
                <p className="text-lg  sm:text-xl">₹{product.price}</p>

                <div className="ml-4 border-l border-gray-300 pl-4">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path>
                        </svg>


                        <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path>
                        </svg>


                        <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path>
                        </svg>


                        <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path>
                        </svg>


                        <svg className="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="sr-only">4 out of 5 stars</p>
                    </div>
                    <p className="ml-2 sm:text-sm text-xs text-gray-500">{Math.round(product.price - (product.price / 4))} + Positive Reviews</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-6">

                <span className="inline-flex items-center rounded-full dark:bg-green-800/60 bg-green-900 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 inline mr-1.5 animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <span className="dark:text-gray-400 dark:text-green-100 text-slate-300 font-light text-xs opacity-95"><b className="text-green-50">{currentSeconds * 2}</b> Peoples watching right now</span>
                </span>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">{product.description}</p>
              </div>



              {product.countInStock > 0 ? (
                <div className="mt-6 flex items-center">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                  </svg>
                  <p className="ml-2 text-sm ">In stock and ready to ship</p>
                </div>
              ) : (
                <div className="mt-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-frown h-5 w-5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>

                  <p className="ml-2 text-sm ">Currently Unavailable</p>
                </div>
              )}

            </section>
            <div className="mt-2 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">Product options</h2>

                <form>
                  <div className="mt-4">
                    <div className="group inline-flex text-sm  hover:opacity-80 transition ease-linear">
                      <span><label htmlFor="my_modal_7">Return of Refund Policy</label></span>

                      {/* Modal COntent */}
                      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                          <div className="mx-auto w-max mb-4"><svg fill="currentColor" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 511.999 511.999" >
                            <g>
                              <g>
                                <path d="M501.844,359.148H398.722l-69.047-29.292c-0.99-0.421-2.054-0.637-3.131-0.637H200.415
			c-22.103,0-40.083,17.981-40.083,40.083v17.102c0,3.931,0.569,7.733,1.629,11.326l-98.692-42.678
			c-20.019-8.657-42.948,0.033-52.204,19.779l-4.918,10.49c-4.622,9.861-5.059,20.905-1.232,31.101
			c3.828,10.196,11.426,18.226,21.398,22.608l72.537,31.884c4.052,1.784,8.783-0.06,10.565-4.114
			c1.782-4.053-0.061-8.783-4.114-10.565l-72.536-31.884c-5.983-2.629-10.541-7.447-12.84-13.564
			c-2.295-6.117-2.033-12.744,0.74-18.661l4.918-10.49c5.553-11.849,19.31-17.06,31.323-11.868l129.639,56.06
			c1.004,0.434,2.088,0.658,3.182,0.658h10.689H311.58c4.428,0,8.017-3.588,8.017-8.017c0-4.428-3.588-8.017-8.017-8.017H200.415
			c-13.261,0-24.05-10.789-24.05-24.05v-17.102c0-13.261,10.789-24.05,24.05-24.05h124.499l69.047,29.292
			c0.99,0.421,2.054,0.637,3.131,0.637h96.735v76.38l-107.538,43.812c-0.966,0.393-1.984,0.593-3.026,0.593H197.372
			c-1.118,0-2.204-0.228-3.226-0.678l-63.188-27.775c-4.055-1.781-8.783,0.061-10.566,4.113c-1.782,4.053,0.061,8.784,4.113,10.566
			l63.189,27.775c3.069,1.349,6.325,2.032,9.678,2.032h185.891c3.124,0,6.176-0.599,9.074-1.778l112.532-45.847
			c3.018-1.229,4.992-4.164,4.992-7.424v-89.787C509.861,362.737,506.272,359.148,501.844,359.148z"/>
                              </g>
                            </g>
                            <g>
                              <g>
                                <path d="M346.137,194.049c-1.157-4.274-5.556-6.801-9.832-5.644c-4.273,1.156-6.8,5.558-5.644,9.832
			c1.879,6.945,2.831,14.152,2.831,21.421c0,45.089-36.681,81.77-81.77,81.77s-81.77-36.681-81.77-81.77
			c0-45.089,36.681-81.77,81.77-81.77c26.718,0,51.809,13.102,67.118,35.05c2.532,3.63,7.528,4.525,11.161,1.988
			c3.631-2.533,4.521-7.53,1.988-11.161c-18.305-26.243-48.312-41.91-80.267-41.91c-53.929,0-97.804,43.875-97.804,97.804
			c0,53.929,43.875,97.804,97.804,97.804s97.804-43.875,97.804-97.804C349.527,210.975,348.387,202.359,346.137,194.049z"/>
                              </g>
                            </g>
                            <g>
                              <g>
                                <path d="M281.652,190.263c4.428,0,8.017-3.588,8.017-8.017c0-4.428-3.588-8.017-8.017-8.017H259.74v-9.086
			c0-4.428-3.588-8.017-8.017-8.017c-4.428,0-8.017,3.588-8.017,8.017v9.086h-6.948c-10.314,0-18.706,8.392-18.706,18.706v17.102
			c0,10.314,8.392,18.706,18.706,18.706h6.948v22.447h-21.912c-4.428,0-8.017,3.588-8.017,8.017c0,4.428,3.588,8.017,8.017,8.017
			h21.912v9.086c0,4.428,3.588,8.017,8.017,8.017c4.428,0,8.017-3.588,8.017-8.017v-9.086h6.948
			c10.314,0,18.706-8.392,18.706-18.706v-17.102c0-10.314-8.392-18.706-18.706-18.706h-6.948v-22.447H281.652z M243.706,212.71
			h-6.948c-1.474,0-2.672-1.198-2.672-2.672v-17.102c0-1.474,1.198-2.672,2.672-2.672h6.948V212.71z M266.687,228.743
			c1.474,0,2.672,1.198,2.672,2.672v17.102c0,1.474-1.198,2.672-2.672,2.672h-6.948v-22.447H266.687z"/>
                              </g>
                            </g>
                            <g>
                              <g>
                                <path d="M502.901,250.191c-5.443-0.724-19.158-3.753-28.951-16.239c-6.959-8.877-8.628-18.505-9.004-23.453
			c-0.317-4.179-3.802-7.41-7.994-7.41s-7.677,3.229-7.994,7.41c-0.376,4.949-2.046,14.577-9.004,23.453
			c-9.793,12.486-23.509,15.516-28.951,16.239c-3.985,0.529-6.962,3.927-6.962,7.947c0,4.02,2.977,7.417,6.962,7.947
			c5.443,0.724,19.158,3.753,28.951,16.239c6.958,8.877,8.628,18.505,9.004,23.453c0.317,4.179,3.802,7.41,7.994,7.41
			s7.677-3.229,7.994-7.41c0.376-4.949,2.046-14.576,9.003-23.452c9.794-12.488,23.509-15.517,28.952-16.24
			c3.985-0.529,6.962-3.927,6.962-7.947C509.863,254.118,506.886,250.721,502.901,250.191z M461.331,272.432
			c-1.667,2.127-3.119,4.278-4.38,6.421c-1.262-2.144-2.713-4.295-4.381-6.422c-5.031-6.415-10.793-11.007-16.419-14.293
			c5.628-3.286,11.388-7.878,16.419-14.293c1.669-2.128,3.12-4.279,4.381-6.422c1.262,2.144,2.713,4.295,4.381,6.422
			c5.031,6.416,10.793,11.008,16.419,14.293C472.123,261.424,466.362,266.017,461.331,272.432z"/>
                              </g>
                            </g>
                            <g>
                              <g>
                                <path d="M301.947,47.101c-5.443-0.724-19.158-3.753-28.951-16.239c-6.958-8.877-8.628-18.505-9.004-23.453
			c-0.316-4.18-3.801-7.41-7.993-7.41s-7.677,3.229-7.994,7.41c-0.376,4.949-2.046,14.577-9.004,23.453
			c-9.793,12.486-23.509,15.516-28.951,16.239c-3.984,0.53-6.961,3.927-6.961,7.947c0,4.02,2.977,7.417,6.962,7.947
			c5.443,0.724,19.158,3.753,28.951,16.239c6.958,8.877,8.628,18.505,9.004,23.453c0.317,4.179,3.802,7.41,7.994,7.41
			c4.192,0,7.677-3.229,7.994-7.41c0.376-4.949,2.046-14.576,9.003-23.452c9.794-12.488,23.509-15.517,28.952-16.24
			c3.983-0.53,6.96-3.927,6.96-7.947C308.909,51.028,305.932,47.631,301.947,47.101z M260.379,69.342
			c-1.667,2.127-3.119,4.278-4.38,6.421c-1.262-2.144-2.713-4.295-4.381-6.422c-5.031-6.415-10.793-11.007-16.419-14.293
			c5.628-3.286,11.388-7.878,16.419-14.293c1.669-2.128,3.12-4.279,4.381-6.422c1.262,2.144,2.713,4.295,4.381,6.422
			c5.031,6.416,10.793,11.008,16.419,14.293C271.171,58.334,265.41,62.927,260.379,69.342z"/>
                              </g>
                            </g>
                            <g>
                              <g>
                                <path d="M100.997,250.191c-5.442-0.724-19.158-3.754-28.951-16.239c-6.959-8.877-8.628-18.505-9.004-23.453
			c-0.319-4.18-3.803-7.41-7.995-7.41s-7.677,3.229-7.994,7.41c-0.376,4.949-2.046,14.577-9.003,23.452
			c-9.794,12.488-23.509,15.517-28.952,16.24c-3.984,0.53-6.961,3.927-6.961,7.947c0,4.02,2.977,7.417,6.962,7.947
			c5.443,0.724,19.158,3.753,28.951,16.239c6.958,8.877,8.628,18.505,9.004,23.453c0.318,4.179,3.802,7.41,7.994,7.41
			s7.677-3.229,7.994-7.41c0.376-4.949,2.046-14.576,9.003-23.452c9.794-12.488,23.509-15.517,28.952-16.24
			c3.985-0.529,6.962-3.927,6.962-7.947C107.959,254.118,104.982,250.721,100.997,250.191z M59.427,272.432
			c-1.667,2.127-3.119,4.278-4.38,6.421c-1.262-2.144-2.713-4.295-4.381-6.422c-5.031-6.415-10.793-11.007-16.419-14.293
			c5.628-3.286,11.389-7.879,16.42-14.294c1.667-2.127,3.119-4.277,4.38-6.421c1.261,2.144,2.713,4.294,4.38,6.421
			c0,0,0,0.001,0.001,0.001c5.031,6.416,10.793,11.008,16.419,14.293C70.219,261.424,64.458,266.017,59.427,272.432z"/>
                              </g>
                            </g>
                          </svg></div>

                          <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
                            <p className="text-gray-600 mb-4">1. <strong>Refund Eligibility:</strong> We offer refunds within 30 days of purchase. To be eligible, the item must be unused and in the same condition as received.</p>
                            <p className="text-gray-600 mb-4">2. <strong>Initiating a Refund:</strong> To initiate a refund, please contact our customer support team with your order details. We may require proof of purchase.</p>
                            <p className="text-gray-600 mb-4">3. <strong>Refund Process:</strong> Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will be automatically applied to your original payment method.</p>
                            <p className="text-gray-600">4. <strong>Non-Refundable Items:</strong> Some items are non-refundable, including downloadable software, gift cards, and perishable goods. These exclusions will be clearly mentioned at the time of purchase.</p>
                          </div>

                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                      </div>
                      {/* ENd Modal COntent */}

                      <svg className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6">
                    {product.countInStock !== 0 && (
                      <div className="card-actions justify-start">
                        <AddToCart
                          item={{
                            ...convertDocToObj(product),
                            qty: 0,
                            color: '',
                            size: '',
                          }}
                        />
                      </div>
                    )}

                  </div>
                  <div className="mt-6 text-start">

                    <label htmlFor="my_modal_8" className='group inline-flex text-base font-medium'>
                      <svg className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                      </svg>
                      <span className="  hover:opacity-80 transition ease-linear">Lifetime Guarantee</span>
                    </label>

                    {/* Modal COntent */}
                    <input type="checkbox" id="my_modal_8" className="modal-toggle" />
                    <div className="modal" role="dialog">
                      <div className="modal-box">
                        <div className='bg-white rounded-full w-max mx-auto'>
                          <Image
                            className="-my-1 mx-auto"
                            src="https://i.postimg.cc/q7Wzc89n/guarantee-svgrepo-com.png"
                            alt="images"
                            width={100}  // Set the width of the image (you can adjust this value)
                            height={100} // Set the height of the image (you can adjust this value)
                            layout="responsive" // Set the layout to responsive for 100% width
                          />
                        </div>
                      </div>
                      <label className="modal-backdrop" htmlFor="my_modal_8">Close</label>
                    </div>
                    {/* ENd Modal COntent */}
                  </div>
                </form>
              </section>
            </div>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                className='h-full w-full object-cover object-center'
                width={640}
                height={640}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              ></Image>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  )
}
