import React from "react";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
function Contact() {
    const text = "Centre for Forensic Programme and DNA analysis•";
    const chars = text.split('');
    const angleStep = 360 / chars.length;

    return (
        <>
            <div className="w-full h-auto bg-[#f5efea] py-12 sm:py-20">
                <div className='max-w-[1000px] mx-auto bg-white '>
                    
                    {/* Rotating Circular Badge */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-36 h-36 mt-[-80px]">
                            {/* Main circular badge */}
                            <div className="absolute inset-0 bg-teal-800 rounded-full shadow-2xl flex items-center justify-center">
                                {/* Center star/cross icon */}
                                <svg className="scale-[1.5] sm:scale-[2]" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1 L13 11 L23 12 L13 13 L12 23 L11 13 L1 12 L11 11 Z" fill="white" stroke="none"></path>
                                </svg>
                            </div>

                            {/* Rotating circular text */}
                            <motion.div
                                className="absolute inset-0"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <div className="relative w-full h-full">
                                    {chars.map((char, i) => (
                                        <span
                                            key={i}
                                            className="absolute left-1/2 top-0 text-white text-xs font-semibold"
                                            style={{
                                                transformOrigin: '0 72px',
                                                transform: `rotate(${i * angleStep}deg)`,
                                                height: '72px',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                paddingTop: '1px'
                                            }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-around items-center'>
                     {/*Contact write up*/}
                     <div className="mt-[-50px] ml-5 hidden lg:block">
                        <img className='w-[300px] h-full' src='https://cefpads-frontend.vercel.app/assets/contactboy-Bv2fi5Io.png' alt='contact-boy'/>
                     </div>
                     <div className="flex flex-col gap-6 items-center lg:w-[45%]">
                        <button className="border-2 border-black/50 mt-5 py-1 px-4 rounded-full">Registration are now open!</button>
                        <h1 className="text-black font-semibold text-3xl text-center">Contact Us today at CEFPADS for more enquires</h1>
                         <button className='bg-[#2f584f] text-white text-sm p-1 pr-4 rounded-full flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer'>
                        <span className='bg-white text-black rounded-full p-1'>
                            <ArrowRight size={16}/>
                        </span>
                        CONTACT US
                    </button>
                     </div>
                      <div className="mt-[-50px] ml-5 hidden lg:block">
                        <img className='w-[300px] h-full' src='https://cefpads-frontend.vercel.app/assets/contactgirl-3MWo3GEG.png' alt='contact-girl'/>
                     </div>
                   </div>
                </div>
            </div>
        </>
    );
}

export default Contact;