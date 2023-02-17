# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




<!-- //**************************//////////// -->

update Data by Id

    console.log(carsId);
    // const getdata_withid = async () => {
    //   const docRef = doc(Firestore, "CarInfo", carsId);
    //   const docSnap = await getDoc(docRef);
    //   if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //     setCarInfo(docSnap.data());
    //   } else {
    //     console.log("No such document!");
    //   }
    // };

    // getdata_withid();




    import React,{useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
   <>
<div className="flex flex-wrap place-items-center ">
  <section className="relative mx-auto">
  
    <nav className="flex justify-between bg-gray-900 text-white w-screen h-[10vh]">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#none">
           {/* <img className="h-9" src="logo.png" alt="logo"/>  */}
           Carvely
        </a>
    
    <div   className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger" >
        <ul className="lg:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><NavLink className="hover:text-gray-200" to="/">Home</NavLink></li>
          <li><NavLink className="hover:text-gray-200" to="/cars">Cars</NavLink></li>
          <li><NavLink className="hover:text-gray-200" to="/category">Category</NavLink></li>
          <li><a className="hover:text-gray-200" href="#none">Contact us </a></li>
        </ul>
    </div>
      
      </div>

      <div className="cars  pt-5 pr-3 cursor-pointer sm:hidden " onClick={() => setNavbarOpen(!navbarOpen)} >
      <img className='h-[5vh] w-[10vh]' src="https://cdn.pixabay.com/photo/2013/07/12/17/17/sports-car-151962_960_720.png" alt="" />
        
      </div>
 
      
    </nav>
    
  </section>

  <Outlet/>
</div>
    
   </>
  )
}

export default Navbar





 <nav className="flex justify-between bg-green-500 text-white w-screen h-auto lg:h-[10vh] flex-col lg:flex-row ">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center flex-col lg:flex-row mb-2 lg:mb-0">
              <div className='flex justify-between items-center w-[100%]  lg:w-[20%]'>
                <a className="text-3xl font-bold font-heading" href="#nonenone">
                  Carvely Admin
                </a>

                <button className="menu-btn lg:text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="checkbox"
                  onClick={() => setNavbarOpen(!navbarOpen)} >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              <div className={'md:flex px-4 mx-auto flex-col lg:flex-row h-auto mt-[29px] lg:mt-0 justify-between w-[80%]' + (navbarOpen ? " flex" : " hidden")}>
                <ul className=" md:flex px-4 mx-auto font-semibold font-heading space-x-12 adminNav w-[100%] lg:w-auto menu border-b md:border-none ">
                  <li className='border-t md:border-none' type="checkbox"><NavLink className="bg-transparent lg:bg-transparent hover:text-gray-200 flex justify-center items-center mb-2 lg:mb-0 w-[300px] lg:w-[auto] h-[40px] ml-11 lg:ml-0  md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold" to="/admin" onClick={() => setNavbarOpen(!navbarOpen)} >Dashboard</NavLink></li>
                  <li className='border-t md:border-none'><NavLink className="bg-transparent lg:bg-transparent hover:text-gray-200 flex justify-center items-center mb-2 lg:mb-0 w-[300px] lg:w-[auto] h-[40px]" to="/admin/addcar" onClick={() => setNavbarOpen(!navbarOpen)} >Addcar</NavLink></li>
                  <li className='border-t md:border-none'><NavLink className="bg-transparent lg:bg-transparent hover:text-gray-200 flex justify-center items-center mb-2 lg:mb-0 w-[300px] lg:w-[auto] h-[40px]" to="/admin/showcars" onClick={() => setNavbarOpen(!navbarOpen)} >Showcars</NavLink></li>
                  <li className='border-t md:border-none'><NavLink className="bg-transparent lg:bg-transparent hover:text-gray-200 flex justify-center items-center mb-2 lg:mb-0 w-[300px] lg:w-[auto] h-[40px]" to="/admin/AddAdmin" onClick={() => setNavbarOpen(!navbarOpen)} >AddAdmin</NavLink></li>


                </ul>


              

              <div className='relative flex justify-end lg:justify-center items-center flex-col lg:flex-row'>
                <button className='bg-yellow-300 text-black p-2  font-semibold w-[300px] lg:w-auto ml-11 lg:ml-0' onClick={()=>setDropdown(!dropDown)}>
                {userEmail} ▶️
                </button>

                <button className={'h-[40px] w-[300px] lg:w-[100px] bg-red-400 ml-11 lg:ml-0 mt-2 lg:mt-0' +  (dropDown ? " bg-red-400 rounded-sm ml-2" : "block lg:hidden") } onClick={Logout}>
                  logout
                </button>

              </div>

              </div>

            </div>
          </nav>



          .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/email-already-in-use') {
              setError("This Email is already in use" )
            } else {
              setError(errorMessage )
            }
        })


        {Cars && Cars.map((x) => x.data()).reduce((acc, curr) => {
                        console.log(curr.BodyType)

                        if (acc[curr.BodyType]) {
                          acc[curr.BodyType]++
                        } else {
                          acc[curr.BodyType] = 1
                        }
                        return acc
                      }, []).length+1}














                       <div className="w-full my-4 md:px-12 lg:w-12/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl flex justify-between items-center flex-col lg:flex-row min-h-[10vh] bg-yellow-300 p-10" key={index + 1}>
                        <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-2'>
                            <div class=" bg-white p-2 pt-4 rounded shadow-lg w-[100%] lg:w-[80%]">
                                <div class="flex ml-3 w-[60%] flex-col">
                                    <div class="mr-3">
                                        <img src="http://picsum.photos/50" alt="" class="rounded-full" />
                                    </div>
                                    <div>
                                        <h1 class="font-semibold">{x.data().userEmail}</h1>
                                        <p class="text-xs text-gray-500">{x.data().Date + " " + x.data().Time}</p>
                                    </div>
                                    <div className="my-4 h-auto ">
                                        <h1 className='text-[20px] font-serif font-semibold  '>{x.data().comment}</h1>
                                    </div>
                                    <div class="md:flex md:flex-col md:justify-center">
                                        <h2 class="text-black text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
                                        {x.data().comment}
                                        </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end items-end bg-red-200 w-[20%] h-[100%]'>
                                <div className='flex justify-end items-end'>
                                    {x.data().userEmail === user ?
                                        <button type="button" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                <path d="M8 9h8v10H8z" opacity=".3"></path>
                                                <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                                            </svg>
                                            <span class="pl-2 mx-1">Delete</span>
                                        </button>
                                        : ""
                                    }
                                </div>
                            </div>
                        </div>