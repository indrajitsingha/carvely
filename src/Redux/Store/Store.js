import { configureStore } from "@reduxjs/toolkit";
import  AuthSlice from '../Slice/AuthSlice'

const store=configureStore({
    reducer:{
        FirebaseAuth: AuthSlice,
    }
})

export default store