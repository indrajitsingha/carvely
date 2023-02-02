import React from "react";

const AddAdmin = () => {
  return (<>

     <h2 class="font-semibold text-gray-800 text-2xl text-center w-[100%] mt-[5vh]">Admin Users</h2>
 
    <div className="h-[90vh] w-[100%] flex justify-center  items-center mb-10  ">
    
      <div className="flex justify-center flex-col items-cente h-[100%] w-[70%]  mt-[10vh] bg ">
        <div className="flex justify-center  items-cente h-[80%] w-[100%]  sm:p-7 compare  rounded">
          <table class="table-auto w-[100%]">
            <thead class="text-xs font-semibold uppercase ">
              <tr>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Name</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Email</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Spent</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Country</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
              <tr className=" h-[5vh]">
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        class="rounded-full"
                        src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                        width="40"
                        height="40"
                        alt="Alex Shatov"
                      />
                    </div>
                    <div class="font-medium text-gray-800">Alex Shatov</div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">alexshatov@gmail.com</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    $2,890.66
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <button className="h-[50px] min-w-[50%] text-pink-600  text-[25px] md:pl-2">
                    <i className="fa-regular fa-pen-to-square text-green-600"></i>
                  </button>
                  <button className="h-[50px] min-w-[50%] text-red-600 text-[25px] md:pl-2">
                    <i className="fa-solid fa-trash text-red-500"></i>
                  </button>
                </td>
              </tr>
              <tr className=" h-[5vh]">
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        class="rounded-full"
                        src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                        width="40"
                        height="40"
                        alt="Alex Shatov"
                      />
                    </div>
                    <div class="font-medium text-gray-800">Alex Shatov</div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">alexshatov@gmail.com</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    $2,890.66
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <button className="h-[50px] min-w-[50%] text-pink-600  text-[25px] md:pl-2">
                    <i className="fa-regular fa-pen-to-square text-green-500"></i>
                  </button>
                  <button className="h-[50px] min-w-[50%] text-red-600 text-[25px] md:pl-2">
                    <i className="fa-solid fa-trash text-yellow-500"></i>
                  </button>
                </td>
              </tr>

              <tr className=" h-[5vh]">
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        class="rounded-full"
                        src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                        width="40"
                        height="40"
                        alt="Alex Shatov"
                      />
                    </div>
                    <div class="font-medium text-gray-800">Alex Shatov</div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">alexshatov@gmail.com</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    $2,890.66
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <button className="h-[50px] min-w-[50%] text-pink-600  text-[25px] md:pl-2">
                    <i className="fa-regular fa-pen-to-square text-green-500"></i>
                  </button>
                  <button className="h-[50px] min-w-[50%] text-red-600 text-[25px] md:pl-2">
                    <i className="fa-solid fa-trash text-yellow-500"></i>
                  </button>
                </td>
              </tr>

              <tr className=" h-[5vh]">
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        class="rounded-full"
                        src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                        width="40"
                        height="40"
                        alt="Alex Shatov"
                      />
                    </div>
                    <div class="font-medium text-gray-800">Alex Shatov</div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">alexshatov@gmail.com</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    $2,890.66
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <button className="h-[50px] min-w-[50%] text-pink-600  text-[25px] md:pl-2">
                    <i className="fa-regular fa-pen-to-square text-green-500"></i>
                  </button>
                  <button className="h-[50px] min-w-[50%] text-red-600 text-[25px] md:pl-2">
                    <i className="fa-solid fa-trash text-yellow-500"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center h-[20%] w-[100%] ">
          <button className=" bg-[crimson] h-[50px] w-[120px] rounded text-white">
           
            Add Admin
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddAdmin;

{
  /* <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800 text-center">Admin Users</h2>
            </header> */
}
