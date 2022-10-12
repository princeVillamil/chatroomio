import { useEffect, useState } from "react"

export default function Login() {
  // e.preventDefault();
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
  return (
    <section className="w-full min-h-screen bg-white dark:bg-gray-900">
        <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
            <nav className="md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    {/* <button className="md:hidden">
                        <span x-show="isOpen">
                            <svg className="w-6 h-6 fill-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                            </svg>
                        </span>

                        <span x-show="!isOpen">
                            <svg className="w-6 h-6 text-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                            </svg>
                        </span>
                    </button> */}

                    <div>
                        <a className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">ChatRoomIo</a>
                    </div>
                </div>

                <div className="absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 top-16 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center">
                    <a href="#" className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"> Account</a>
                    <a href="#" className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400">Log in </a>

                    <button className="w-full p-4 transition-colors duration-300 bg-gray-100 rounded-md dark:bg-gray-800 md:w-auto md:mx-6 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <div className="flex items-center justify-center -mx-1">
                            <p className="mx-1 text-sm text-gray-600 dark:text-white">Sign up</p>
                        </div>
                    </button>
                </div>
            </nav>

            <section className="flex items-center flex-1">
              <div className="my-0 mx-auto w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Log in</h1>
                <form action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                  <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-400">Username</label>
                    <input type="text" name="username" id="username" className="border-b-2 border-gray-700 w-full px-2 py-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" className=" border-b-2 border-gray-700 w-full px-2 py-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    <div className="flex justify-end text-xs dark:text-gray-400">
                      <button>Show password :)</button>
                    </div>
                  </div>
                  <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Log in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                  <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                  <button aria-label="Log in with Google" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                  </button>
                  <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                      <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                    </svg>
                  </button>
                  <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                      <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                  <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-100"> Sign up</a>
                </p>
              </div>
            </section>

            <footer className="flex flex-col items-center mt-12 sm:flex-row sm:justify-between">
                {/* <a href="#" className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"> Privacy Policy </a> */}
								<label htmlFor="toggleTwo" className="flex items-center cursor-pointer select-none">
									<div className="relative">
											<input type="checkbox" id="toggleTwo" className="sr-only"/>
											<div className="block bg-[#E5E7EB] w-14 h-8 rounded-full"></div>
											<div className="
												dot
												absolute
												left-1
												top-1
												bg-white
												w-6
												h-6
												rounded-full
												transition
												"></div>
									</div>
								</label>
								

                <div className="mt-4 -mx-4 md:mt-0">
                    <a href="#" className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Facebook</a>

                    <a href="#" className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Instagram</a>

                    <a href="#" className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">LinkedIn</a>
                </div>
            </footer>
        </div>
    </section>
  )
}
