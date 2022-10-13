import React from 'react'
import { useState } from 'react'

export default function Nav() {
	let [isNavShow, setIsNavShow] = useState(false)
	
	const showNavFunc = () =>{
		// alert('hell')
		setIsNavShow(!isNavShow)
	}

  return (
    <nav className="md:flex md:items-center md:justify-between">
				<div className="flex items-center justify-between">
						<button className="md:hidden" onClick={showNavFunc}>
								<span x-show="x" className={isNavShow ? '': 'hidden'}>
										<svg className="w-6 h-6 fill-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
												<path
														d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
										</svg>
								</span>

								<span x-show="-" className={!isNavShow ? '': 'hidden'}>
										<svg className="w-6 h-6 text-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
												<path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
										</svg>
								</span>
						</button>

						<div>
								<a className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="/">ChatRoomIo</a>
						</div>
				</div>

				<div className={isNavShow ? 'md:shadow-none shadow-md absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 transition-all duration-300 ease-in-out bg-gray-300 dark:bg-gray-800 top-16 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center' 
				: 'md:shadow-none shadow-md absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 transition-all duration-300 ease-in-out bg-gray-300 dark:bg-gray-800 top-16 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 hidden md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center'}>
						<a href="/" className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"> Join</a>
						<a href="/login" className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400">Log in</a>
						<a href="/signup" className="outline-5 text-center md:w-auto md:mx-0 md:p-2 md:bg-white md:hover:text-blue-500 md:dark:hover:text-blue-400 p-4 w-full block text-gray-600 transition-colors duration-300 bg-gray-100 rounded-md dark:bg-gray-900 dark:text-white md:px-6 hover:bg-gray-200 md:hover:bg-white md:dark:hover:bg-gray-900 dark:hover:bg-gray-700">Sign up </a>

						{/* <button className="cursor-pointer w-full p-4 transition-colors duration-300 bg-gray-100 rounded-md dark:bg-gray-800 md:w-auto md:mx-6 hover:bg-gray-200 dark:hover:bg-gray-700">
								<div className="flex items-center justify-center -mx-1">
										<p className="mx-1 text-sm text-gray-600 dark:text-white">Sign up</p>
								</div>
						</button> */}
				</div>
		</nav>
  )
}
