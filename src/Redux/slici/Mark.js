import {createSlice} from "@reduxjs/toolkit" 

 export const Mark=createSlice(
  { name:"mark", 
    initialState:[],
    reducers:{
     add:(state,action)=>{
        state.push(action.payload)

     },
 
     remove:(state,action)=>{
       return state.filter((car)=>car.id!==action.payload)

     }


    }
  })

  export const {add, remove} = Mark.actions;
 export default Mark.reducer;




