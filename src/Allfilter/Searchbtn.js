import React, { useContext } from 'react'
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { Appcontext } from '../Recomeneded/Appcontext';
import { Link ,NavLink} from 'react-router-dom';

const Searchbtn = () => {

  const{
    clickhandler,
    likeheart,
    addtocart
  }=useContext(Appcontext);

  return (
    <div className=' flex  flex-row justify-between p-5 border-b-2 border-l-2 border-slate-400'>
        <input type="text"onChange={(event)=>clickhandler(event.target.value)} 
        placeholder='Enter your search shoes'
        className='border-2 border-neutral-950 rounded-md pl-2'/>
         
        <Link to='/'>
            <h1 className=' lg:text-3xl font-extrabold underline'>Top Shopping Store</h1>
        </Link>

        <div className='flex flex-row gap-4'>
           

           <NavLink to='/like'>
            <div className='relative'>
             <CiHeart className='md:text-4xl sm:text-3xl ' />
             {
              likeheart.length>0&&
             <span className=' absolute top-1 right-0 animate-bounce flex justify-center 
             items-center h-4 w-4 bg-green-500 rounded-full text-xs 
             text-white'>{likeheart.length}</span>
             }
            </div>
           </NavLink>
           
          <Link to='/cart' >
           <div className='relative'>
             <GiShoppingCart className='md:text-4xl sm:text-3xl '/>
             {
              addtocart.length>0&&
              <span className=' absolute top-1 right-0 animate-bounce flex justify-center 
               items-center h-4 w-4 bg-green-500 rounded-full text-xs 
               text-white'>{addtocart.length}</span>
             }
           </div>
          </Link>
        </div>
    </div>
  )
}

export default Searchbtn