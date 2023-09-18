import React, { useState } from 'react'
import {BiX} from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export const BuyMultiple = ({isopened,setisopened,id}) => {
    const productid=useParams().pid
    //handling buyer informations
    const [BuyerInfo, setBuyerInfo] = useState({
        fullname:'',
        country:'',
        adress:'',
        postalcode:'',
        POD:false,
        pid:productid,
    })
    const handleBuy=()=>{
        axios.post('https://ecommerce-hrip.onrender.com/add-command',BuyerInfo).then(response=>{
            alert(response.data.message)
        })
    }
    const handleClose=()=>{
        setisopened(false)
    }
    if(!isopened){
        return (<></>)
    }else
  return (
    <div className=' w-full absolute left-0 right-0 ml-auto mr-auto top-0 px-20'>
        <div className=' h-auto bg-white shadow  rounded-xl'>
            <button
            onClick={handleClose}
            className='bg-gray-100 p-1 rounded-xl m-1 float-right'
            >
                <BiX/>
            </button>
            <h1 className='p-2 text-center'>please fill the informations bellow</h1>
            <div className='flex flex-col p-2 space-y-2 '>
                <h1 className='p-2 border-2 border-gray-200 rounded-xl'>product id:{productid}</h1>
                <input 
                    onChange={(e)=>setBuyerInfo({...BuyerInfo,fullname:e.target.value})} value={BuyerInfo.fullname}
                className='outline-none border-2 border-gray-200 p-2 rounded-xl' type="text" placeholder='fullname' />
                <input 
                    onChange={(e)=>setBuyerInfo({...BuyerInfo,country:e.target.value})} value={BuyerInfo.country}
                className='outline-none border-2 border-gray-200 p-2 rounded-xl' type="text" placeholder='country' />
                <input 
                    onChange={(e)=>setBuyerInfo({...BuyerInfo,adress:e.target.value})} value={BuyerInfo.adress}
                className='outline-none border-2 border-gray-200 p-2 rounded-xl' type="address" placeholder='adress' />
                <input 
                    onChange={(e)=>setBuyerInfo({...BuyerInfo,postalcode:e.target.value})} value={BuyerInfo.postalcode}
                className='outline-none border-2 border-gray-200 p-2 rounded-xl w-fit' type="number" placeholder='postal code' />
                <div className='flex space-x-10 p-2 items-center'>
                    <div className='flex items-center space-x-2'>
                    <h1>Pay On Delivery</h1>
                    <input type="checkbox" name="Pay On Delivery" id="" onChange={(e)=>setBuyerInfo({...BuyerInfo,POD:e.target.checked?true:false})} />
                    </div>
                <button
                onClick={()=>alert('paying is not available right know!!!')}
                 className='bg-red-500 p-2 rounded-xl px-4 hover:translate-x-2 transition w-fit'>Pay</button>
                    
                </div>
                <button onClick={handleBuy} className='bg-red-500 rounded-xl p-2 '>Confirm</button>
            </div>
        </div>
    </div>
  )
}
