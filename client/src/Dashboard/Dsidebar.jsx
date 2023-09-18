import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {AiFillHome,AiOutlineUserAdd,AiOutlineRollback, AiFillAmazonCircle} from 'react-icons/ai'
import{BiMessageSquareAdd} from 'react-icons/bi'

const Dsidebar = () => {
   let path=window.location.pathname
  return (
    <div className='border-r-[1px] border-gray  w-fit h-[100vh] flex flex-col justify-between fixed bg-white'>
        <div className='text-center text-3xl p-2'>
         <h1 className=''>L</h1>
        </div>
        <div className='space-y-5'>
            <div className={`p-2 border-r-2 ${path=='/dashboard/'?'border-red-600':''} hover:border-r-2`} >
               <Link to='/dashboard/' className='flex text-black items-center p-2 space-x-2 text-xl  '>
                    <div>
                    <AiFillHome/>
                    </div>
               </Link>
            </div>
            <div className={`p-2 border-r-2 ${path=='/dashboard/addProduct'?'border-red-600':''} hover:border-r-2`}>
               <Link to='/dashboard/addProduct' className='flex text-black items-center p-2 space-x-2 text-xl  '>
                    <div>
                    <BiMessageSquareAdd/>
                    </div>
               </Link>
            </div>
            <div className={`p-2 border-r-2 ${path=='/dashboard/orders'?'border-red-600':''} hover:border-r-2`}>
               <Link to='/dashboard/orders' className='flex text-black items-center p-2 space-x-2 text-xl  '>
                    <div>
                    <AiFillAmazonCircle/>
                    </div>
               </Link>
            </div>
            <div className={`p-2 border-r-2 ${path=='/dashboard/addAdmin'?'border-red-600':''} hover:border-r-2`}>
               <Link to='/dashboard/addAdmin' className='flex text-black items-center p-2 space-x-2 text-xl  '>
                    <div>
                    <AiOutlineUserAdd/>
                    </div>
               </Link>
            </div>
           
        </div>
        <div>
            <div className='p-2'>
               <Link to='/dashboard' className='flex text-black items-center p-2 space-x-2 text-xl bg-red-600  rounded-md hover:bg-red-700  '>
                    <button>
                    <div>
                    <AiOutlineRollback/>
                    </div>
                    </button>
               </Link>
            </div>
        </div>
    </div>
  )
}

export default Dsidebar