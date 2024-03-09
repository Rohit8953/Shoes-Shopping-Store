import React, { useContext, useState } from 'react'
import { Appcontext } from '../Recomeneded/Appcontext';

const Cart = () => {
  
    const{
        btnvalue,
        setbtnvalue,
        clickhandler,
        Addtocart,
        addtocart,
        removefromcart
     }=useContext(Appcontext);

     
     
  return (
<div>
     
      <div className='flex h-20 items-center border-l-2 border-b-2 border-gray-400 justify-between'>
        <div className='ml-24'>
            <p><span>Total Items:</span> {addtocart.length}</p>
            <span>Total Price: {(() => {
                let sum1 = 0;
                addtocart.forEach(({ newPrice }) => {
                  sum1 += parseFloat(newPrice); // Ensure proper addition, especially if newPrice is a string
                });
                return sum1.toFixed(2); // Round to 2 decimal places for currency, adjust as needed
              })()}$
            </span>
        </div>
        <h1 className='text-4xl font-bold'>Your Cart</h1>
        <button className='bg-orange-500 rounded-md mr-24  px-6 p-2'>
            Place Order
        </button>
      </div>

      <div className='flex flex-wrap justify-center gap-10 pt-20 border-l-2 border-slate-400 p-2'>
      
      {
        addtocart.map((cart, index)=>{
          return(
              <div className='w-[250px] flex flex-col justify-between border-2 p-4 shadow-inner shadow-slate-600 hover:shadow-[rgba(0,_0,_0,_0.3)_0px_60px_40px_-7px] hover:scale-110 transition delay-100  rounded-md'>
                <div >
                <img src={cart.img} width={250} alt="" />
                <h6 className='font-bold text-xl mt-2'>{cart.title}</h6>
                <div className='flex flex-row  items-center'>
                  <p className=' text-amber-500'>{cart.star}</p>
                  <p className=' text-amber-500'>{cart.star}</p>
                  <p className=' text-amber-500'>{cart.star}</p>
                  <p className=' text-amber-500'>{cart.star}</p>
                  <p className=' text-amber-500'>{cart.star}</p>
                  <p className='ml-2' >{cart.reviews}</p>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='flex flex-row gap-2'>
                     <p className='line-through'>{cart.prevPrice}</p>
                     <p>{cart.newPrice}$</p>
                  </div>
      
                </div>
                <p>{cart.company}</p>
                <p>{cart.category}</p>
               </div>
                <button className='border-2 p-1 rounded-md mx-auto '
                 onClick={()=>removefromcart(index)}
                >
                  Remove-from-Cart
                </button>
              </div>
              
          )
        })
      }  
  </div>
</div>
  )
}

export default Cart