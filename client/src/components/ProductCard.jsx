import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationPin} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
const ProductCard = ({product}) => {
    
  return (
    <div className='bg-white rounded-md shadow-sm cursor-pointer hover:shadow-2xl h-full'>
        <div className='relative  rounded-md  '>
            <div className='w-full h-[15rem]'>
                <img className='w-full h-full object-contain hover:opacity-95 rounded-t-md' src={product.image} alt={product.name} />
            </div>
            {product.status=='available'?<div className='bg-green-100 text-xs bottom-1 right-1 font-bold pr-2 pl-2  absolute p-1 rounded-md shadow'>
                <span>{product.status}</span>
            </div>:<div className='bg-red-200 text-xs bottom-1 right-1 font-bold pr-2 pl-2  absolute p-1 rounded-md shadow'>
                <span>{product.status}</span>
            </div>}
        </div>
        <div className='flex p-2 justify-between items-center'>
            <div className=''>
                <h1 className='font-bold'>
                    {product.name.length<30?(<>{product.name}</>):(<>{product.name.slice(0,30)} ...</>)}
                    </h1>
            </div>
            <div className='flex items-center space-x-2'>
                <div>
                    <AiFillStar/>
                </div>
                <div>
                    <h1>{product.rating}/5</h1>
                </div>
            </div>
        </div>
        <div className='p-2 flex pb-4 items-center text-gray-400'>
            <div>
                <MdLocationPin/>
            </div>
            <div>
                <h1>{product.address}</h1>
            </div>
        </div>
        <div className='flex space-x-5 p-2 items-center'>
            <div className='flex text-red-600'>
                <h1>$</h1>
                <h1>{product.price}</h1>
            </div>
            <div className='flex bg-gray-200 p-1 pr-2 pl-2 rounded-md'>
                <h1>5</h1>
                <h1>%</h1>
            </div>
            <div className='flex'>
                <h1>$</h1>
                <h1>96.00</h1>
            </div>
        </div>
        <div className='p-2' >
            <Link to={'/details/'+product._id}>
            <button className='flex bg-red-500 p-3 justify-center hover:bg-red-400 cursor-pointer pr-4 items-center pl-4 rounded-md shadow-md space-x-5 font-bold w-full  '
                
            >
                <div className='text-white'>
                    <FaShoppingCart/>
                 </div>
                <div className='text-white'>
                    <h1>Purchase Now</h1>
                 </div>
            </button>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard