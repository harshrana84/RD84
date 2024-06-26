import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Rating } from './Rating'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <>
      {/* <div className="card bg-base-200 shadow-xl mb-4">
        <figure>
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover h-64 w-full"
            />
          </Link>
        </figure>
        <div className="card-body">
          <Link href={`/product/${product.slug}`}>
            <h2 className="card-title font-normal">{product.name}</h2>
          </Link>
          <Rating value={product.rating} caption={`(${product.numReviews})`} />
          <p className="mb-2">{product.brand}</p>
          <div className="card-actions flex items-center justify-between">
            <span className="text-2xl">${product.price}</span>
          </div>
        </div>
      </div> */}

      <div className="group relative flex flex-col dark:bg-gray-800 bg-clip-border rounded-xl w-full border-[1px] border-transparent hover:border-gray-200">
        <div className="relative overflow-hidden bg-base-200 bg-clip-border rounded-xl h-36 sm:h-64">
          <figure className='h-36 sm:h-full group-hover:scale-150 transition ease-linear'>
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={100}
                className="object-cover w-full h-36 sm:h-full"
              />
            </Link>
          </figure>
        </div>
        <div className="px-3 py-2 sm:p-6 card-body">
          <div className="flex items-start justify-between flex-col gap-1 sm:flex-row">
            <p className="block antialiased font-medium leading-relaxed card-title text-sm text-gray-900 dark:text-slate-50">
              {product.name}
            </p>
            <p className="inline text-sm antialiased font-medium leading-relaxed text-right text-gray-500 dark:text-slate-50 group-hover:italic transition ease-linear">
              <span className="text-gray-400 font-light">₹</span>{product.price}
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
