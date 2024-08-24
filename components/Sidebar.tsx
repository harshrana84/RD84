'use client'

import useLayoutService from '@/lib/hooks/useLayout'
import Link from 'next/link'
import useSWR from 'swr' 

const Sidebar = () => {
  const { toggleDrawer } = useLayoutService()
  const { data: categories, error } = useSWR('/api/products/categories')
  const { theme, toggleTheme } = useLayoutService()

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
        <li>
          <div className="ml-1.5 sm:ml-4 flow-root lg:ml-6">
            <label className="flex cursor-pointer gap-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
              <input checked={theme === 'dark'} onChange={toggleTheme} type="checkbox" value="synthwave" className="toggle theme-controller" />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
          </div >
        </li>
      </ul>
    </>
  )
}

export default Sidebar
