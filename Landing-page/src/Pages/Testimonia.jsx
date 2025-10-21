import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

function Testimonia () {

    return (
        <>
        <div className='w-full h-auto bg-[#f5efea] py-12 sm:py-20 '>
            <div className='max-w-[1000px] mx-auto px-7 flex flex-col lg:flex-row justify-between lg:justify-center lg:items-center'>
                {/* testimonia write up */}
                <div className='lg:border-r-[1px] lg:border-r-gray-500 pr-10'>
                    <button className='border border-black/50 py-1 px-4 rounded-full text-[#2f584f] font-semibold '>Testimonia</button>
                    <h1 className='text-black font-bold text-3xl pt-5'>Our exclusive <br></br> happy student <br></br>saying.</h1>
                    <div className='flex flex-row items-center justify-start pt-10 gap-2'>
                        <div className='bg-white w-9 h-9 rounded-full flex items-center justify-center'>
                     <ArrowLeft size={16} className='bg-white'/>
                     </div>
                     <div className='bg-teal-800 hover:bg-teal-700 w-9 h-9 rounded-full flex items-center justify-center'>
                     <ArrowRight size={16} className=' text-white'/>
                     </div>
                    </div>
                </div>
                {/* Trasformative*/}
                <div className=''>
                    <h1 className='text-[#2f584f] font-semibold my-5'>A Transformative Journey</h1>
                    <p className='text-black font-semibold text-2xl'>"I came to the centre for internship and I am pleased with the <br></br> staff and quality of knowledge available here especially the <br></br> hands-on experience."</p>
                    <div className='flex items-center gap-3 my-7'>
            <div><img className='w-10 rounded-full'src='https://cefpads-frontend.vercel.app/assets/UserAvatar1-Bs8a72Gr.png'alt='student' /></div>
            <div className=''>
                <h1 className='font-semibold text-sm text-gray-900 '>Erazua O.</h1>
                <p className='text-sm text-gray-500'>Intern</p>
            </div>
            </div>
                </div>
            </div>

        </div>
        </>
    )
}




export default Testimonia;


