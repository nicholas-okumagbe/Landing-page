import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Counter Animation Component
function AnimatedCounter({ target, duration = 2, delay = 0 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                let start = 0;
                const increment = target / (duration * 60); // 60 FPS
                const counter = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        setCount(target);
                        clearInterval(counter);
                    } else {
                        setCount(Math.floor(start));
                    }
                }, 1000 / 60);

                return () => clearInterval(counter);
            }, delay * 1000);

            return () => clearTimeout(timer);
        }
    }, [isInView, target, duration, delay]);

    return <span ref={ref}>{count}</span>;
}

function AboutOurCenter() {
    return (
        <>
            <div className="bg-[#2f584f] min-h-screen flex flex-col lg:flex-row justify-center gap-20 lg:gap-0 p-8">
                <div className="relative">
                    <img 
                        className=" h-[350px] lg:h-[500px] w-full lg:w-[450px] object-cover object-center overflow-hidden rounded-2xl pt-10" 
                        src="https://cefpads-frontend.vercel.app/assets/crime-BBjNjRJs.jpg" 
                        alt='Crime Scene'
                    />
                    <div className="w-full  flex flex-col lg:flex-row lg:items-center lg:justify-start gap-7 mt-6">
                        <div className="w-1/2 lg:w-auto">
                            <h1 className="font-semibold text-[60px] text-white">
                                <AnimatedCounter target={20} duration={2} delay={0.2} /><span>+</span>
                            </h1>
                            <p className="text-white mb-3">
                                Forensic discipline related to <br />
                                different field
                            </p>
                            {/* Animated line under first paragraph */}
                            <div className='relative w-full h-[0.5px] bg-white/20'>
                                <motion.span 
                                    className='absolute h-[0.5px] bg-white'
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '70%' }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>
                        
                        <div className="w-1/2 lg:w-auto">
                            <h1 className="font-semibold text-[60px] text-white">
                                <AnimatedCounter startFrom={388} target={500} duration={2} delay={0.2} /><span>+</span>
                            </h1>
                            <p className="text-white mb-3">
                                Trained Graduates PG / <br />
                                Industrial Trainees
                            </p>
                            {/* Animated line under second paragraph */}
                            <div className='relative w-full h-[0.5px] bg-white/20'>
                                <motion.span 
                                    className='absolute h-[0.5px] bg-white'
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '80%' }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
<div className="lg:pl-20 ">
<button className="block lg:hidden border text-white rounded-2xl p-1">About out center</button>
<h1 className="text-white text-[50px] leading-tight">A few words about<br/> the Forensics Centre</h1>
<p className="w-full lg:w-[500px] text-white/70 pt-7">The future where technological advancement is fast paced is upon us and is faced with increasing challenges. The need to train students equipped to provide the much needed expertise in forensics cannot be over emphasized. Here at the Africa Forensics Centre we provide such an environment to equip the next generation.</p>
<img className="pt-20 w-[500px] h-[500px]"src="https://cefpads-frontend.vercel.app/assets/About25-BIBqOodO.png" alt="trainees"/> 
</div>
            </div>
        </>
    );
}

export default AboutOurCenter;