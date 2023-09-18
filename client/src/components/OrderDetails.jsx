import React, { useContext } from 'react'
import {productsContexte} from '../productsContexte.js'

export const OrderDetails = ({id}) => {
    const {products,setproducts}=useContext(productsContexte)
  console.log(products)
   return (
    <div className='text-2xl '>
        {products.map((product,index)=>(
            <>
            {product._id!==id?(<></>):(<>
            
                <div className='shadow rounded-md  flex flex-col items-center  m-2 justify-between cursor-pointer hover:opacity-70'
            key={index}
          >
            <div className='flex flex-col items-center space-x-4 justify-center font-bold'>
             
            <img className=' rounded-md' src={product.image} alt={product.name} />
           
            
            <h1 className='text-sm'>{product.name.length<50?(<>{product.name}</>):(<>{product.name.slice(0,30)} ...</>)}</h1>  
            </div>
            
          </div>
            </>)}
            </>
        ))}
    </div>
  )
}
