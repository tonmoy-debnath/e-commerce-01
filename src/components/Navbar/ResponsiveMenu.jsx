import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ResponsiveMenu({ showMenu, setShowMenu }) {
  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md`}>
            <div>
                <div className='flex items-center justify-start gap-3'>
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Hello User</h1>
                        <h1 className='text-sm text-slate-500'>Premium User</h1>
                    </div>
                </div>
                <nav className='mt-12'>
                <ul className='flex flex-col space-y-4 text-xl'>
                    <Link to='/'><li onClick={()=>setShowMenu(false)}>Home</li></Link>
                    <Link to='/mens'><li onClick={()=>setShowMenu(false)}>Mens</li></Link>
                    <Link to='/womens'><li onClick={()=>setShowMenu(false)}>Womens</li></Link>
                    <Link to='/kids'><li onClick={()=>setShowMenu(false)}>Kids</li></Link>
                    <Link to='/login'><button onClick={()=>setShowMenu(false)} className='bg-red-500 text-white px-4 py-1 rounded-md'>Login</button></Link>
                    
                </ul>
                </nav>
            </div>
            <div className=''>
                <h1>
                    Made with ❤️ by tonmoy
                </h1>
            </div>
        </div>
  )
}

export default ResponsiveMenu