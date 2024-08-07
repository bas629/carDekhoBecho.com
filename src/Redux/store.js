import {configureStore} from "@reduxjs/toolkit"
import  Mark from "./slici/Mark"

export const    store =configureStore(
 {
   reducer:{
 mark:Mark

   }

 }


)