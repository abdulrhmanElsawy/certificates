import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/Landing.css';

import { motion } from 'framer-motion'; // Import framer-motion for animation

import LandingImg from '@public/images/landing.webp';
import Landing1Img from '@public/images/landing-1.webp';
import Landing2Img from '@public/images/landing-2.webp';
import Landing3Img from '@public/images/landing-3.webp';
import Landing4Img from '@public/images/landing-4.webp';
import Link from 'next/link';
import { ComputerDesktopIcon, DocumentTextIcon } from '@heroicons/react/24/solid';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Delay between each child animation
        },
    },
};

const fadeInUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Landing = () => {
    return (
        <motion.section
            className='landing'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className='overlay'></div>
            <img className='background' src={LandingImg.src} alt='landing' />

            <div className='relative z-[1]'>
                <div className='row'>
                    <motion.div
                        className='col-lg-6 col-md-6 col-sm-12 col-12'
                        variants={fadeInUpVariants}
                    >
                        <div className='categories-slider'>
                            <div className='slider'>
                                <Swiper
                                    slidesPerView={'auto'}
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    className="mySwiper"
                                    dir="rtl"
                                >
                                    {[Landing1Img, Landing2Img, Landing3Img, Landing4Img].map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <Link href="#">
                                                <motion.div className='cert-cat' variants={fadeInUpVariants}>
                                                    <img src={img.src} alt='certificate category' />
                                                    <h1> شهادة {index + 1}</h1>
                                                    <h2> قدم الان ! </h2>
                                                </motion.div>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className='col-lg-6 col-md-6 col-sm-12 col-12'
                        variants={fadeInUpVariants}
                    >
                        <div className='landing-text'>
                            <motion.h1 variants={fadeInUpVariants}>
                                دليل الشهادات المهنية
                            </motion.h1>

                            <motion.input
                                type='text'
                                placeholder='ابحث عن الشهادات التي تريد'
                                variants={fadeInUpVariants}
                            />

                            <motion.div variants={fadeInUpVariants}>
                                <Link href="#"> الشهادات <DocumentTextIcon className='icon'/> </Link>
                                <Link href="#"> الكوسات <ComputerDesktopIcon className='icon' /> </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Landing;
