import React,{useState} from 'react'
import data from '../data'

import HomeCarList  from "../components/HomeCarList"



function Home() {
  




  return (
    <div className='flex flex-row  flex-wrap justify-center  mx-auto p-10 gap-10 '>
  { 
     data.map((car)=>
(
    <HomeCarList  key={car.id} car={car} ></HomeCarList>

)
  )  }
  


    


   



    </div>
  )
}

export default Home