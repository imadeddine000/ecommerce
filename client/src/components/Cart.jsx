import React, { useContext,useState } from 'react'
import {productsContexte} from '../productsContexte'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Button,
} from '@chakra-ui/react'

import { Cartitem } from './CartItemCart'
import { OrderDetails } from './OrderDetails'
import { BUY } from './BUY'
import { BuyMultiple } from './BuyMultiple'

export const Cart = () => {
  let items=JSON.parse(localStorage.getItem('items'))
  const {products,setproducts}=useContext(productsContexte)
  const [isopened,setisopened]=React.useState(false)
  const [totalprice, setTotalprice] = useState(0)
  console.log(items)
  const handleBuyingPage=()=>{
    setisopened(true)
  }
 
  return (
    
       <TableContainer >
        <Table variant={'simple'}>
        
        <Thead>
      <Tr>
      <Th ></Th>
        <Th >Product</Th>
        <Th >Price</Th>
        <Th>Quantity</Th>
        <Th>Total</Th>
        <Th>Add</Th>
      </Tr>
    </Thead>
    <Tbody>
      {products.map((product,index)=>(
        <>
        {items.map((item,i)=>(
          <Tr key={i}>
          {product._id===item?
          (<Cartitem product={product} totalprice={totalprice} setTotalprice={setTotalprice}/>)
          :(<></>)}
          </Tr>
        ))}
        </>
      ))}
    </Tbody>
            <BuyMultiple isopened={isopened} setisopened={setisopened}/>
   </Table>
   <Button
    onClick={handleBuyingPage}
    className='p-2 m-2 float-right'>
    Confirm
   </Button>
  </TableContainer>

  

  )
}
