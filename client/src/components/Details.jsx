import React, { useContext,useEffect,useState } from "react";
import Navbar from "./Navbar";
import { productsContexte } from "../productsContexte";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { BUY } from "./BUY";
const Details = () => {
  const { products, setproducts } = useContext(productsContexte);
  let id = useParams().pid;
  //adding product to cart fct 
  const handleAddToCart=(id)=>{
    window.location.reload()
    if(localStorage.getItem('items')!=null){
    let tempi=JSON.parse(localStorage.getItem('items'))
    tempi.push(id)
    localStorage.setItem('items',JSON.stringify(tempi))
    }else{
      let tempa=[]
      tempa.push(id)
      localStorage.setItem('items',JSON.stringify(tempa))
    } 
  }
  //enable buying page for ckeckout
  
  const [buyingPage, setbuyingPage] = useState(false)
  const handleBuyingPage=()=>{
    setbuyingPage(true)
  }
  //check if product is alredy added
  const [isadded, setIsadded] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('items')!==null){
    let cartitems=JSON.parse(localStorage.getItem('items'))
    for(let i=0;i<cartitems.length;i++){
      if(id==cartitems[i]){
        setIsadded(true)
      }
    }
  }
   
  },[])
  return (
    <>
      <div className="flex flex-col relative">
        <div>
          <Navbar />
        </div>
          <div>
            {products &&
              products.map((product, index) => (
                <>
                  {product._id == id ? (
                   <div className="relative" >
                    <div className="p-5">
                        <h1 className="font-bold text-xl p-1">{product.name.length<100?(<>{product.name}</>):(<>{product.name.slice(0,100)} ...</>)}</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row p-10 ">
                      <div>
                          <img src={product.image} alt={product.name} className="object-contain" />
                      </div>
                      <div className="p-5">
                        <h1 className="font-bold text-2xl p-5">{product.price} $</h1>
                        <p className=" p-2  lg:w-[50rem] ">{product.description}</p>
                        <div className="flex space-x-2 w-full ">
                          
                          <button
                              onClick={handleBuyingPage}
                           className="flex items-center  p-2 px-4 rounded-lg bg-gray-200 transition hover:translate-x-1 hover:bg-red-400">
                            <h1>Buy Now </h1>
                            <BiDollar/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <BUY buyingPage={buyingPage} setbuyingPage={setbuyingPage} id={product._id} price={product.price}/>
                   </div>
                  ) : (
                    <>
                    
                    </>
                  )}
                </>
              ))}
        </div>
      </div>
    </>
  );
};

export default Details;
