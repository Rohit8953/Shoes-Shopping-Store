import React, { useState } from 'react'
import { createContext } from 'react'
import { data } from '../data';

export const Appcontext=createContext();
export default function AppcontextProvider({children}){
const[btnvalue,setbtnvalue]=useState("all"); 
const[like,setlike]=useState([false]);
const[addtocart,setaddtocart]=useState([]);
const[likeheart, setlikeheart]=useState([]);
function clickhandler(btn){
  setbtnvalue(btn);   
}

const Addtocart=(index)=>{
    setaddtocart((prev)=>[...new Set([...prev, data[index]])] )
 }

const removefromcart = (index2) => {
  setaddtocart((prev) => prev.filter((item,index) => index !== index2));
};

const likehandler=(index)=>{
  console.log(index);
  setlike((prev)=>{
    const newLike = [...prev];
    newLike[index] = !newLike[index]; 
    return newLike;
  });
  
  setlikeheart((prev)=>[...new Set([...prev, data[index]])] );
}


const removelikeheaet=(idx)=>{
  setlikeheart((prev) => prev.filter((item,index) => index !== idx));
}


console.log(likeheart);
const value={
    data,
    btnvalue,
    setbtnvalue,
    clickhandler,
    like,
    Addtocart,
    addtocart,
    removefromcart,
    setlike,
    likehandler,
    likeheart,
    setlikeheart,
    removelikeheaet
};

return(
   <Appcontext.Provider value={value}>
         {children}
   </Appcontext.Provider>
  )
}
  