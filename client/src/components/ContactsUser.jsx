import React from 'react'

export default function ContactsUser({user}) {
  return (
    <li className='px-2 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-800'>
      <button className="cursor-pointer flex items-center gap-2">
        <img alt="" className={
          user.isOnline ? 'w-8 h-8 rounded-full ring-2 ring-offset-2 dark:bg-gray-500 ring-green-500 ring-offset-white-800 dark:ring-offset-gray-900' :
          'w-8 h-8 rounded-full ring-2 ring-offset-2 dark:bg-gray-500 ring-gray-500 ring-offset-white-800 dark:ring-offset-gray-900'
        } src={user.pfp + `${Math.floor(Math.random()*6)}`} />
        <div className='flex flex-col'>
          <h4 className='text-left'>{user.userName.length >= 15 ? user.userName.slice(0, 10) + '...' : user.userName}</h4>
          <span className='text-left'>Status: {user.isOnline ? <span className='text-green-500 font-bold'>Online</span> : <span className='text-gray-500 font-bold'>Offline</span>}</span>
        </div>
      </button>
    </li>
  )
}
