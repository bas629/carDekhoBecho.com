import "./App.css";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Filter from "./pages/Filter";
 import Car from "./pages/Car";
import Navbar from "./pages/Navbar";
import React,{useEffect,useState} from "react";
import LearnMore from "./pages/LearnMore";


function App() {
  const [currPlace,setCurrPlace]=useState("Jabalpur"); 
 
   let user_loc = navigator.geolocation;
   function geolocator() {
     if (user_loc) {
         user_loc.getCurrentPosition(success);
     } else {
        console.log (  "Your browser doesn't support geolocation API");
     }
   }
   function success(data) {
     const c={lat: data.coords.latitude,
      lon: data.coords.longitude};
      fetchLocation(c);
   }

   async function fetchLocation(position) {
  try{
    const{lat,lon}=position;
    console.log(lat," ",lon)
    
   const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b4352a684e32c8459f68854f784cc8b3&units=metric`); 
    const data= await res.json(); 
   setCurrPlace(data.name);
    console.log(data.name);

  }
 catch (e) {

  console.log("Geolocation is not ok supported by this browser.");

 }




   } 


  
  useEffect(() => {
   
    geolocator(); 

   },[])



  return (


   
  





    <div>
  
    <Navbar currlocation={currPlace}></Navbar>
   <Routes>
   <Route path="/" element={<Home ></Home>}></Route>
   <Route path="/favourite" element={<Favourite></Favourite>}></Route>
   <Route path="/filter/:place/:filters/:filterss" element={<Filter></Filter>}></Route>
   <Route path="/car/:cars" element={<Car></Car>}></Route>
   <Route path="/learnMore/:name/:id" element={<LearnMore></LearnMore>}></Route>
 </Routes>

 <footer>
   
   <div className="h-fit  mt-[10%]  bg-blue-700 relative ">
    


  
  <div className="footer-container z-30  flex flex-col   justify-center left-[15%] top-[40%] text-2xl gap-5 text-white py-10 mx-auto my-auto">
    <div className="footer-links  text-white font-senibold">
      <a href="/">Home</a> 
      <a href="/about">About Us</a> 
      <a href="/services">Services</a> 
      <a href="/contact">Contact Us</a> 
      <a href="/faq">FAQ</a> 
      <a href="/terms">Terms of Service</a> 
      <a href="/privacy">Privacy Policy</a>
    </div>
    <div class="footer-info text-2xl font-bold ">
      <p>&copy; 2024 CarDeknobecho.com All rights reserved.</p>
    </div>
  </div>






   </div>

</footer>




</div>

 



  );
}

export default App;
