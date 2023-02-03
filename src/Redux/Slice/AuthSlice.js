import { createSlice } from "@reduxjs/toolkit";
import {getAuth, signOut} from "firebase/auth";
import { app } from "../../Firebase/Firebaseapp";

const auth =getAuth(app)

const AuthSlice =createSlice({
    name:"Authtentation",
    initialState:{
        userEmail:"",
        userpasword:"",
        userDetails:false,
        user:"",

    },
    reducers:{
        singinUser(state,action){ 
            state.userEmail=action.payload.email
            state.userpasword=action.payload.password

        },
        sessionChecking(state,action){
            state.userDetails="true"
            state.user=action.payload

        },
        logoutAuth(state,action){
            signOut(auth)
        }

    }
    
})

export default AuthSlice.reducer


export const {singinUser,sessionChecking,logoutAuth}=AuthSlice.actions