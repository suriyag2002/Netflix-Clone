import { useEffect } from 'react'
import PageNotFoundImg from '../assets/images/not_found.png'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {

  useEffect(() => {
    document.title = `page Not Found / NETFLIK`
  })
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
          <img src={PageNotFoundImg} alt="" />

        </div>
        <div className='flex justify-center my-4'>
            <Link to="/">
              <button className='font-medium rounded p-3 w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>back to home</button>
            </Link>
        </div>
      </section>
    </main>
  )
}
