'use client'
import useCartService from '@/lib/hooks/useCartStore'
import { OrderItem } from '@/lib/models/OrderModel'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AddToCart({ item }: { item: OrderItem }) {
  // Initialize necessary hooks and state variables
  const pathname = usePathname()
  const { items, increase, decrease } = useCartService()
  const [existItem, setExistItem] = useState<OrderItem | undefined>()
  const [showMessage, setShowMessage] = useState(false);
  const [isProductPage, setIsProductPage] = useState(false);

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

  // Effect to determine if user is on a product page
  useEffect(() => {
    const productPagePattern = /^\/product\/.*/;
    setIsProductPage(productPagePattern.test(pathname));
  }, [pathname]);

  // Function to handle adding an item to the cart
  const addToCartHandler = () => {
    increase(item);
    setShowMessage(true);
  }

  return (
    <div className='w-full'>
      {showMessage && (
        // <div aria-live="assertive" className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
        //   <div className="flex w-full flex-col items-center space-y-11 sm:items-center z-50 bg-white rounded-lg">
        //     <div className="pointer-events-auto flex w-full max-w-md rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        //       <div className="w-0 flex-1 sm:p-4 p-2">
        //         <div className="flex items-center">
        //           <div className="flex-shrink-0 pt-0.5">
        //             <Image
        //               className="h-10 w-10 rounded-full border border-white object-cover"
        //               src={item.image}
        //               alt={process.env.brandName || 'RD Labels'}
        //               width={200}
        //               height={200}
        //             />
        //           </div>
        //           <div className="ml-3 w-0 flex-1">
        //             <p className="text-sm text-gray-900 dark:text-slate-900">Added to Your Cart 🥳</p>
        //             {/* <p className="mt-1 text-sm text-gray-500 dark:text-slate-100">Cart happiness unlocked! 🛒</p> */}
        //           </div>
        //         </div>
        //       </div>
        //       <div className="flex border-0">
        //         <button type="button" className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent pr-4 text-sm font-medium text-white hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        //           <Link href="/cart" className='border-0 btn btn-sm text-white font-light bg-kesari rounded-lg'>View Cart</Link>
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className="badge badge-success absolute left-[50%] translate-x-[-50%] bottom-[118px] z-50 text-white"><Link href="/cart">Added to Quote List</Link></div>
      )}
      <div className="flex items-center">
        <button
          type="button"
          onClick={addToCartHandler}
          className="flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#b74e26" className="bi bi-bag-plus" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
          {isProductPage && (
            <>
              <span className="ml-2">Add to Quote list</span>
              <span className="ml-4 text-sm text-gray-600">This item is available for quoting</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
