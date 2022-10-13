import { useEffect, useState } from "react"

import Footer from "../components/Footer"
import Nav from "../components/Nav"

export default function Hero() {
	let [darkMode, setDarkMode] = useState(!localStorage.getItem('theme') ? false: JSON.parse(localStorage.getItem('theme')))
	useEffect(()=>{
		if(!darkMode){
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', JSON.stringify(false))
			return
		}
		document.documentElement.classList.add('dark')
		localStorage.setItem('theme', JSON.stringify(true))
	}, [darkMode])

	function handleFooterBtn(){
		setDarkMode(!darkMode)
		
	}
	return (
		<section className="w-full min-h-screen bg-white dark:bg-gray-900">
				<div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
						<Nav/>
						<section className="flex items-center flex-1">
							<div className="flex flex-col w-full ">
									<h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
											<span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
													Chat
											</span>

											<span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
													Room
											</span>
									</h1>

									<p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
											Hangout and chat with friends in a virtual playground!
									</p>

									<form className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
											<input type="text" className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" placeholder="Chat Room Id" />
											<button type="submit" className="px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform dark:text-gray-900 dark:bg-violet-400 dark:hover:bg-violet-500 bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
													Join ChatRoom
											</button>
									</form>

									<p className="mt-8 text-center text-gray-700 dark:text-white text-md md:text-xl">Create an account to chat :)</p>
							</div>
						</section>
					<Footer handleFooterBtn={handleFooterBtn}/>
				</div>
		</section>
	)
}
