import React from "react";
import { Link } from "react-router-dom";    


function Programs() {
    return(
        <>
       <div className='w-full bg-[#f5efea]'>    
        <div className='container mx-auto h-auto min-h-[700px] pt-40 pb-32 px-4'>
        <div className='text-center mb-18'>
        <span className='text-gray-500 text-sm uppercase tracking-wide'>our programs</span>
        <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mt-4 leading-tight'>
            Registration is now open <br></br> Programs
            </h2>
        </div>
        {/* undergraduate and postgraduate section */}
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8'>
            <div className='bg-gray-100 rounded-2xl p-6 flex flex-col'>
           <div className='mb-8'>
            <span className='text-gray-400 uppercase text-sm'>Undergraduate</span>
            <h3 className='text-2xl text-gray-900 font-semibold'>Register for our undergraduate intership <br></br>programs</h3>
           </div>
           <div className='py-6'>
            <h3 className='text-gray-500'>Registration fee</h3>
            <div className='border-b-2 border-gray-400 w-fit'>
                <p className="text-5xl font-bold text-gray-900 mb-6">₦20,500</p>
            </div>
           </div>
           {/* paystack button */}
           <div className='flex flex-row justify-start gap-8 items-center'>
            <p className=''>Paystack</p>
            <Link to="/LogIn" className='bg-blue-500 rounded-2xl p-1 text-white hover:bg-blue-600'>Enrol now</Link>
           </div>
           <p className='text-gray-500 mt-5 font-serif'>Our undergraduate program in Forensic accept all disciplines and is designed to equip students with practical skills and knowledge to excel in their careers.</p>
        </div>
        {/* postgraduate section */}
        <div className='bg-[#155dfc] p-6 rounded-2xl '>
        <h3 className='uppercase text-gray-200 text-sm'>Postgraduate</h3>
        <h1 className='text-white font-semibold text-3xl py-5'> PGD in Forensic Science and <br></br> DNA Analysis</h1>
        <img className='h-40 w-full object-cover object-center rounded-lg' src='https://cefpads-frontend.vercel.app/assets/pg_student-Bls-fxpC.jpg' alt='Bls student'></img>
        <p className='text-white mt-5'>Our postgraduate diploma provides advanced, specialized training in forensic methodologies. It is designed to equip graduates with the skills and knowledge to excel in their careers.</p>
        </div>
        </div>
       </div>
       </div>
        </>
    );
}


export default Programs;