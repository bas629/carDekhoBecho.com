import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { FaBookmark } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import "../App.css"

function Navbar({currlocation}) {
  const [show,notShow]=useState(false)
const [company,setCompany]=useState("All");
 const [price,setPrice]=useState("All");   
 const [place,setPlace]=useState("All");
 const[list,setList]=useState(0);
 const [currlocation,setCurrLocation]=useState(true);
 const {mark}=useSelector((state)=>state) 
 
 useEffect(()=>{

  setList(mark.length);

 },[mark])




     function  showfilter()
     {
        notShow(!show)
         

     }  
     function ok(event)
     {   if(event.target.name==="cars")
        { setCompany(event.target.value);} 
        if(event.target.name==="price")
            { setPrice(event.target.value);} 
        if(event.target.name==="cars")
          { setCompany(event.target.value);} 
          if(event.target.name==="place")
              { setPlace(event.target.value);} 
     } 
    
  return (
    <div>
      <div className="bg-blue-600 h-32 flex flex-row  items-center justify-around">
      <div className='responsive-logo' >
       <NavLink to="/" className='flex flex-row items-center gap-0 relative'> 
          <img src='/Clogo.png' className='w-40 absolute right-52 my-auto' alt='C'></img>
          <span className='text-white text-[30px] font-bold mb-4 my-auto'>arDekhoBacho.com</span>
        </NavLink>  </div>


           <div className=' flex flex-row items-center gap-8 relative'> 
      <NavLink to="/favourite">  <FaBookmark  color="white" fontSize="2.5em" ></FaBookmark>
 {    
    list >0 &&
 <div className='text-white text-2xl font-semibold  w-10 h-10 bg-red-700  text-center my-auto rounded-full absolute   bottom-3 scale-75 left-3 '     >
       {list}
      </div>
      }
      </NavLink> 
         <FaFilter onClick={showfilter} color="white" fontSize="2.5em" ></FaFilter>
            </div>       
   

        
        
        </div>   
        { show && 
             <div className= 'mt-10 w-[90%] h-[300px] bg-slate-300 rounded-lg mx-auto flex flex-col items-center justify-center  gap-3'>
         <div className='responsive-filter'> 
        
          <div className=' space-x-3'> <label htmlFor='price' >Price:</label>  
              <select id="price" name="price" onChange={ok}  className='w-[200px] 
               rounded-lg  p-2  overflow-scroll  '   >
        <option value="All">All</option> 
       <option value="100000">1 Lake</option>
   
     <option value="500000">5 Lake</option>
     <option value="1000000">10 Lake</option>
     <option value="2000000">20 Lake</option>
     <option value="3000000">30 Lake</option>
     <option value="4000000">40 Lake</option>
     <option value="5000000">50 Lake</option>
     <option value="5000000">60 Lake</option>
      </select></div> 
   
       <div className= '  space-x-2 '> <label htmlFor='cars' >company:</label>  
     <select id="cars" name="cars" onChange={ok}   className='w-[200px] 
               rounded-lg  p-2 '  >
        <option value="All">All</option> 
       <option value="Tata">Tata</option>
     <option value="Kia">Kia</option>
     <option value="Ford">Ford</option>
     <option value="Audi">Audi</option>
     </select>
</div>   
<div className=' space-x-3'> <label htmlFor='cars' >Place:</label>  
     <select id="place" name="place" onChange={ok}  className='w-[200px] 
               rounded-lg  p-2 '  >
        <option value="All">All</option> 
       <option value="Sihorā">sihora</option>
     <option value="Indora">Indora</option>
     <option value="Jabalpur">Jabalpur</option>
     <option value="Delhi">Delhi</option>
     </select>
     </div> 
      <br></br>
          
           <br></br>
           {/* <NavLink to={`/filter/${currlocation}/All/All`}><button>City</button></NavLink> */}


            </div>

 <NavLink to={`/filter/${place}/${company}/${price}`} className=" flex flex-row" > <button className='button-28 text-2xl font-bold' >click for Result</button></NavLink> 
       </div>
        }
     
     
     
     
      {
           !show && 
        <div className='mx-auto  w-[60%] h-[300px] rounded-lg   flex  justify-center items-center  box '>

      <NavLink to={`/filter/${currlocation}/${company}/${price}`} className="flex flex-col mt-20   z-10  justify-center items-center ">  <button  className='button-28 w-[300px] font-semibold  text-xl bg-white'> {
        
        
        
        
        
        }
        
        
        </button></NavLink> 





        </div>
      }
     
    
    </div>
  )
}

export default Navbar