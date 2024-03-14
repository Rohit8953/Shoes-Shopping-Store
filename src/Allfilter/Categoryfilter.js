import React, { useContext } from 'react'
import '../index.css';
import { data } from '../data';
import { Appcontext } from '../Recomeneded/Appcontext';

const Categoryfilter=()=>{

  let arr=[];
  let array=[];
  data.forEach((obj)=>{
          arr.push(obj.category);       
  })
  array=[...new Set(arr)]; 
  console.log(array);
  
  const{
  
    clickhandler
   }=useContext(Appcontext);

  return (
    <div className=''>
       <h1 className='text-2xl font-bold mb-3'>Category</h1>
      <div className='flex flex-row gap-2 '>
      <input type="radio" onClick={()=>clickhandler("all")}   
                    name="category"
                    className='w-5 h-5 accent-[#eb1e08]'
                    /> 
        <p>All</p>
      </div>
      {
        array.map((categorydata)=>{
          return(
                  <div className='flex flex-row gap-2  '>
                    <input type="radio" onClick={()=>clickhandler(categorydata)}   
                    name="category"
                    value={categorydata}
                    className='w-5 h-5 accent-[#eb1e08]'
                    /> 
                    <p className=' capitalize'>{categorydata}</p>
                  </div>
          )
        })    
      }
        
    </div>
  )
}
export default Categoryfilter