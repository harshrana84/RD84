'use client'

import useCartService from '@/lib/hooks/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import saleIcon from "../../../public/images/SVG Icons/sale.svg"

export default function CartDetails() {
  const router = useRouter()
  const { items, itemsPrice, decrease, increase } = useCartService()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return <></>

  function getShippingDate() {
    const currentDate = new Date();
    const shippingDate = new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000); // Add 4 days in milliseconds
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;
    return shippingDate.toLocaleDateString('en-US', options);
  }

  return (
    <>
      {items.length === 0 ? (
        <div className="mt-20 text-center">
          {/* <img src={saleIcon.src} alt="sale is live now" className='w-96 mx-auto mb-5' /> */}
          <h2 className='mb-8 text-2xl'>Cart is empty.</h2> <Link href="/" className='btn btn-sm border-none bg-kesari text-white font-medium hover:bg-orange-800'>Go shopping</Link>
        </div>
      ) : (
        <>
          {/* <div className="grid md:grid-cols-4 md:gap-5">
            <div className="overflow-x-auto md:col-span-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.slug}>
                      <td>
                        <Link
                          href={`/product/${item.slug}`}
                          className="flex items-center"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          <span className="px-2">{item.name}</span>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => decrease(item)}
                        >
                          -
                        </button>
                        <span className="px-2">{item.qty}</span>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => increase(item)}
                        >
                          +
                        </button>
                      </td>
                      <td>${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <ul>
                    <li>
                      <div className="pb-3 text-xl">
                        Subtotal ({items.reduce((a, c) => a + c.qty, 0)}) : $
                        {itemsPrice}
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push('/shipping')}
                        className="btn btn-primary w-full"
                      >
                        Proceed to Checkout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* New Custom Cart Details */}
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
            <h1 className="text-center text-3xl font-bold tracking-tight text-base-900 sm:text-4xl">Your Quote List</h1>

            <div className="mt-12">
              <section aria-labelledby="cart-heading">
                <h2 id="cart-heading" className="sr-only">Items in your Your Quote List</h2>

                <ul role="list" className="divide-y divide-base-200 border-t border-b border-base-200">

                  {items.map((item) => (
                    <li className="flex py-6" key={item.slug}>
                      <div className="flex-shrink-0">
                        <Link
                          href={`/product/${item.slug}`}
                          className="flex items-center"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={200}
                            height={200}
                            className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                          ></Image>

                        </Link>
                      </div>

                      <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                        <div>
                          <div className="flex justify-between">
                            <h4 className="text-sm">
                              <Link href={`/product/${item.slug}`} className="font-medium text-base-700 hover:text-base-800">{item.name}</Link>
                            </h4>
                            <p className="ml-4 text-md font-medium text-indigo-500 dark:text-gray-400">₹{item.price}</p>
                          </div>
                          <p className="mt-2 flex items-center space-x-1 text-xs text-base-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-yellow-400">
                              <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                            </svg>
                            <span>Reply within <b>33 Second</b></span>
                          </p>
                        </div>

                        <div className="mt-2 flex flex-1 items-end justify-between flex-wrap gap-2">
                          <p className="flex items-start sm:items-center space-x-2 text-sm text-gray-700 dark:text-gray-400">
                            {/* <svg className="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd"></path>
                            </svg> */}
                            <span className='sm:text-sm text-xs'>
                              Will ship by <span className="font-semibold">{getShippingDate()}</span>
                              {/* <span className="ml-0 mt-2 sm:mt-0 sm:ml-2 inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                                <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                                  <circle cx="4" cy="4" r="3" />
                                </svg>
                                Ship by Delhivery
                              </span> */}
                            </span>
                          </p>
                          <div>
                            <button type="button" className="text-sm font-medium text-base-600 hover:text-base-500">
                              <span>
                                <button
                                  className="btn btn-sm dark:bg-slate-800 bg-slate-200 shadow-none btn-circle font-medium"
                                  type="button"
                                  onClick={() => decrease(item)}
                                >
                                  -
                                </button>
                                <span className="px-2">{item.qty}</span>
                                <button
                                  className="btn btn-sm dark:bg-slate-800 bg-slate-200 shadow-none btn-circle font-medium"
                                  type="button"
                                  onClick={() => increase(item)}
                                >
                                  +
                                </button>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}

                </ul>
              </section>

              <section aria-labelledby="summary-heading" className="mt-10">
                <h2 id="summary-heading" className="sr-only">Order summary</h2>

                <div>
                  <dl className="space-y-4">
                    <div className="flex items-center justify-between">
                      <dt className="text-base font-medium text-base-900 flex items-center justify-between">Subtotal
                        <span className="ml-3 mr-2 inline-flex items-center rounded-full dark:bg-slate-700 dark:text-slate-400 bg-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          Total Quantity : {items.reduce((a, c) => a + c.qty, 0)}
                        </span>
                      </dt>
                      <dd className="ml-4 text-base font-medium dark:text-white dark:text-gray-950">
                        <span className="text-2xl">₹ {itemsPrice}</span>
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-1 text-sm text-base-500">Shipping and taxes will be calculated at checkout.</p>
                </div>

                <div className="mt-10">
                  <button type="submit" onClick={() => router.push('/shipping')} className="btn w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-base-50">Checkout
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </button>
                </div>

                <div className="mt-6 text-center text-sm text-base-500">
                  <p>
                    or
                    <Link href="/" className="ml-1 font-medium text-indigo-600 hover:text-indigo-500">
                      Continue Shopping
                      <span aria-hidden="true"> →</span>
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  )
}
