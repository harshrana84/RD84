import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Rating } from './Rating'
import AddToCart from '@/components/products/AddToCart'
import { convertDocToObj } from '@/lib/utils'

export default function ProductItem({ product }: { product: Product }) {
  // Format the price with thousand separators
  const formattedPrice = product.price.toLocaleString('en-IN'); // Original price

  // Calculate the discount amount (33% of the price)
  const discountPercentage = 33;
  const discountAmount = (product.price * discountPercentage) / 100;

  // Format the discount amount with thousand separators
  const formattedDiscountAmount = discountAmount.toLocaleString('en-IN');

  // Calculate the original price after discount
  const originalPrice = product.price + discountAmount;

  // Format the original price with thousand separators
  const formattedOriginalPrice = originalPrice.toLocaleString('en-IN');

  return (
    <>
      <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl relative">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={100}
            className="h-80 w-72 object-cover rounded-t-xl"
          />
        </Link>
        <div className="px-4 py-3 w-72">
          {/* <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span> */}
          <div className="badge text-sm absolute top-2 left-2">by&nbsp;<b>{product.brand}</b></div>

          <p className="text-md font-bold text-black truncate block capitalize">
            {product.name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ₹ {formattedPrice}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">₹ {formattedOriginalPrice}</p>
            </del>
            <div className="ml-auto">
              <AddToCart
                item={{
                  ...convertDocToObj(product),
                  qty: 0,
                  color: '',
                  size: '',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
