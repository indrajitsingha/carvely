import React from 'react'
import { useSelector } from 'react-redux'

const Pagination = ({ setTo, setForm, form, to }) => {

	const { Cardetails } = useSelector((state) => state.CarData)

	const postPerPage = 4
	const pageCountLength = Math.ceil((Cardetails.length + 1) / postPerPage)
	const array = [...Array(pageCountLength).keys()].map(i => i + 1);

	const previous = () => {
		if (to > 0) {
			setTo(to - (form - to))
			setForm(form - postPerPage)
			console.log('previous')
		}
	}

	const nextPage = () => {
		if (form < (Cardetails.length + 1)) {
			setTo(form)
			setForm(form + postPerPage)
		}
	}

	const onNumberClick =(no)=>{ 
		setTo((no-1)*postPerPage)
		setForm(no*postPerPage)
	}

	return (
		<div className='h-[10vh] w-[100%] flex justify-center items-start my-5'>
			<ul class="inline-flex -space-x-px">

				<li >
					<a href="#none"
						onClick={previous} class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						Prev
					</a>
				</li>
				{array && array.map((x) => {
					return (

						<li >
							<a href="#none"
								onClick={()=>onNumberClick(x)} class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								{x}
							</a>
						</li>

					)
				})

				}

				<li >
					<a href="#none"
						onClick={nextPage} class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						Next
					</a>
				</li>

			</ul>
		</div>
	)
}

export default Pagination