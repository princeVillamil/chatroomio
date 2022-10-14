import { useEffect, useState } from "react"

import ContactsUser from '../components/ContactsUser'
import ChatUI from "../components/ChatUI"

export default function MainChatHome() {
  let userInfo = {
    userName: 'YourUsernameSuperLong',
    email: 'email@email.com',
    password: 'Password****',
    contacts: ['id', 'id'],
    pfp: 'https://source.unsplash.com/40x40/?portrait?1',
    _id: 'Id',
    cloudInaryId: 'ID',
    isOnline: true,
  }
  let placeHOlderContacts = [
    {
      userName: 'userNameOne',
      email: 'email@email.com',
      password: 'Password****',
      contacts: ['id', 'id'],
      pfp: 'https://source.unsplash.com/40x40/?portrait?',
      _id: 'Id',
      cloudInaryId: 'ID',
      isOnline: true,
    },
    {
      userName: 'userNameTwo',
      email: 'email@email.com',
      password: 'Password****',
      contacts: ['id', 'id'],
      pfp: 'https://source.unsplash.com/40x40/?portrait?',
      _id: 'Id',
      cloudInaryId: 'ID',
      isOnline: false,
    },
    {
      userName: 'userNameThree',
      email: 'email@email.com',
      password: 'Password****',
      contacts: ['id', 'id'],
      pfp: 'https://source.unsplash.com/40x40/?portrait?',
      _id: 'Id',
      cloudInaryId: 'ID',
      isOnline: true,
    },
    {
      userName: 'userNameFourLong',
      email: 'email@email.com',
      password: 'Password****',
      contacts: ['id', 'id'],
      pfp: 'https://source.unsplash.com/40x40/?portrait?',
      _id: 'Id',
      cloudInaryId: 'ID',
      isOnline: false,
    },
    {
      userName: 'userNameFourLong',
      email: 'email@email.com',
      password: 'Password****',
      contacts: ['id', 'id'],
      pfp: 'https://source.unsplash.com/40x40/?portrait?',
      _id: 'Id',
      cloudInaryId: 'ID',
      isOnline: false,
    },
    {
      userName: 'userNameFourLong',
      email: 'email@email.com',
      password: 'Password****',
      contacts: ['id', 'id'],
      pfp: 'https://source.unsplash.com/40x40/?portrait?',
      _id: 'Id',
      cloudInaryId: 'ID',
      isOnline: true,
    }
  ]
	// let [darkMode, setDarkMode] = useState(!localStorage.getItem('theme') ? false: JSON.parse(localStorage.getItem('theme')))
  let [darkMode, setDarkMode] = useState(true)
  let [isDashboardShow, setIsDashboardShow] = useState(true)
  let [dashboardPosition, setDashboardPosition] = useState(0)
  let [chatWidth, setChatWidth] = useState('calc(100% - 230px)')



	useEffect(()=>{
		if(!darkMode){
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', JSON.stringify(false))
			return
		}
		document.documentElement.classList.add('dark')
		localStorage.setItem('theme', JSON.stringify(true))
	}, [darkMode])
  useEffect(()=>{
    if(isDashboardShow){
      setDashboardPosition('0')
      window.innerWidth >= 768 ? setChatWidth('calc(100% - 230px)') : setChatWidth('100%')
      return
    }
    setDashboardPosition('64')
    setChatWidth('100%')
  }, [isDashboardShow])



  return (
    <section className="w-full min-h-screen bg-white dark:bg-gray-900">
      <div id="sidebar" className={`z-20 overflow-y-scroll transition duration-300 -translate-x-${dashboardPosition} fixed bg-gray-100 rounded-md flex flex-col h-full p-3 w-60 dark:bg-gray-900 dark:text-gray-100`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2>ChatRoomIo</h2>
            <button className="p-2" onClick={e=>setIsDashboardShow(!isDashboardShow)}>
              <svg className="w-6 h-6 fill-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </button>
          </div>
          <div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center py-4">
                <button type="submit" className="p-2 focus:outline-none focus:ring">
                  <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-400">
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
            </div>
          </div>
          <div className="flex-1">
            <ul className="overflow-y-scroll overflow-x-hidden max-h-72 pt-1 pb-4 space-y-1 text-sm rounded-sm py-2 px-1 flex flex-col">
              {
                placeHOlderContacts.map((user, i)=>{
                  return <ContactsUser key={`User${i}`} user={user}/>
                })
              }
            </ul>
            <ul className="pt-4 pb-2 space-y-1 text-sm">
              <li className="rounded-sm mb-1">
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                    <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                    <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                    <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                  </svg>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                    <rect width="32" height="64" x="256" y="232"></rect>
                  </svg>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex p-2 mt-12 space-x-4 justify-self-end">
          <img src={userInfo.pfp} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
          <div>
            <h2 className="text-lg font-semibold">{userInfo.userName.length >= 15 ? userInfo.userName.slice(0, 10) + '...' : userInfo.userName}</h2>
            <button className='absolute hover:border-b-2 hover:border-gray-900 dark:hover:border-b-2 dark:hover:border-white'>
              Email: <span>{userInfo.email.length >= 15 ? userInfo.email.slice(0, 10) + '...' : userInfo.email}</span>
            </button>
          </div>
        </div>
      </div>
      <button className={`z-10 fixed transition top-5 left-5 duration-300 ${isDashboardShow ? '-translate-x-10': ''}`} onClick={e=>setIsDashboardShow(!isDashboardShow)}>
          <svg className="w-6 h-6 text-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
      </button>

      {/* <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
        <button className={`fixed transition inset-x-10 duration-300 ${isDashboardShow ? '-translate-x-10': ''}`} onClick={e=>setIsDashboardShow(!isDashboardShow)}>
          <svg className="w-6 h-6 text-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
        </button>
      </div> */}

      <ChatUI chatWidth={chatWidth} userInfo={userInfo}/>

    </section>
  )
}
