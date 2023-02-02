import React from 'react'

const CarProduct = () => {
  return (
    <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow sm:w-[25%] mt-5">
  <img
    src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    class="aspect-video w-full object-cover"
    alt=""
  />
  <div class="p-4">
    {/* <p class="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p> */}
    <h3 class="text-xl font-medium text-gray-900">Hyundai Verna </h3>
    <h3 class="text-xl font-medium text-gray-900">Rs: 9.64 - 15.72 Lakh* </h3>
    <p class="mt-1 text-gray-500">The Hyundai Verna is priced from Rs 9.44 lakh to Rs 15.53 lakh (ex-showroom Delhi)</p>
    <div class="mt-4 flex gap-2">
      <span
        class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
      >
        Design
      </span>
      <span
        class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
      >
        Product
      </span>
      <span
        class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600"
      >
        See More
      </span>
    </div>
  </div>
</div>
  )
}

export default CarProduct