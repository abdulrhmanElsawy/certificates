import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion
import AboutImg from '@public/images/about/1.jpg';
import { DocumentCheckIcon, EyeIcon, PresentationChartLineIcon, UsersIcon } from '@heroicons/react/24/solid';
import '@styles/About.css';

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

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

    return (
        <motion.section
            ref={ref}
            className='about-us relative'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.img src={AboutImg.src} alt='about us' variants={fadeInUpVariants} />
            <div className='container'>
                <div className='row'>
                    <motion.div
                        className='col-lg-6 col-md-6 col-sm-12 col-12'
                        variants={fadeInUpVariants}
                    >
                        <div className='about-content'>
                            <motion.h3 variants={fadeInUpVariants}> مـــن نــحــن <span></span> </motion.h3>
                            <motion.h1 variants={fadeInUpVariants}>
                                فريق <span> تطوير </span> <span> شهادات </span> إلكترونية معتمدة
                            </motion.h1>

                            <div className='points'>
                                {[{
                                    Icon: UsersIcon, title: "فريقنا", description: "نحن طالبات الكلية التقنية ببلقرن، قمنا بتطوير موقع لتوفير شهادات إلكترونية معتمدة في مجالات متنوعة."
                                }, {
                                    Icon: PresentationChartLineIcon, title: "تخصصاتنا", description: "نقدم شهادات إلكترونية معتمدة في الموارد البشرية، تقنية المعلومات، إدارة المشاريع، وهندسة الشبكات."
                                }, {
                                    Icon: EyeIcon, title: "رؤيتنا", description: "نسعى لتمكين الشباب وتطوير مهاراتهم، ورفع مستوى سوق العمل الحالي والمستقبلي."
                                }, {
                                    Icon: DocumentCheckIcon, title: "الشهادات دليل", description: "أطلقنا دليل الشهادات المهنية في 2020 لجمع مصادر شهادات إدارية تُسهم في التطور الوظيفي."
                                }].map(({ Icon, title, description }, index) => (
                                    <motion.div className='point' key={index} variants={fadeInUpVariants}>
                                        <Icon />
                                        <h2> <span> {title} </span> </h2>
                                        <p> {description} </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='col-lg-6 col-md-6 col-sm-12 col-12' variants={fadeInUpVariants}></motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
