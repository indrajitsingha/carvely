import { createSlice } from "@reduxjs/toolkit";


const AuthSlice =createSlice({
    name:"Authtentation",
    initialState:{
        userEmail:"",
        userpasword:"",
    },
    reducers:{
        singinUser(state,action){
            state.userEmail=action.payload.email
            state.userpasword=action.payload.password

        }

    }
    
})

export default AuthSlice.reducer


export const {singinUser}=AuthSlice.actions