'use client'

import useCartService from '@/lib/hooks/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CartDetails() {
  const router = useRouter()
  const { items, itemsPrice, decrease, increase } = useCartService()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  function getShippingDate() {
    const currentDate = new Date()
    const shippingDate = new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000) // Add 4 days in milliseconds
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const
    return shippingDate.toLocaleDateString('en-US', options)
  }


function handleCheckout() {
  // Construct the message content
  const message = `
*Good Afternoon,:*

${items.map(item => (
    `*Product:* ${item.name}\n` +
    `*Quantity:* ${item.qty}\n` +
    `*Price:* ₹${item.price}\n` +
    `*Product URL:* ${window.location.origin}/product/${item.slug}\n` // Add product URL
  )).join('\n')}

*| Please send a quote. |*

Thank you! :)
  `;

  // Define your WhatsApp number (in international format, without '+' or spaces)
  const whatsappNumber = 9316464100; // Replace with your actual WhatsApp number

  // Encode the message content for URL
  const encodedMessage = encodeURIComponent(message.trim());

  // Construct the WhatsApp URL
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Redirect to WhatsApp with the pre-filled message
  window.location.href = whatsappURL;
}


  if (items.length === 0) {
    return (
      <div className="mt-20 text-center">
        <h2 className='mb-8 text-2xl'>Cart is empty.</h2>
        <Link href="/" className='btn btn-sm border-none bg-kesari text-white font-medium hover:bg-orange-800'>Go shopping</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-18 sm:px-6 lg:px-0">
      <h1 className="text-center text-3xl font-semibold tracking-tight text-base-900 sm:text-4xl">Your Quote List</h1>

      <div className="mt-12">
        <section aria-labelledby="cart-heading">
          <h2 id="cart-heading" className="sr-only">Items in your quote list</h2>
          <ul role="list" className="divide-y divide-base-200 border-t border-b border-base-200">
            {items.map((item) => (
              <li className="flex py-6" key={item.slug}>
                <div className="flex-shrink-0">
                  <Link href={`/product/${item.slug}`} className="flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-24 sm:w-24"
                    />
                  </Link>
                </div>
                <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                  <div className="flex justify-between">
                    <h4 className="text-sm">
                      <Link href={`/product/${item.slug}`} className="font-medium text-base-700 hover:text-base-800">{item.name}</Link>
                    </h4>
                    <p className="ml-4 text-md font-bold text-green-500 dark:text-gray-400">₹{item.price}</p>
                  </div>
                  <p className="mt-2 flex items-center space-x-1 text-xs text-base-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-yellow-400">
                      <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                    </svg>
                    <span>Eligible for Free Shipping</span>
                  </p>
                  <div className="mt-2 flex flex-1 items-end justify-between flex-wrap gap-2">
                    {/* <p className='sm:text-sm text-xs'>
                      Will ship by <span className="font-semibold">{getShippingDate()}</span>
                    </p> */}
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
                  <span className="ml-3 mr-2 inline-flex items-center rounded-full dark:bg-slate-700 dark:text-slate-400 bg-slate-200 px-2.5 py-0.5 text-xs font-medium text-gray-500">You are want to Inquire {items.length} items</span>
                </dt>
                <dd className="text-base font-medium text-base-900">₹{itemsPrice}</dd>
              </div>
            </dl>
            <button type="button"
              onClick={handleCheckout} className="mt-8 btn w-full rounded-md border border-transparent bg-green-700 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-base-50">Request on WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </button>
          </div>

        </section>
      </div >
    </div >
  )
}