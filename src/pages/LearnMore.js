 import React from 'react'
 import data from '../data'
 import {useLocation,useNavigate} from  "react-router-dom"
 function LearnMore() {
  
    const location=useLocation( ); 
    let id=location.pathname.split('/').at(-1);
    const  car=data[id-1]; 
    let navigate=useNavigate();


   return (
  <div>

     <div className=' ml-10 mt-5 text-2xl font-extrabold'> <button className='button-28  w-fit text-3xl font-bold'  onClick={()=>navigate(-1)} >Back</button>
     <div className='responsive-learn-More'>
      <img  src={car.image} className='box-1 ' ></img>
      <div className='box-2  '>
       <div className='text-3xl font-bold'>{car.name}</div>
       <div className='text-xl font-medium'>{car.description}</div>
       <div className='text-3xl  font-semibold' >Company: {car.company}</div>
       <div className='text-3xl  font-semibold text-green-600'><span className=' text-blue-700'>Price: </span >{new Intl.NumberFormat().format(car.price)}  ₹ </div>
       <div className='text-3xl  font-semibold'><span>Place: </span>{car.Place}</div>
      </div>
    </div>
     </div>
     </div>
   )
 }
 
 export default LearnMore