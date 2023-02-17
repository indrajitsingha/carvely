// import {useState,useEffect} from "react";
// import {app} from './Firebaseapp'
// import { getAuth,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
// import { useDispatch, useSelector } from 'react-redux'


// const {userEmail,userpasword }=useSelector((x)=>x.FirebaseAuth)



// const auth =getAuth(app)

// const [userDetails, setuserDetails] = useState(false)
// const [user, setuser] = useState("")



// useEffect(()=>{
//     onAuthStateChanged (auth ,(user)=>{
//         if(user){
//             console.log('you log in');
//             setuserDetails(true)
//             setuser(user);
//         }
//         else{
//             console.log('You loged out')
//             setuserDetails(false)
//         }
//     })     
//   },[])



//   const singinUser=(userEmail,userpasword)=>{
//     signInWithEmailAndPassword(auth,userEmail,userpasword)
//   }



// // {
// //   createUserWithEmailAndPassword(auth,state.email,state.password)
// // .then((value)=>console.log(value));}