import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { useState,useContext, useEffect } from 'react';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Dhome from './Dashboard/Dhome';
import Error from './components/Error';
import Details from './components/Details';
import DAdd from './Dashboard/DAdd'
import { productsContexte } from './productsContexte';
import DAdmin from './Dashboard/DAdmin';
import axios from 'axios';
import { Orders } from './Dashboard/Orders';
import { Cart } from './components/Cart';

function App() {
  const [products, setproducts] = useState([])
  useEffect(()=>{
    axios.get('https://ecommerce-hrip.onrender.com/get-products').then(response=>{
      setproducts(response.data)
    })
  },[])
  return (
    <>
    <productsContexte.Provider value={{products,setproducts}}>
        <ChakraProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/signup' exact element={<Signup/>} />
              <Route path='/dashboard/' exact element={<Dhome/>} />
              <Route path='/cart' exact element={<Cart/>} />
              <Route path='/dashboard/addProduct' exact element={<DAdd/>} />
              <Route path='/dashboard/addAdmin' exact element={<DAdmin/>} />
              <Route path='/dashboard/orders' exact element={<Orders/>} />
              <Route path='/*' exact element={<Error/>}/>
              <Route path='/details/:pid' element={<Details/>}/>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </productsContexte.Provider>    
    </>
  );
}

export default App;
