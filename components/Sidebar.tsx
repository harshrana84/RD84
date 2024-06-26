'use client'

import useLayoutService from '@/lib/hooks/useLayout'
import Link from 'next/link'
import useSWR from 'swr'

const Sidebar = () => {
  const { toggleDrawer } = useLayoutService()
  const { data: categories, error } = useSWR('/api/products/categories')

  if (error) return error.message
  if (!categories) {
    return (
      <span className="loading loading-spinner loading-xs"></span>
    );
  }

  return (
    <>
      <ul className="menu p-4 w-80 min-h-full bg-white dark:bg-slate-900 text-gray-950 dark:text-slate-50 gap-1">
        <li>
          <h2 className="text-xl">Shop By Department</h2>
        </li>
        {categories.map((category: string) => (
          <li key={category}>
            <Link href={`/search?category=${category}`} onClick={toggleDrawer} className='hover:bg-slate-100 dark:hover:bg-slate-800'>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Sidebar
