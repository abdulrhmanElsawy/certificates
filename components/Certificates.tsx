import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "@styles/Certificates.css";
import Cert1 from '@public/images/categories/1.jpg';
import Cert2 from '@public/images/categories/2.jpg';
import Cert3 from '@public/images/categories/3.jpg';
import Cert4 from '@public/images/categories/4.jpg';
import { CalendarDaysIcon, CpuChipIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const fadeInUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Certificates = () => {
    const [hoveredCategory, setHoveredCategory] = useState('network');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

    return (
        <motion.section
            ref={ref}
            className='certificates relative'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.div className='overlay absolute inset-0' variants={fadeInUpVariants}></motion.div>

            {/* Image section */}
            <div className='images relative h-96'>
                <motion.img
                    src={Cert1.src}
                    alt='certificate'
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                        hoveredCategory === 'network' ? 'opacity-100' : 'opacity-0'
                    }`}
                    variants={fadeInUpVariants}
                />
                <motion.img
                    src={Cert2.src}
                    alt='certificate'
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                        hoveredCategory === 'project' ? 'opacity-100' : 'opacity-0'
                    }`}
                    variants={fadeInUpVariants}
                />
                <motion.img
                    src={Cert3.src}
                    alt='certificate'
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                        hoveredCategory === 'it' ? 'opacity-100' : 'opacity-0'
                    }`}
                    variants={fadeInUpVariants}
                />
                <motion.img
                    src={Cert4.src}
                    alt='certificate'
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                        hoveredCategory === 'hr' ? 'opacity-100' : 'opacity-0'
                    }`}
                    variants={fadeInUpVariants}
                />
            </div>

            <div className='container relative z-[1]'>
                <div className='row'>
                    <motion.div
                        className='col-lg-6 col-md-6 col-sm-12 col-12'
                        variants={fadeInUpVariants}
                    >
                        <h1> ماذا نقدم ؟ </h1>
                        <motion.div className='categories relative' variants={containerVariants}>
                            <div className='back'></div>
                            
                            {/* Category items */}
                            {[{
                                Icon: GlobeAltIcon, category: 'network', title: 'هندسة الشبكات', description: 'شبكة الكمبيوتر هي مجموعة أجهزة تتشارك الموارد ببروتوكولات اتصال.'
                            }, {
                                Icon: CalendarDaysIcon, category: 'project', title: 'ادارة المشاريع', description: 'إدارة المشاريع هي قيادة فريق لتحقيق أهداف ضمن قيود محددة.'
                            }, {
                                Icon: CpuChipIcon, category: 'it', title: 'تقنية المعلومات', description: 'تكنولوجيا المعلومات تشمل استخدام الكمبيوتر والشبكات لتخزين ومعالجة البيانات'
                            }, {
                                Icon: UserGroupIcon, category: 'hr', title: 'الموارد البشرية', description: 'القوى العاملة هي مجموعة الأفراد المشاركين في منظمة أو قطاع'
                            }].map(({ Icon, category, title, description }, index) => (
                                <motion.div
                                    className='category'
                                    key={index}
                                    onMouseEnter={() => setHoveredCategory(category)}
                                    variants={fadeInUpVariants}
                                >
                                    <Icon />
                                    <h2> {title} </h2>
                                    <p> {description} </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Certificates;
