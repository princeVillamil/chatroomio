import React from 'react'

export default function Footer({handleFooterBtn}) {
  function footerHandler(){
    // alert('hello')
    handleFooterBtn()
  }
  return (
    <footer className="flex flex-col items-center mt-12 sm:flex-row sm:justify-between">
      {/* <a href="#" className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"> Privacy Policy </a> */}
      <label htmlFor="toggleTwo" className="flex items-center cursor-pointer select-none">
        <div className="relative">
            <input type="checkbox" id="toggleTwo" className="sr-only" onClick={footerHandler}/>
            <div className="block transition-colors duration-300 bg-gray-900 dark:bg-white dark:hover:bg-blue-400 hover:bg-blue-400 w-10 h-5 rounded-full"></div>
            <div className="
              transition 
              duration-300
              bg-white-900
              dark:bg-gray-900
              dot
              absolute
              left-1
              top-1
              dark:left-6
              bg-white
              w-3
              h-3
              rounded-full
              "></div>
        </div>
      </label>
      

      <div className="mt-4 -mx-4 md:mt-0">
          <a href="https://twitter.com/reactJaMo" target='_blank' className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Twitter</a>

          <a href="https://github.com/princeVillamil" target='_blank' className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Github</a>

          <a href="https://www.linkedin.com/in/princevillamil/" target='_blank' className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">LinkedIn</a>
      </div>
  </footer>
  )
}
