import React, { useContext, useEffect, useState } from 'react'
import { data } from './data'
import { Appcontext } from './Recomeneded/Appcontext';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Card=()=>{
const[arr,setarr]=useState(data);
const{
    btnvalue,
    Addtocart,
    like,
    likehandler,
 }=useContext(Appcontext);
 
useEffect(()=>{
    setarr([]);
    if( btnvalue==="all"){
      setarr(data);
     }

data.forEach((element)=>{    
    if (btnvalue===(element.company)||
        btnvalue===(element.category)||
        btnvalue===(element.color)||
        btnvalue===(element.newPrice)||
        btnvalue===(element.title)
        ){
            setarr((prevArrayData) => [...prevArrayData, element]);
    }
})
},[btnvalue]);


  return(
    <div className=' flex flex-wrap justify-center gap-10 pt-10 border-l-2 border-slate-400 p-2'>
        {
          arr.map((deta,index)=>{
            return(
                <div className='bg-white text-black w-[250px] flex flex-col justify-between border-2 p-4 shadow-inner shadow-slate-600 hover:shadow-[rgba(0,_0,_0,_0.3)_0px_60px_40px_-7px] hover:scale-110 transition delay-100  rounded-md'>
                  <div >
                  <img src={deta.img} width={250} alt="" />
                  <h6 className='font-bold text-xl mt-2'>{deta.title}</h6>
                  <div className='flex flex-row  items-center'>
                    <p className=' text-amber-500'>{deta.star}</p>
                    <p className=' text-amber-500'>{deta.star}</p>
                    <p className=' text-amber-500'>{deta.star}</p>
                    <p className=' text-amber-500'>{deta.star}</p>
                    <p className=' text-amber-500'>{deta.star}</p>
                    <p className='ml-2' >{deta.reviews}</p>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-2'>
                       <p className='line-through'>{deta.prevPrice}</p>
                       <p>{deta.newPrice}$</p>
                    </div>
                    <div onClick={()=>likehandler(index)} >
                     {
                      like[index]?(<FaHeart className=' text-rose-600'  />):(<FaRegHeart  />)
                     }
                    </div>
                  </div>
                  <p>{deta.company}</p>
                  <p>{deta.category}</p>
                 </div>
                  <button className='border-2 p-1 rounded-md mx-auto '
                   onClick={()=>Addtocart(index)}
                  >
                    Add-To-Cart
                  </button>
                </div>
            )
          })
        }  
    </div>
  )
}
export default Card