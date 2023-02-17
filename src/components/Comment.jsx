import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { getFirestore, addDoc, collection, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";
import { app } from '../Firebase/Firebaseapp';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const fireStoreDb = getFirestore(app);

const Comment = ({ CarsId }) => {
    const { user } = useSelector((state) => state.FirebaseAuth)
    const [input, setInput] = useState("")
    const [allComments, setComments] = useState([]);
    const [reply, setReplay] = useState(false)
    const [reRender, setRender] = useState(false)
    const [carid] = useState(CarsId)
    const navigate = useNavigate()

    const SubmitData = () => {

        if (!user) {
            navigate('/login')
        }

        else {
            console.log(input, CarsId, user)
            if(input.length>2){
                RegisterComment(input, carid)
                setRender(!reRender)
                setInput("")
            }
       

        }
    }

    const RegisterComment = async (input, carid) => {

        await addDoc(collection(fireStoreDb, 'Comments'), {
            id: uuidv4(),
            comment: input,
            userEmail: user,
            carid: carid,
            Date: new Date().toLocaleDateString(),
            Time: new Date().toLocaleTimeString()
        })
    }

    const getComments = async (carid) => {
        const collectionRef = collection(fireStoreDb, 'Comments')
        const q = query(collectionRef, where('carid', '==', carid))
        const snapshot = await getDocs(q)
        return snapshot
    }


    useEffect(() => {
        getComments(carid).then((comments) => setComments(comments.docs));
        console.log('i am get comments');
    }, [carid,reRender]);


    const deleteComment = async (id) => {
        await deleteDoc(doc(fireStoreDb, "Comments", id));
        setRender(!reRender)
    }


    const replayComment=()=>{
        setReplay(!reply)
    }




    return (
        <div className="container mx-auto my-4 px-4 lg:px-20 overflow-hidden" >

            <div className="w-full p-8 my-4 md:px-12 lg:w-12/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                <div className="flex">
                    <h1 className="font-bold uppercase text-2xl">You Can ask any question , We are Happy to Help You 🙋</h1>
                </div>
                <div className="my-4">
                    <textarea placeholder="Message*" value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-22 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required/>
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                    <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" type='submit' onClick={SubmitData}>
                        Send Message
                    </button>
                </div>
            </div>


            {allComments && allComments.map((x, index) => {
                return (

                    <div className="m-2" key={index + 1}>
                        <div className="component flex pt-8 [90%] lg:w-[100%]">
                            <div className="w-full rounded bg-gray-100 relative px-8 py-4">
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <div>
                                            <div className="h-12 w-12  rounded-full bg-cover">
                                                <img src="http://picsum.photos/50" alt="" className="rounded-full" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <div className="font-bold">{x.data().userEmail}</div>
                                            <div className="mt-1 text-xs text-gray-500">Posted at {x.data().Date + " " + x.data().Time} </div>
                                        </div>
                                    </div>
                                    <div className="text-yellow-400 flex items-center"><svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"></path>
                                    </svg><span className="text-xl font-bold ml-2">4.7</span></div>
                                </div>
                                <div className="my-6 border-b"></div>
                                <div className="text-sm">{x.data().comment}</div>


                                { user && reply ?
                                    <div className='mt-10'>
                                        <div className="flex">
                                            <div>
                                                <div className="h-12 w-12  rounded-full bg-cover">
                                                    <img src="http://picsum.photos/50" alt="" className="rounded-full" />
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <div className="font-bold"><span className='text-violet-500'>{user}</span> Replying to  <span className='text-red-400'>{x.data().userEmail}</span></div>
                                            </div>
                                        </div>

                                        <div className="my-4">
                                            <textarea placeholder="Message*" value={input} onChange={(e) => setInput(e.target.value)} className="w-full min-h-15 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                                        </div>


                                    </div> :""
                                }


                                <div>
                                    <div className="flex gap-10 pt-6 justify-between">

                                        <button className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md" onClick={replayComment}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                            </svg>

                                          { reply ? "Send" : "replay"}
                                        </button>

                                        {x.data().userEmail === user ?
                                            <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md" onClick={() => deleteComment(x.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>

                                                Delete
                                            </button> : ""
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }



            )



            }


        </div>
    )
}

export default Comment