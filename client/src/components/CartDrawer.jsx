import React, { useContext, useEffect } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
  } from '@chakra-ui/react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartDrawer = ({isOpen,onClose,btnRef}) => {
    
    let ids=JSON.parse(localStorage.getItem('items'))
    
  return (
    <>
      
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <h1>Shopping Cart</h1>
            <div className='p-5'>

            </div>
          </DrawerHeader>
          <DrawerBody >
            <div className='space-y-4'>
           {ids!=null?(ids.map((item,index)=>(
            <>
               <CartItem id={item} key={index}/>
            </>
           ))):<></>}
            </div>

          </DrawerBody>
          <DrawerFooter>
            <Link className='text-red-600 font-bold text-center transition hover:translate-x-2 hover:text-indigo-500' to={'/dashboard/cart'}>GoTo Cart</Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CartDrawer