import React from "react";

const About = () => {
  return (
    <div className="sm:min-h-[100vh] min-h-[70vh] w-[100%] flex flex-col  justify-center items-center">

      <div className=" sm:min-h-[90vh] min-h-[70vh] w-[100%] flex  justify-center items-center  ">
        <div className="sm:w-[100%] sm:h-[90%] w-[90%] h-[90%] mt-2 flex sm:flex-row flex-col  justify-center items-center  gap-5">

          <div className="image sm:w-[25%] sm:h-[100%] w-[90%] h-[90%] flex flex-col  justify-center items-center border-4">

            <div className="w-[100%] h-[100%]  ">
              <img
                src="./img/in4.jpg"
                className=" w-[100%] object-contain "
                alt=""
              />
            </div>


          </div>

          <div className="image sm:w-[40%] sm:h-[100%] w-[90%] h-[90%]  flex flex-col  gap-10 justify-center items-center  ">

            <div className="sm:w-[80%] w-[100%] h-[30%]  sm:mr-[160px] box arrow-right hover:scale-105 transition duration-200 ease-in-out ">
              <div className="  flex items-center justify-center  py-1 ">
                <div className="rounded-lg shadow-xl bg-gray-900 text-white sm:w-[400px] w-[500px]">
                  <div className="border-b border-gray-800 px-8 py-3">
                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="px-8 py-6">
                    <p>
                      <em className="text-blue-400">const</em>{" "}
                      <span className="text-green-400">aboutMe</span>{" "}
                      <span className="text-pink-500">=</span>{" "}
                      <em className="text-blue-400">function</em>(){" "}
                    </p>
                    <p>
                      &nbsp;&nbsp;<span className="text-pink-500">return</span>{" "}
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                      <span className="text-yellow-300">'Indrajit Singha'</span>,
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
                      <span className="text-yellow-300">
                        'fullstack-developer'
                      </span>
                      ,
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;website:{<a href="https://indrajitsingha.netlify.app/"><span className=" font-bold text-red-400 underline ml-2">Portfolio Link</span></a>}
                      <span className="text-yellow-300"></span>
                    </p>
                    <p>&nbsp;&nbsp;</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:w-[80%] w-[100%] h-[30%]  sm:ml-[160px]  box  arrow-left hover:scale-105 transition duration-200 ease-in-out ">
              <div className="  flex items-center justify-center py-5 ">
                <div className="rounded-lg shadow-xl bg-gray-900 text-white sm:w-[400px] w-[500px] ">
                  <div className="border-b border-gray-800 px-8 py-3">
                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="px-8 py-6">
                    <p>
                      <em className="text-blue-400">const</em>{" "}
                      <span className="text-green-400">aboutMe</span>{" "}
                      <span className="text-pink-500">=</span>{" "}
                      <em className="text-blue-400">function</em>(){" "}
                    </p>
                    <p>
                      &nbsp;&nbsp;<span className="text-pink-500">return</span>{" "}
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                      <span className="text-yellow-300">'Arnab Singha'</span>,
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
                      <span className="text-yellow-300">
                        'fullstack-developer'
                      </span>
                      ,
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;website:{<a href="https://storied-tulumba-72291d.netlify.app/"><span className=" font-bold text-red-400 underline ml-2">Portfolio Link</span></a>}
                      <span className="text-yellow-300"></span>
                    </p>
                    <p>&nbsp;&nbsp;</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="image sm:w-[25%] sm:h-[100%] w-[90%] h-[90%]  flex flex-col  justify-center items-center border-4 ">

            <div className="w-[100%] h-[100%]  ">
              <img
                src="./img/Arnabimg.jpg"
                className=" w-[100%] object-contain "
                alt=""
              />
            </div>



          </div>
        </div>
      </div>



      <div className="sm:w-[100%] sm:h-[90%] w-[100%] h-[90%] mt-2 flex sm:flex-row flex-col  justify-center items-center  gap-5">

        <section class="bg-white dark:bg-gray-900 w-[100%] ">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to Talk to us so Drop a Massege </p>
            <form action="#" class="space-y-8">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
              </div>
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." />
              </div>
              <button type="button" class="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Send Massege</button>
            </form>
          </div>
        </section>
      </div>




    </div>




  );
};

export default About;
