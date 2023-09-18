import React from 'react'
import ProductCard from './ProductCard'

import { useContext } from 'react'
import { productsContexte } from '../productsContexte'

const Products = () => {
    const {products,setproducts}=useContext(productsContexte)
  return (
    <div className=' flex flex-col md:flex-row p-2  '>
        
        <div className='flex flex-col p-5 grow sm:justify-center'>
        
          {/* product Card */}
                <div className='p-2 grid gap-2 sm:grid-cols-2  lg:grid-cols-3 '>
                    {products&&products.map((product,index)=>(
                        <>
                            <ProductCard product={product} key={index}/>
                        </>
                    ))}
                </div>
        </div>
        
    </div>
  )
}

export default Products