import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BookOpenCheck } from "lucide-react";



function WhyChoose () {

    return(
      <>
      <div className='w-full h-auto py-12 sm:py-20 bg-[#ffffff]'>
        <div className='w-full  lg:w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 min-h-[550px] flex flex-col lg:flex-row items-start justify-between gap-16 max-w-6xl'>
         {/* Stack images */}
         <div className='w-full  grid grid-cols-4 grid-flow-row h-[450px] gap-2 py-20 '>
         <div className='w-full h-full '>
        <img  src='https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center "/>
         <img src='https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center "/>
          <img src='https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center"/>
           <img src='https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center"/>
         </div>
          <div className='w-full h-full'>
             <img src='https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center "/>
              <img src='https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center "/>
               <img src='https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center "/>
                <img src='https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center "/>
          </div>
          <div className='w-full h-full'>
             <img src='https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center" />
              <img src='https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center" />
               <img src='https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center "/>
                <img src='https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center "/>
          </div>
          <div className='w-full h-full'>
             <img src='https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center"/>
              <img src='https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center "/>
               <img src='https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center"/>
                <img src='https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80' alt=''  className="h-[100px] w-full mb-1 object-cover object-center "/>
          </div>
         </div>

        {/*Write up section*/}
           <div className='mt-10 lg:mt-32 flex flex-col'>
            <div>
            <button className=' border border-black/50 rounded-full text-gray-700 p-1'>Why choose us</button>
            <h1 className='text-gray-900 font-semibold text-3xl mt-8'>CEFPADs is a place where Learning <br></br> meet passion</h1>
             </div>
            <div className='flex flex-row justify-start'>
              <div className='border border-black/50 w-14 h-14 rounded-full flex items-center justify-center mt-5'>
             <FaGraduationCap className='size-9'/>
             </div>
             <div className='ml-5 mt-5'>
             <h1 className='text-green-400 font-semibold '>Building Capacity</h1>
             <p>We are committed to building <br></br> expertise capacity</p>
             </div>
            </div>
          {/*second icon space*/}
             <div className='flex flex-row justify-start'>
              <div className='border border-black/50 w-14 h-14 rounded-full flex items-center justify-center mt-5'>
             <BookOpenCheck className='size-9'/>
             </div>
             <div className='ml-5 mt-5'>
             <h1 className='text-green-400 font-semibold'>Trusted by student</h1>
             <p>Empowering students with <br></br> requisite skills</p>
             </div>
            </div>
           </div>

        </div>
      </div>
      
      </>

    )
}

export default WhyChoose;