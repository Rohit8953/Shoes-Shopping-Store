import React, { useState } from "react";
import Filterbtn from "./Allfilter/Filterbtn";
import Card from "./Card";
import Pricefilter from "./Allfilter/Pricefilter";
import Categoryfilter from "./Allfilter/Categoryfilter";
import Colorsfilter from "./Allfilter/Colorsfiler";
import Searchbtn from "./Allfilter/Searchbtn";
import { GiShoppingCart } from "react-icons/gi";
import { Route, Routes } from "react-router";
import Cart from "./BuyProducts/Cart";
import Like from "./BuyProducts/Like";
import { NavLink } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";

function App(){
const[bg,setbg]=useState(false);

return (
    <div className={bg?'bg-black text-white':'bg-white'}>
      <div className="flex flex-row ">
         <div className=" flex flex-col gap-5" >
            <div className=" border-b-2 border-slate-400 w-54 flex justify-center items-center mt-3">
              <NavLink to='/'>
                <GiShoppingCart className="text-7xl text-center" />
              </NavLink>
              
              <div className='flex flex-row border-2 rounded-3xl p-1 gap-1'>
                <IoMoonOutline className=" rotate-12 " onClick={()=>setbg(false)}/>
                <div onClick={()=>setbg(true)} className='w-4 h-4 rounded-full bg-black border border-orange-50'></div>
              </div>


            </div>

            <div className=" pl-14 pr-14">
                <Routes>
                  <Route path="/"element={<Categoryfilter/>}/>
                </Routes>
                <Routes >                 
                  <Route path="/"element={<Pricefilter/>}/>                 
                </Routes>
                <Routes >
                  <Route path="/"element={<Colorsfilter/>}/>
                </Routes>              
            </div>
         </div>

         <div className="flex flex-col w-full">
             <Searchbtn/>
             
             <Routes>
               <Route path="/" element={<Filterbtn/>}/>
             </Routes>

             <Routes>
               <Route path="/" element={<Card/>}/>
               <Route path="/like" element={<Like/>}/>
               <Route path="/cart" element={<Cart/>}/>
             </Routes>

         </div>
      </div>   
  </div>
  );
};


export default App;

