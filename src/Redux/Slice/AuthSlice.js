
import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../Firebase/Firebaseapp";

const auth = getAuth(app)

const AuthSlice = createSlice({
    name: "Authtentation",
    initialState: {
        user: "",
        userUid:"",
        adminPerks:"",
        userDetails: false,
        updateRefresh:false,
        Query:""


    },
    reducers: {
        singinUser(state, action) {
            state.user = action.payload
        },
        sessionChecking(state,action) {
            state.userDetails = "true"
            state.user = action.payload
        },
        logoutAuth(state) {
            signOut(auth)
            state.user=""
        },

        updateRef(state){
            state.updateRefresh=!state.updateRefresh
        },
        adminCheck(state,action){
            state.adminPerks=action.payload
        },
        getUserUId(state,action){
            state.userUid=action.payload
        },

       
    }

})

export default AuthSlice.reducer


export const { singinUser, sessionChecking, logoutAuth,updateRef,adminCheck,getUserUId } = AuthSlice.actions