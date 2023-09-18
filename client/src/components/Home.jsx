import React ,{ useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import Products from './Products'
import Navbar from './Navbar'
import { Search } from './Search'

const Home = () => {
  const [isSearchOpen, setisSearchOpen] = useState(false)
  return (
    <>
    <Navbar isSearchOpen={isSearchOpen} setisSearchOpen={setisSearchOpen}/>
    <div className='h-auto  flex flex-col items-center md:px-20 relative'>
        <div className='p-2 w-full '>
           <div className='rounded-xl flex items-center justify-between space-x-10 p-4 '>
            <div className='flex flex-col space-y-4 '>
            <h1 className='font-bold md:text-5xl'>
            Save up to 70%
            </h1>
            <div className='bg-red-600 w-fit text-sm md:px-10 md:p-2 p-1 rounded-full'>
                <button>Buy Now</button>
            </div>
            </div>
            <div>
                <img className='rounded-xl' src={'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="" />
            </div>
           </div>
        </div>
        <div className='w-full'>
            <Products/>
        </div>
        <Search isSearchOpen={isSearchOpen}/>
    </div>
    </>
  )
}

export default Home