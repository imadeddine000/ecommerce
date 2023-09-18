import React ,{useEffect, useState} from 'react'

import {BsHandbag} from 'react-icons/bs'

import { Link } from 'react-router-dom'
import CartDrawer from './CartDrawer'
import { useDisclosure } from '@chakra-ui/react'
import {BiSearch, BiX} from 'react-icons/bi'


const Navbar = ({isSearchOpen,setisSearchOpen}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [cartItems, setcartItems] = useState(0);
   
    useEffect(()=>{
       let number=JSON.parse(localStorage.getItem('items'))
        
       if(number!=null){
        setcartItems(number.length)
       }else{
        setcartItems(0)
       }
           
    },[window.localStorage])
    const handleOpenSearch=()=>{
        if(!isSearchOpen){
            setisSearchOpen(true)
        }else{
            setisSearchOpen(false)
        }
    }
  return (
    <div className='flex flex-row justify-between items-center  p-1  pl-2 bg-white shadow-md pr-2  '>
        <div className='text-sm p-2 font-bold border-r-2 border-gray-200 '>
            <Link to='/'>
                Shopping
            </Link>
        </div>
       
        <div className='flex space-x-8 flex-col md:flex-row '>
            <div className='flex p-1 '>
            <div className='bg-gray-100 p-1 w-full mx-2 rounded-md flex items-center px-2'>
            <button
                onClick={handleOpenSearch}
             className='outline-none w-full bg-gray-100 ' type="text" placeholder='search' >
            {!isSearchOpen?<BiSearch/>:<BiX/>}
            </button>
            </div>
                <div className='flex space-x-2 font-bold text-md'>
                  
                    {/* <div className='p-2 relative hover:bg-gray-100 rounded-full cursor-pointer flex items-center'>
                        <button className='' onClick={onOpen} ref={btnRef}>
                            <BsHandbag/>
                        </button>
                        <div className='text-[12px] text-white  absolute  top-0 right-0 bg-red-600 rounded-full w-4 h-4 items-center flex justify-center'>
                            <span className='font-bold text-white '>{cartItems}</span>
                        </div>
                    </div> */}
                    {/* <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer flex items-center'>
                        <button>
                            <BiBell/>
                        </button>
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer flex items-center'>
                        <button>
                            <FaHeadphones/>
                        </button>
                    </div> */}
                </div>
            </div>
            {/* <div className='border-r-2 border-gray-200'>
                <div className='hidden md:flex  items-center p-1 mr-2 cursor-pointer hover:bg-gray-200 space-x-2 border-2 border-gray-200 rounded-full'>
                    <img className='h-8 w-8 rounded-full' src="https://images.unsplash.com/photo-1661768662059-4c4edfd09346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <span>
                        imadeddine
                    </span>
                </div>
            </div> */}

        </div>
        {/* <CartDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef}/> */}
        
    </div>
  )
}

export default Navbar