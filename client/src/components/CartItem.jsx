import React, { useContext } from 'react'
import { productsContexte } from '../productsContexte'

const CartItem = ({id}) => {
    const {products,setproduct}=useContext(productsContexte)
    const handleDeleteItem=(idr)=>{
        window.location.reload()
        let items=JSON.parse(localStorage.getItem('items'))
        let tempi=[]
        for(let i=0;i<items.length;i++){
            
            if(items[i]!==idr){
                tempi.push(items[i])
                
            }
        }
        localStorage.setItem('items',JSON.stringify(tempi))
        
    }
  return (
    <>
        {products.map((product,index)=>(
            <>
            {product._id==id?(
                <div className='flex items-center justify-between shadow pr-1 rounded-md'>
                <div className='w-12 h-12'>
                    <img className=' object-contain ' src={product.image} alt="" />
                </div>
                <div className='p-2  flex flex-col'>
                    <div className='text-sm font-bold '>
                        <h1>{product.name.length<50?(<>{product.name}</>):(<>{product.name.slice(0,30)} ...</>)}</h1>
                    </div>
                    <div className='bg-gray-200 w-fit p-1 rounded-md'>
                        <h1>{product.price}$</h1>
                    </div>
                </div>
                <div className=' p-2 rounded-md w-8 h-8 items-center justify-center flex hover:bg-gray-200 cursor-pointer'>
                    <button
                    onClick={()=>handleDeleteItem(product._id)}
                    >X</button>
                </div>
            </div>
            ):<></>}
            </>
        ))}
    </>
  )
}

export default CartItem