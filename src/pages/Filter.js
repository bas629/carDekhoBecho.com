import React from 'react'
 import { useLocation } from 'react-router-dom'
 import data from '../data'
 import HomeCarList from '../components/HomeCarList';

function Filter() {
  const location = useLocation();
    let t=location.pathname.split('/').at(-2);
    let k=location.pathname.split('/').at(-1);
    let p=location.pathname.split('/').at(-3);
  console.log(t," ",k," ",p);

  return (
     <div>
      <div className='flex flex-row  flex-wrap justify-center  mx-auto p-10 gap-10 '>
   {
     data.map((car)=>
   {
     if(( t==="All" ||  car.company===t) && (k==="All" || k>=car.price) && (p==="All" || p===car.Place))
  {  
     return   (<HomeCarList car={car}></HomeCarList>)
  }
   
  }


     )


   }



    </div>


    </div>
  )
}

export default Filter