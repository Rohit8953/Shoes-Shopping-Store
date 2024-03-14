import React, { useContext } from 'react'
import { data } from '../data';
import { Appcontext } from '../Recomeneded/Appcontext';

const Colorsfiler=()=>{


  let arr=[];
  let array=[];
  data.forEach((obj)=>{
          arr.push(obj.color);       
  })
  array=[...new Set(arr)]; 
  console.log(array);
  
  const{
      clickhandler
    }=useContext(Appcontext);


  return(
    <div>
      <p className='text-2xl font-bold mt-2 mb-2'>Color</p>
      {
        array.map((colordata,index)=>{
          return(
                  <div className='flex flex-row gap-2'key={index}>
                    <input type="radio" onClick={()=>clickhandler(colordata,index)} 
                    value={index}  
                    name="color"
                    className='w-5 h-5'
                    style={{accentColor: `${colordata}`}}
                    />                  
                    <p className=' capitalize'>{colordata}</p>
                  </div>
          )
        })    
      }
    </div>
  )

}
export default Colorsfiler