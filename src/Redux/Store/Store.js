import { configureStore } from "@reduxjs/toolkit";
import  AuthSlice from '../Slice/AuthSlice'
import DataSlice from "../Slice/DataSlice";

const store=configureStore({
    reducer:{
        FirebaseAuth: AuthSlice,
        CarData:DataSlice
    }
})

export default store
