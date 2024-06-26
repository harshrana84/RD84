// Import necessary modules and components
'use client'
import useCartService from '@/lib/hooks/useCartStore'
import { OrderItem } from '@/lib/models/OrderModel'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AddToCart({ item }: { item: OrderItem }) {
  // Initialize necessary hooks and state variables
  const router = useRouter()
  const { items, increase, decrease } = useCartService()
  const [existItem, setExistItem] = useState<OrderItem | undefined>()
  const [showMessage, setShowMessage] = useState(false);

  // Effect to update existItem when items or item changes
  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug))
  }, [item, items])

  // Effect to reset showMessage when items become empty
  useEffect(() => {
    if (items.length === 0) {
      setShowMessage(false);
    }
  }, [items])

  // Function to handle adding an item to the cart
  const addToCartHandler = () => {
    increase(item);
    setShowMessage(true);
  }

  return (
    <div className='w-full'>
      {showMessage && (
        <div aria-live="assertive" className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 ">
          <div className="flex w-full flex-col items-center space-y-4 sm:items-center z-10 bg-slate-100 rounded-lg">
            <div className="pointer-events-auto flex w-full max-w-md rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="w-0 flex-1 sm:p-4 p-2">
                <div className="flex items-center">
                  <div className="flex-shrink-0 pt-0.5">
                    <Image
                      className="h-10 w-10 rounded-full border border-white object-cover"
                      src={item.image}
                      alt={process.env.brandName || 'RD Labels'}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1">
                    <p className="text-sm text-gray-900 dark:text-slate-900">Added to Your Cart 🥳</p>
                    {/* <p className="mt-1 text-sm text-gray-500 dark:text-slate-100">Cart happiness unlocked! 🛒</p> */}
                  </div>
                </div>
              </div>
              <div className="flex border-0">
                <button type="button" className=" flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent pr-4 text-sm font-medium text-white hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"><Link href="/cart" className='border-0 btn btn-sm text-white font-light bg-kesari rounded-lg'>View Cart</Link></button>
              </div>
            </div>
          </div>
        </div>
      )}
      {existItem ? (
        // UI for existing item in the cart
        <div className='flex items-center gap-2'>
          <button className="btn-circle bg-base-500 btn text-lg" type="button" onClick={() => decrease(existItem)}>
            -
          </button>
          <span className="px-2">{existItem.qty}</span>
          <button className="btn-circle bg-base-500 btn text-lg" type="button" onClick={() => increase(existItem)}>
            +
          </button>
        </div>
      ) : (
        // UI for new item not in the cart
        <button
          className="btn flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 w-full"
          type="button"
          onClick={addToCartHandler}
        >
          Add to cart
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </button>
      )}
    </div>
  )
}
