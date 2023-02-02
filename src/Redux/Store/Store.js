import { configureStore } from "@reduxjs/toolkit";
import  AutSliceRrducer from '../Slice/AutSlice'

const store=configureStore({
    reducer:{
        FirebaseAuth: AutSliceRrducer,
    }
})

export default store