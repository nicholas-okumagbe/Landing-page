import React from "react";



function CreateAccount () {
    return(
        <>
         <div className=' fixed onset-0 w-full h-auto min-h-screen bg-[#2f584f] z-50 flex justify-center items-center  '>
        <div className='w-full max-w-[1000px] min-h-[600px] bg-white rounded-3xl  '>
        <div className="flex flex-row gap-2 ">
            <img alt="logo" className="w-[30px] ml-5 mt-5" src="https://cefpads-frontend.vercel.app/assets/Logo-B7HpFSaX.png"></img>
            <h2 className="mt-6 font-semibold text-sm  ">Home</h2>

        </div>
        <div className='flex flex-row justify-center items-center gap-5 '>
        <form className="min-h-[400px] w-[320px] pr-2 ">
             <h2 className='text-2xl font-semibold track mb-2 tracking-wide text-neutral-600 text-center'>Create an account</h2>
            <p className='text-sm text-center font-semibold text-neutral-600 mb-10'>Please fill in the details below to create your account</p>
            <div className='space-y-4'>
                <input placeholder='Full Name *' type='text'  className='border-b-2 border-neutral-500 w-full p-2 outline-none text-sm '></input>
                <input placeholder='Email Address *' type='email' name='email' className='border-b-2 border-neutral-500 w-full p-2 outline-none text-sm'></input>
                <input placeholder='Password *' type='password' name='Password' className='border-b-2 border-neutral-500 w-full p-2 outline-none text-sm'></input>
                <input placeholder='Confirm Password *' type='Password' name='ConfirmPassword' className='border-b-2 border-neutral-500 w-full p-2 outline-none text-sm'></input>
                <p className='text-sm text-neutral-600 flex justify-center  items-center'>Already have an account? <span className='text-sm text-[#2f584f]'> Login</span></p>
                <button type='submit' className='bg-[#37685d] hover:bg-[#2f584f] text-white w-full rounded-lg p-2 text-sm cursor-pointer transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed'>Create Account</button>
                
            </div>
        </form>
        <div className='w-full md:w-1/2 h-full hidden md:block rounded-2xl overflow-hidden'>
           <img alt="crime-scene" className="w-full h-[550px] object-cover object-center m-5" src="https://cefpads-frontend.vercel.app/assets/crime-BBjNjRJs.jpg"></img>
        </div>
    
        </div>
        </div>
        </div>
        </>
    )
}




export default CreateAccount;