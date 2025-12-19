import React from 'react';
import {Link} from 'react-router-dom';



function LogIn () {
    return(
        <>
        <div className='fixed inset-0 h-auto bg-black/20 backdrop-blur-lg z-50 flex items-center justify-start md:justify-center px-4 py-10 overflow-scroll'>
        <div className="w-full max-w-md min-h-[250px] bg-white rounded-sm flex flex-col justify-center items-center gap-2">
         <img alt="Logo" className="w-[70px]" src="https://cefpads-frontend.vercel.app/assets/Logo-B7HpFSaX.png"></img>
         <h2 className="text-neutral-700 text-lg">You need to be logged in to register</h2>
         <p className="text-gray-500 mb-4 text-sm">In order to save your record in our database</p>
         <Link to= "/SignIn" className="bg-[#2f584f] rounded-sm text-white px-4 py-1 font-semibold ">Login</Link>
        </div>
        </div>
        </>
    )
}




export default LogIn;