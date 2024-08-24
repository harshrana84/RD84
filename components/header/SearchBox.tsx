'use client'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'

export const SearchBox = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') || ''
  const category = searchParams.get('category') || 'All'

  const { data: categories, error } = useSWR('/api/products/categories')

  if (error) return error.message
  if (!categories) {
    return (
      <span className="loading loading-spinner loading-xs"></span>
    );
  }

  return (

    //     <div className="join">
    //   <div>
    //     <div>
    //       <input className="input input-bordered join-item" placeholder="Search"/>
    //     </div>
    //   </div>
    //   <select className="select select-bordered join-item">
    //     <option disabled selected>Filter</option>
    //     <option>Sci-fi</option>
    //     <option>Drama</option>
    //     <option>Action</option>
    //   </select>
    //   <div className="indicator">
    //     <span className="indicator-item badge badge-secondary">new</span> 
    //     <button className="btn join-item">Search</button>
    //   </div>
    // </div>
    <form action="/search" method="GET">
      <div className="join mx-4">
        {/* <select
          name="category"
          defaultValue={category}
          className="join-item select input-bordered"
        >
          <option value="all">All</option>
          {categories.map((c: string) => (
            <option key={c}>{c}</option>
          ))}
        </select> */}
        <input
          className="join-item input-bordered input  max-w-[350px] w-full"
          placeholder="Search"
          defaultValue={q}
          name="q"
        />
        <button className="join-item btn bg-base">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </div>
    </form>
  )
}
