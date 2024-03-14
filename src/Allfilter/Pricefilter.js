import React, { useContext } from 'react'
import { data } from '../data';
import { Appcontext } from '../Recomeneded/Appcontext';

const Pricefilter = () => {

  let arr=[];
  let array=[];
  data.forEach((obj)=>{
          arr.push(obj.newPrice);       
  })
  array=[...new Set(arr)]; 
  array.sort();
  console.log(array);
  
  const{

      clickhandler
   }=useContext(Appcontext);
 
return (
    <div>
      <p className='text-2xl font-bold mt-2 mb-2'>Price</p>
      {
        array.map((pricebtn)=>{
          return(
                  <div className='flex flex-row gap-2'>
                    <input type="radio" onClick={()=>clickhandler(pricebtn)} 
                    value={pricebtn}  
                    name="pricebtn"
                    className='w-5 h-5 accent-[#eb1e08]'
                    /> 
                      <p>{pricebtn}$</p>
                  </div>
          )
        })    
      }
    </div>
  )
}
export default Pricefilter