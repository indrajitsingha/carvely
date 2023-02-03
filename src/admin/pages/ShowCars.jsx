import React from "react";

const ShowCars = () => {
  return (
    <>
      <section className="relative py-16 bg-blueGray-50 w-[100%] min-h-[90vh]">
        <div className="w-full mb-12 px-4">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
  bg-pink-900 text-white"
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                  <h3 className="font-semibold text-lg text-white">Card Tables</h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto ">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      Car Name
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      Company
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      <select
                        name="menu"
                        className="card_Select bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-[17px] rounded-full outline-none"
                      >
                        <option
                          disabled
                          selected
                          className=" bg-gray-800 text-white"
                        >
                          Category
                        </option>
                        <option value="5" className="bg-gray-800 text-white">
                          5
                        </option>
                        <option value="10" className="bg-gray-800 text-white">
                          10
                        </option>
                        <option value="15" className="bg-gray-800 text-white">
                          15
                        </option>
                        <option value="20" className="bg-gray-800 text-white">
                          20
                        </option>
                      </select>
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      Price
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      status
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="h-[50px] w-[100px] bg-white"
                        alt="..."
                      />
                      <span className="ml-3 font-bold text-white">
                        {" "}
                        Argon Design System{" "}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      $2,500 USD
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-circle text-orange-500 mr-2"></i>pending
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <h1>$ 700000</h1>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Active
                        </button>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <div className=" h-[102px] md:h-[50px] w-[33%] md:w-[100%] flex justify-center items-center flex-col md:flex-row">
                        <button className="h-[50px] min-w-[50%] text-pink-600  text-[25px] md:pl-2">
                          <i className="fa-regular fa-pen-to-square text-green-500"></i>
                        </button>
                        <button className="h-[50px] min-w-[50%] text-red-600 text-[25px] md:pl-2">
                          <i className="fa-solid fa-trash text-yellow-500"></i>
                        </button>
                      </div>
                    </td>
                  </tr>


				  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="h-[50px] w-[100px] bg-white"
                        alt="..."
                      />
                      <span className="ml-3 font-bold text-white">
                        {" "}
                        Argon Design System{" "}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      $2,500 USD
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-circle text-orange-500 mr-2"></i>pending
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <h1>$ 700000</h1>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Active
                        </button>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <div className=" h-[102px] md:h-[50px] w-[33%] md:w-[100%] flex justify-center items-center flex-col md:flex-row">
                        <button className="h-[50px] min-w-[50%] text-pink-600  text-[25px] md:pl-2">
                          <i className="fa-regular fa-pen-to-square text-green-500"></i>
                        </button>
                        <button className="h-[50px] min-w-[50%] text-red-600 text-[25px] md:pl-2">
                          <i className="fa-solid fa-trash text-yellow-500"></i>
                        </button>
                      </div>
                    </td>
                  </tr>


				  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="h-[50px] w-[100px] bg-white"
                        alt="..."
                      />
                      <span className="ml-3 font-bold text-white">
                        {" "}
                        Argon Design System{" "}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      $2,500 USD
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-circle text-orange-500 mr-2"></i>pending
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <h1>$ 700000</h1>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Active
                        </button>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <div className=" h-[102px] md:h-[50px] w-[33%] md:w-[100%] flex justify-center items-center flex-col md:flex-row">
                        <button className="h-[50px] min-w-[50%] text-pink-600  text-[25px] md:pl-2">
                          <i className="fa-regular fa-pen-to-square text-green-500"></i>
                        </button>
                        <button className="h-[50px] min-w-[50%] text-red-600 text-[25px] md:pl-2">
                          <i className="fa-solid fa-trash text-yellow-500"></i>
                        </button>
                      </div>
                    </td>
                  </tr>


				  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="h-[50px] w-[100px] bg-white"
                        alt="..."
                      />
                      <span className="ml-3 font-bold text-white">
                        {" "}
                        Argon Design System{" "}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      $2,500 USD
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-circle text-orange-500 mr-2"></i>pending
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <h1>$ 700000</h1>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Active
                        </button>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <div className=" h-[102px] md:h-[50px] w-[33%] md:w-[100%] flex justify-center items-center flex-col md:flex-row">
                        <button className="h-[50px] min-w-[50%] text-pink-600  text-[25px] md:pl-2">
                          <i className="fa-regular fa-pen-to-square text-green-500"></i>
                        </button>
                        <button className="h-[50px] min-w-[50%] text-red-600 text-[25px] md:pl-2">
                          <i className="fa-solid fa-trash text-yellow-500"></i>
                        </button>
                      </div>
                    </td>
                  </tr>









                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCars;
