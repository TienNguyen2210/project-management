import React from 'react'
import { Menu, Moon, Search, Settings, Sun } from 'lucide-react'
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state';


const Navbar = () => {
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
	  dispatch(setIsDarkMode(!isDarkMode));
  }

  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black'>
        {/* Search bar */}
        <div className='flex items-center gap-8'>
            {/* Sidebar toggle button */}
            {!isSidebarCollapsed ? null : (
                <button onClick={toggleSidebar}>
                    <Menu className='h-8 w-8 dark:text-white' />
                </button>
            )}

            <div className='relative flex h-min w-[200px]'>
                <Search className='absolute left-[5px] top-1/2 mx-2 ml-0.5 h-5 w-5 -translate-y-1/2 transform cursor-pointer' />
                <input className='w-full rounded-lg border border-gray-200 bg-gray-50 p-2 pl-8 focus:border-transparent focus:outline-none dark:bg-gray-7 dark:text-white' type='search' placeholder=' Search...'/>
            </div>
        </div>

        {/* Icons  */}
        <div className='flex items-center gap-4'>
			<button onClick={toggleDarkMode}
				className={ 
					isDarkMode 
						? 'rounded-full p-2 dark:hover:bg-gray-700' 
						: 'rounded-full p-2 hover:bg-gray-100'
				}
			>
				{isDarkMode ? (
					<Sun className='h-6 w-6 cursor-pointer dark:text-white' />
				) : (
					<Moon className='h-6 w-6 cursor-pointer dark:text-white' />
				)}
			</button>

			<Link href='/settings' className={ 
				isDarkMode 
				? 'h-min w-min rounded-full p-2 dark:hover:bg-gray-700' 
				: 'h-min w-min rounded-full p-2 hover:bg-gray-100'
			}>
				<Settings className='h-6 w-6 cursor-pointer dark:text-white' />
			</Link>
			<div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block'></div>
        </div>
    </div>
  )
}

export default Navbar;