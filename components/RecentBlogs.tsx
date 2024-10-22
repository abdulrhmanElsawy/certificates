import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/RecentCourses.css';



import LandingImg from '@public/images/landing.webp';

import Landing1Img from '@public/images/landing-1.webp';
import Landing2Img from '@public/images/landing-2.webp';
import Landing3Img from '@public/images/landing-3.webp';
import Landing4Img from '@public/images/landing-4.webp';
import Card from './Card';
import { Autoplay } from 'swiper/modules';

const RecentBlogs = () => {

    const articles = [
        {
        title: "كيف تحسن من مهارات إدارة الموارد البشرية",
        description: "دليلك لتحسين مهاراتك في إدارة الموارد البشرية وزيادة كفاءة فريق العمل.",
        category: "الموارد البشرية",
        img:Landing1Img,
        language:'العربية',
        date: "22nd October 2024",
        platform: "certificate guide"
        },
        {
        title: "أحدث الاتجاهات في إدارة المشاريع",
        description: "تعرف على أحدث الأساليب والتقنيات المستخدمة في إدارة المشاريع بنجاح.",
        category: "إدارة المشاريع",
        img:Landing4Img,
        language:'العربية',
        date: "22nd October 2024",
        platform: "certificate guide"
        },
        {
        title: "دور الشبكات في تحسين الأعمال",
        description: "كيف يمكن للشبكات الحديثة أن تساهم في تحسين الأداء الوظيفي والنمو.",
        category: "هندسة الشبكات",
        img:Landing3Img,
        language:'العربية',
        date: "22nd October 2024",
        platform: "certificate guide"
        },
        {
        title: "تكنولوجيا المعلومات ومستقبل التطور التقني",
        description: "كيف يمكن لتكنولوجيا المعلومات أن تؤثر على مستقبل الشركات والأعمال.",
        category: "تقنية المعلومات",
        img:Landing1Img,
        language:'العربية',
        date: "22nd October 2024",
        platform: "certificate guide"
        },
        {
        title: "البيانات الضخمة وأهميتها في الأعمال",
        description: "اكتشف كيف يمكن لتحليل البيانات الضخمة أن يعزز من اتخاذ القرارات الاستراتيجية.",
        category: "إدارة المشاريع",
        img:Landing2Img,
        language:'العربية',
        date: "22nd October 2024",
        platform: "certificate guide"
        },
        {
        title: "أهمية التدريب في تطوير المهارات الوظيفية",
        description: "لماذا يعد التدريب المستمر مهماً لرفع كفاءة الموظفين وتطوير مهاراتهم.",
        category: "الموارد البشرية",
        img:Landing4Img,
        language:'العربية',
        date: "22nd October 2024",
        platform: "certificate guide"
        },
        {
        title: "الحوسبة السحابية وأمان الشبكات",
        description: "دليلك لفهم الحوسبة السحابية وحماية البيانات في الشبكات المتصلة.",
        category: "هندسة الشبكات",
        img:Landing3Img,
        language:'العربية',
        date: "22nd October 2024",
        platform: "certificate guide"
        }
    ];

    
    
    return (
        <section className='recent-courses'>
            <div className='container'>
                <div className='section-header'>
                    <Link href=""> <ChevronLeftIcon /> مشاهدة كل المدونات </Link>
                    <h1> اخر المدونات </h1>
                </div>

                <div className='slider'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        centeredSlides={true}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}

                        
                    >

                    {articles.map((article, index) => (
                        <SwiperSlide>
                            <Card key={index} language={article.language} date={article.date} platform={article.platform} img={article.img} title={article.title} description={article.description}  category={article.category} />
                        </SwiperSlide>
                    ))}

                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default RecentBlogs
