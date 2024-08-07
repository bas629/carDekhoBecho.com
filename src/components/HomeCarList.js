import React,{useState} from 'react'
import "../App.css"
import {add,remove} from "../Redux/slici/Mark"
import {useSelector,useDispatch} from "react-redux"
import { NavLink } from 'react-router-dom'
function HomeCarList({car}) {

    const {mark}=useSelector((state)=>state);
    const despitch=useDispatch();
    const [show,setShow]= useState(false);
  
  
    function addit()
    { 
       despitch(add(car)); 
       console.log(mark);
       console.log("ok");
      setShow(true);
    } 
    function removeit(id)
    { 
       despitch(remove(id)); 
       console.log(mark);
       console.log("ok");
       setShow(false);
    } 

  return (
    <div> <div   className='w-[410px] h-[600px]  border  border-10 border-slate-800 rounded-[20px] scale-90   gap-5  flex flex-col items-center p-2  ease-linear duration-200   hover:scale-95 shadow-2xl'> 
    <p className='pt-3 text-3xl   font-bold'>{car.name.length<15 ?(car.name) :(car.name.substring(0,15)) }...</p>
  <img src={car.image}  alt={car.name} className='h-[200px] '></img>
  <p className='text-center font-light '>{car.description}</p>
  <p className='text-green-700 text-3xl  font-semibold' ><span className='text-blue-600'>Price: </span>{new Intl.NumberFormat().format(car.price)}  ₹ </p>
  <div className='flex flex-col gap-2 w-[90%]' >
{  mark.some((p) => p.id===car.id) ?( <button class="button-28 text-2xl font-semibold" role="button" onClick={()=>removeit(car.id)}>Remove at List</button>)  :

 (  <button class="button-28 text-2xl font-semibold" role="button" onClick={addit}>Add at List</button>) }

 <NavLink to={`/learnMore/${car.name}/${car.id}`} > <button class="button-28 text-2xl font-semibold" role="button"  >Learn More</button> </NavLink>

  </div>
   </div></div>
  )
}

export default HomeCarList