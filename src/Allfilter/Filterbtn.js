import React, { useContext} from 'react'
import { Appcontext } from '../Recomeneded/Appcontext';
import { data } from '../data';

const Filterbtn=()=>{
let arr=[];
let array=[];
data.forEach((obj)=>{
      arr.push(obj.company);       
})
array=[...new Set(arr)]; 
console.log(array);

const{
    clickhandler
 }=useContext(Appcontext);

  return (
    <div className='border-l-2  border-slate-400'>
      <h1 className='font-bold text-2xl p-2'>Recommended</h1>
       <div className=''>
         <button onClick={()=>clickhandler("all")} className='border-2 border-black rounded-md font-medium mx-3 p-2 hover:bg-stone-300 mt-5'>Allproducts</button>
          {
           array.map((btn)=>{
                   
                   return(
                      <button onClick={()=>clickhandler(btn)} className=' flex-wrap border-2 border-black hover:bg-stone-300 rounded-md mx-3 p-2 mt-5 font-medium 'key={btn}>{btn}</button>
                   )
            })
          }
        </div>
    </div>
  )
}
export default Filterbtn