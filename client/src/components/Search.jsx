import React, { useContext,useState } from 'react'
import { productsContexte } from '../productsContexte'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export const Search = ({isSearchOpen}) => {
    const{products,setproducts}=useContext(productsContexte)
    const [search, setsearch] = useState('')
    if(!isSearchOpen){
        return(<></>)
    }else 
    return (
    <div className='absolute bg-white shadow-xl shadow-slate-400 rounded-xl w-full h-auto p-10 mx-10'>
       <div className='p-4'>
        <input
        onChange={(e)=>setsearch(e.target.value)}
         type="text" className='bg-white outline-none border-red-900 shadow-lg rounded-md w-full p-2' placeholder='search ...'/>
       </div>
       <div>
        {products&&products.map((product,index)=>(
            < div className='p-2'>
                {product.name.toLowerCase().includes(search)?(<>
                <Link
                to={`/details/${product._id}`}
                >
                <div className='flex shadow-md rounded-xl space-x-2 p-1 transition hover:-translate-y-1 '>
                    <div className='w-12 rounded-md h-12'>
                        <img className='w-full h-full object-contain rounded-xl' src={product.image} alt={product.name} />
                    </div>
                    <div className='flex items-center '>
                        <h1 className='hover:text-red-700'>{product.name.length<50?(<>{product.name}</>):(<>{product.name.slice(0,30)} ...</>)}</h1>
                    </div>
                </div>
                </Link>
                </>):(<></>)}
            </div>
        ))}
       </div>
    </div>
  )
}
