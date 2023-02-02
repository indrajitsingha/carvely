import React from 'react'

const Addcar = () => {
  return (
    <>

<div class="flex justify-center  flex-col sm:flex-row items-center w-[100%] min-h-[90vh]">
  <div class=" flex justify-center flex-col items-center w-[70%] h-[100%] mb-5">
    <div class="mx-auto max-w-lg text-center mb-10 ">
      <h1 class="text-2xl font-bold sm:text-3xl pt-10">Add New Cars Info</h1>

    </div>

    <form action="" class="space-y-4 sm:w-[70%] w-[90%]">
         

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-4 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-4 p-3 text-sm font-semibold"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>
          

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-4 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-4 p-3 text-sm font-semibold"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>


          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-4 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-4 p-3 text-sm font-semibold"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>




          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-4 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-4 p-3 text-sm font-semibold"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>



          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-4 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-4 p-3 text-sm font-semibold"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>



          

          

          <div class="mt-4 flex items-center justify-center">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span class="font-medium"> Send Enquiry </span>

            </button>
          </div>
        </form>

  </div>

  <div class="flex justify-center flex-wrap items-center w-[30%] h-[0%]  sm:block bg-red-500">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      class=" sm:h-[90vh] h-[0px] object-fit"
    />
  </div>
</div>

    </>
  )
}

export default Addcar