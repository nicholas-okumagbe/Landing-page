import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from 'react-router-dom'; 




function About() {
    return(
        <>
        <div className='relative z-10 w-full h-[700px] bg-black text-white'>
         <div className='absolute inset-0 top-0 left-0 w-full h-full'>
           <img src='https://cefpads-frontend.vercel.app/assets/comingsoon-DjnXHhZP.gif' alt='Animated 3D DNA for Entertainment' className='w-full h-full object-cover object-center'/>
         <div className='absolute top-0 left-0 inset-0 w-full h-full bg-black/80'></div>
         {/* text section */}
         <div className='relative container mx-auto  h-full text-center flex flex-col items-center justify-center gap-4 -mt-[700px]'>
            <h2 className='text-xl md:text-3xl text-gray-400'>Good Afternoon Visitor</h2>
            <h1 className='text-2xl md:text-5xl text-white font-semibold max-w-[800px]'>This page is under development, please check back soon after our official launch!</h1>
            <Link to='/' data-discover='true'>
            <button className='mt-8 flex items-center justify-center gap-2 bg-[#2f584f] py-2 px-3 rounded-xl cursor-pointer'>
            <ArrowLeft size={30} className='text-black bg-white  rounded-xl'/> 
            Back to Home
            </button>
            </Link>
         </div>
         </div>
        </div>
        </>
    )
}


export default About;