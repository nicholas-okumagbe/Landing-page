import React from 'react';
import { Check } from 'lucide-react';
import { FaVideo, FaCertificate } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Hero() {
    const images = [
        "https://cdn.prod.website-files.com/6745b121f756f3381539e42e/686b8f40ba19eb1109d4a101_profile-card%20(1).jpg",
        "https://cdn.prod.website-files.com/6745b121f756f3381539e42e/686b8f416088b99ac234db0b_profile-card%20(2).jpg",
        "https://cdn.prod.website-files.com/6745b121f756f3381539e42e/686b8f41849ec99ea23b300f_profile-card%20(3).jpg"
    ];

    return (
        <>
            <div className="w-full h-full relative pb-10">
                {/* overlay */}
                <div className="bg-gradient-to-r from-black from-0% via-black via-35% to-transparent to-100% absolute z-10 w-full h-full inset-0 top-0 left-0"></div>
                <div className="container mx-auto pt-60 relative z-20 pl-3">
                    <div className="middle-btn flex">
                        <button className="bg-white/50 text-white rounded-2xl px-1 py-1">
                            <span className="text-black bg-white rounded-2xl mr-1 p-1">New</span>
                            Registration are now open!
                        </button>
                    </div>
                    
                    <div className="text-cont mt-4">
                        <h1 className=" text-3xl  sm:text-7xl md:text-7xl  lg:text-7xl font-bold text-white">
                            Leading the way in <br /> Forensics in Africa.
                        </h1>
                        <p className="font-semibold mt-8 text-white">
                            The only design course you need to be among top 1% designers<br />
                            The only design course you need to be among
                        </p>
                    </div>
                    
                    <div className="two-btn flex flex-row gap-3 mt-9">
                        <button className="bg-teal-800 px-3 py-2 text-white rounded-[15px] flex flex-row gap-1 font-medium h-10">
                            Enroll now 
                            <span className="scale-75 ml-1 bg-white text-black rounded w-6 h-7">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                                    <path d="M5 12h14"/>
                                    <path d="m12 5 7 7-7 7"/>
                                </svg>
                            </span>
                        </button>
                        <button className="bg-teal-800 text-white rounded-[15px] p-2">
                            See Programmes
                        </button>
                    </div>
                    
                    <section className="icons flex flex-row items-center gap-2 mt-9 text-white">
                        <FaVideo/><span>ONLINE</span>
                        <Check className="bg-white text-black w-4 h-4 rounded"/><span>PHYSICAL</span>
                        <FaCertificate/><span>CERTIFICATE</span>
                    </section>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center pt-44">
                    <div className="w-full ">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={4}
                            slidesPerView={5}
                            centeredSlides={false}
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                                reverseDirection: false,
                            }}
                            speed={3000}
                            allowTouchMove={false}
                            className="w-full flex items-center justify-end gap-4"
                        >
                            {/* Repeat images multiple times for seamless loop */}
                            {Array.from({ length: 12 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <img 
                                        src={images[index % images.length]} 
                                        alt={`Profile ${(index % 3) + 1}`}
                                        className="w-80 h-[450px] object-cover opacity-30 rounded-lg mx-auto" 
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;