import React, { useEffect,useState } from 'react'
import Dsidebar from './Dsidebar'
import axios from 'axios'
import { BiArrowFromBottom, BiArrowFromTop, BiTrendingUp } from 'react-icons/bi'
import { OrderDetails } from '../components/OrderDetails'

export const Orders = () => {
  const [commands, setcommands] = useState([])
  const [isOpened, setisOpened] = useState(false)
  useEffect(()=>{
    axios.get('http://localhost:3001/get-commands').then(response=>{
      console.log(response.data)
      setcommands(response.data)
    })
  },[])
  const handleOpenDetails=()=>{
    if(isOpened){
      setisOpened(false)
    }
    else{
      setisOpened(true)
    }
  }
  return (
    <div>
          <Dsidebar/>
        <div className='pl-20'>
           <h1 className='font-bold text-center p-2 text-gray-400 text-2xl'>Orders</h1>
           <div>
            {commands.map((command,index)=>(
              <div className=' rounded-xl p-4'>
               <div className='shadow rounded-md p-2 flex flex-row items-center  m-2 justify-between cursor-pointer hover:opacity-70'
               key={index}
             >
               <div className='flex flex-row items-center space-x-4'>
               <h1 className='font-bold '>{command.fullname}</h1> 
               <h1 className='font-bold border-r-2 pr-1'>{command.country}</h1>
               <h1 className='font-bold border-r-2 pr-1'>{command.adress}</h1>
               <h1 className='text-sm'>qantity:{command.qty}</h1>  
            <h1 className='text-sm text-green-600 p-2'>price:{command.price}$</h1>  
               </div>
              
              
             </div>
             <div className='grid grid-cols-3'>
              <OrderDetails id={command.pid}  key={index}/>
             </div>
             </div>
            ))}
          </div>
        </div>
       
    </div>
  )
}
