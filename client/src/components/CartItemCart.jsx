import React, { useEffect, useState } from "react";
import {
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'
export const Cartitem = ({product,totalprice,setTotalPrice}) => {
    const [price, setprice] = useState({
        quantity:1,
        price:product.price,
    })

  return (  
  <>
        <Td>
          <img className="sm:w-10" src={product.image} alt='product'/>
        </Td>
        <Td>{product.name.slice(0,30)}</Td>
        <Td>{product.price}</Td>
        <Td>{price.quantity}</Td>
        <Td>{price.price*price.quantity}</Td>
        <Td className="space-x-2">
            <button onClick={()=>setprice({...price,quantity:price.quantity+1})} className="p-1 bg-gray-200 rounded-full">+</button>
            <button onClick={price.quantity>0?()=>setprice({...price,quantity:price.quantity-1}):()=>{}} className="p-1 bg-gray-200 rounded-full">-</button>
        </Td>
  </>
  );
};
