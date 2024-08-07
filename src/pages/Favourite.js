import React from 'react'
import HomeCarList  from "../components/HomeCarList"
import { useSelector } from 'react-redux'


function Favourite() {
 
  const {mark}=useSelector((state)=>state);
 
 
  return (
    



    <div className='w-[90%] flex flex-row mx-auto justify-center flex-wrap' >{
     mark.map((car)=>
        (
            <HomeCarList  key={car.id} car={car} ></HomeCarList>
        
        )
          )
      
    }</div>
  )
}

export default Favourite