import React, { useState } from 'react'
import Dsidebar from './Dsidebar'
import axios from 'axios'

const DAdd = () => {
  const [product, setproduct] = useState({
    name:'',
    price:0,
    status:'not available',
    rating:4,
    image:'',
    description:''
  })
  const [Image, setImage] = useState({preview:'',data:''})

  const handleSubmitImage=async ()=>{
      let formData=new FormData()
      formData.append('file',Image.data)
      axios.post('http://localhost:3001/images',formData,{product}).then(response=>{
        setproduct({...product,image:'http://localhost:3001/'+response.data.path});
        alert(response.data.message)
      })   
  }
  const handleAddProduct=()=>{
    axios.post('http://localhost:3001/add-product',{product})
    setTimeout(()=>{
      window.location.href='/dashboard/'
    },500)
  }
  const handleFileChanges=(e)=>{
    let img={
      data:e.target.files[0],
      preview:URL.createObjectURL(e.target.files[0])
    }
    setImage(img)
  }
 
  return (
    <div>
          <Dsidebar/>
          <div className='pl-20 p-2 w-full'>
          <h1 className='font-bold text-center p-2 text-gray-400 text-2xl'>Add Product</h1>
              <div className='p-2 flex space-x-2 flex-col'>
                <h1 className='p-4'>product title</h1>
                <input
                onChange={(e)=>setproduct({...product,name:e.target.value})}
                value={product.name}
                 type="text" className='border-2 border-gray-200 rounded-lg outline-none focus:border-red-600 p-2'/>
              </div>
              <div className='p-2 flex space-x-2 flex-col'>
                <h1 className='p-4'>Product description</h1>
                <textarea 
                onChange={(e)=>setproduct({...product,description:e.target.value})}
                value={product.description}
                type="text" className='border-2 border-gray-200 rounded-lg outline-none focus:border-red-600 p-2'  />
              </div>
              <div className='p-2 flex space-x-2 flex-col'>
                <h1 className='p-4'>Price</h1>
                <input
                onChange={(e)=>setproduct({...product,price:e.target.value})}
                value={product.price}
                 type="number" className='border-2 border-gray-200 rounded-lg outline-none focus:border-red-600 p-2'   />
              </div>
              <div className='p-2 flex space-x-2 '>
                <h1 className='p-4'>Available</h1>
                <input
                onChange={(e)=>{e.target.checked?setproduct({...product,status:'available'}):setproduct({...product,status:'not available'})}}
                
                 type="checkbox"  />
              </div>
              <div className='p-2 flex space-x-2 flex-col'>
                
                <input
                onChange={handleFileChanges}
                 type="file" className='border-2 border-gray-200 rounded-lg outline-none focus:border-red-600 p-2' />
              {Image.preview&&<img className='w-[20rem]' src={Image.preview}/>}
              <button onClick={handleSubmitImage} className='bg-red-600 p-1 rounded-xl m-1'>upload</button>
              </div>
              <div className='w-full justify-center flex'>
              <button onClick={handleAddProduct} className='bg-red-600 p-1 rounded-xl m-1'>add product</button>
              </div>
              </div>
    </div>
  )
}

export default DAdd