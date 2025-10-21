import React from 'react'
import { ArrowRight } from 'lucide-react';




function Area() {
return (
    <>
    <div className="w-full h-auto py-12 sm:py-20 bg-[#f5efea]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[550px]">
            {/*Header section*/}
            <div className="flex flex-col">
                <div className="space-y-4 sm:space-y-5 flex-1">
                  <span className="inline-block text-xs sm:text-sm border border-black/50 py-1 px-4 rounded-full text-gray-700 my-2">Areas of Study</span>
                  </div>
                  <div className="lg:flex lg:flex-row lg:items-center lg:justify-between gap-6 ">
                <h2 className='font-semibold text-2xl sm:text-3xl lg:text-4xl lg:my-4 max-w-xl leading-tight text-gray-900'>
                            Advance your career and education through.
                        </h2>
                
                    <button className=' bg-[#2f584f] text-white text-xs p-1 pr-4 rounded-full flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer my-5'>
                        <span className='bg-white text-black rounded-full p-1'>
                            <ArrowRight size={16}/>
                        </span>
                        APPLY NOW
                    </button>
                   </div>
                   </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 bg-white mt-16">
         {/* First card */}
    <div className="bg-white rounded-[2px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-40 overflow-hidden">
         <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"src="https://cefpads-frontend.vercel.app/assets/pg_student-Bls-fxpC.jpg" alt='cefpad teams'/>
        </div>
        <div className='mt-5 ml-5'>
            <h1 className='font-semibold text-xl text-gray-900'>BLS Training</h1>
            <p className='text-gray-600 text-sm leading-relaxed'>Master basic life support techniques and <br></br> emergency response skills essential for <br></br>healthcare professionals.</p>
        </div>
        <div className='flex items-center justify-between pt-4 border-t border-gray-100 ml-5'>
           <div className='flex items-center gap-3'>
            <div><img className='w-10 rounded-full'src='https://cefpads-frontend.vercel.app/assets/DirectorPic-BF16gGZS.png'alt='director passport' /></div>
            <div>
                <h1 className='font-medium text-sm text-gray-900'>Prof. Eddy Enis</h1>
                <p className='text-xs text-gray-500'>---</p>
            </div>
            </div> 
            <div>
                <button className='p-2 hover:bg-gray-50 rounded-full transition-colors border-[0.5px] border-gray-200'>
                    <ArrowRight size={16} className='text-gray-400'/>
                </button>
            </div>
        </div>

    </div>
   {/* Second card*/}
 <div className="bg-white rounded-[2px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-40 overflow-hidden">
         <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"src="https://cefpads-frontend.vercel.app/assets/it_bg-DvExZ-fW.jpg" alt='cefpad teams'/>
        </div>
        <div className='mt-5 ml-5'>
            <h1 className='font-semibold text-xl text-gray-900'>Undergraduate Internship</h1>
            <p className='text-gray-600 text-sm leading-relaxed'>Gain hands-on professional experience <br></br> through structured internship programs <br></br> across various industries.</p>
        </div>
        <div className='flex items-center justify-between pt-4 border-t border-gray-100 ml-5'>
           <div className='flex items-center gap-3'>
            <div><img className='w-10 rounded-full'src='https://cefpads-frontend.vercel.app/assets/DirectorPic-BF16gGZS.png'alt='director passport' /></div>
            <div>
                <h1 className='font-medium text-sm text-gray-900'>Prof. Eddy Enis</h1>
                <p className='text-xs text-gray-500'>---</p>
            </div>
            </div> 
            <div>
                <button className='p-2 hover:bg-gray-50 rounded-full transition-colors border-[0.5px] border-gray-200'>
                    <ArrowRight size={16} className='text-gray-400'/>
                </button>
            </div>
        </div>

    </div>
    {/* Third card */}
    <div className="bg-white rounded-[2px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-40 overflow-hidden">
         <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"src="https://cefpads-frontend.vercel.app/assets/PG_bg-BdowCu_6.jpg" alt='cefpad teams'/>
        </div>
        <div className='mt-5 ml-5'>
            <h1 className='font-semibold text-xl text-gray-900'>PG Masters Program</h1>
            <p className='text-gray-600 text-sm leading-relaxed'>Advanced postgraduate education designed <br></br> to deepen expertise and accelerate career <br></br> advancement.</p>
        </div>
        <div className='flex items-center justify-between pt-4 border-t border-gray-100 ml-5'>
           <div className='flex items-center gap-3'>
            <div><img className='w-10 rounded-full'src='https://cefpads-frontend.vercel.app/assets/DirectorPic-BF16gGZS.png'alt='director passport' /></div>
            <div>
                <h1 className='font-medium text-sm text-gray-900'>Prof. Eddy Enis</h1>
                <p className='text-xs text-gray-500'>---</p>
            </div>
            </div> 
            <div>
                <button className='p-2 hover:bg-gray-50 rounded-full transition-colors border-[0.5px] border-gray-200'>
                    <ArrowRight size={16} className='text-gray-400'/>
                </button>
            </div>
        </div>

    </div>
     

</div>
    </div>


    </div>
    </>
)
}




export default Area;

