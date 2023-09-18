import React, { useContext } from 'react'

import Dsidebar from './Dsidebar'
import {productsContexte} from '../productsContexte'
import axios from 'axios'
import { BiTrash } from 'react-icons/bi'


const Dhome = () => {
  const {products,setproducts}=useContext(productsContexte)
  const handleDeleteProduct=(id,img)=>{
    axios.post('https://ecommerce-hrip.onrender.com/delete',{id,img})
    setTimeout(()=>{
      window.location.href='/dashboard'
    },700)
  }
  return (
    <>
       <div>
          <Dsidebar/>
       </div>
       <div className='flex flex-col pl-20'>
        {products&&products.map((product,index)=>(
          <div className='shadow rounded-md p-2 flex flex-row items-center  m-2 justify-between cursor-pointer hover:opacity-70'
            key={index}
          >
            <div className='flex flex-row items-center space-x-4'>
            <img className='w-12 h-12 rounded-md' src={product.image} alt={product.name} />
            <h1 className='font-bold'>{product.name.length<50?(<>{product.name}</>):(<>{product.name.slice(0,30)} ...</>)}</h1>  
            </div>
            <div className='space-x-4'>
              <button
              onClick={()=>handleDeleteProduct(product._id,product.image)}
               className='hover:bg-gray-200 p-1 px-2 rounded-full w-10 h-10 flex items-center justify-center'>
                <BiTrash/>
               </button>
            </div>
          </div>
        ))}
       </div>
    </>
  )
}

export default Dhome