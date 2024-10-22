import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/RecentCourses.css';



import Landing1Img from '@public/images/landing-1.webp';
import Landing2Img from '@public/images/landing-2.webp';
import Landing3Img from '@public/images/landing-3.webp';
import Landing4Img from '@public/images/landing-4.webp';
import Card from './Card';
import { Autoplay } from 'swiper/modules';

const RecentCourses = () => {

    const courses = [
        {
        title: "أساسيات الموارد البشرية",
        description: "تعلم أساسيات إدارة الموارد البشرية وأهم الأدوات لتحسين الأداء الوظيفي.",
        language: "العربية",
        platform: "Udemy",
        category: "الموارد البشرية",
        img: Landing1Img,
        date: "22nd October 2024"
        },
        {
        title: "إدارة المشاريع الاحترافية",
        description: "احترف مهارات إدارة المشاريع باستخدام أدوات حديثة وتقنيات فعالة.",
        language: "الإنجليزية",
        platform: "Coursera",
        category: "إدارة المشاريع",
        img: Landing4Img,
        date: "22nd October 2024"

        },
        {
        title: "مقدمة في هندسة الشبكات",
        description: "اكتشف أساسيات هندسة الشبكات وكيفية بناء شبكات قوية وآمنة.",
        language: "العربية",
        platform: "LinkedIn Learning",
        category: "هندسة الشبكات",
        img: Landing3Img,
        date: "22nd October 2024"

        },
        {
        title: "تطوير البرمجيات بتقنية المعلومات",
        description: "تعلّم أحدث تقنيات تطوير البرمجيات وإدارة الأنظمة المعلوماتية.",
        language: "الإنجليزية",
        platform: "Pluralsight",
        category: "تقنية المعلومات",
        img: Landing1Img,
        date: "22nd October 2024"

        },
        {
        title: "تحليل البيانات في الأعمال",
        description: "افهم كيفية تحليل البيانات لاتخاذ قرارات استراتيجية في بيئة الأعمال.",
        language: "العربية",
        platform: "Udacity",
        category: "إدارة المشاريع",
        img: Landing2Img,
        date: "22nd October 2024"

        },
        {
        title: "إدارة فرق العمل",
        description: "تعلم كيفية إدارة فرق العمل بفعالية وزيادة الإنتاجية.",
        language: "العربية",
        platform: "Edraak",
        category: "الموارد البشرية",
        img: Landing3Img,
        date: "22nd October 2024"

        },
        {
        title: "تأمين الشبكات الإلكترونية",
        description: "تعرف على كيفية حماية الشبكات من الهجمات السيبرانية والتأمين الإلكتروني.",
        language: "الإنجليزية",
        platform: "FutureLearn",
        category: "هندسة الشبكات",
        img: Landing4Img,
        date: "22nd October 2024"

        }
    ];

    
    
    return (
        <section className='recent-courses'>
            <div className='container'>
                <div className='section-header'>
                    <Link href=""> <ChevronLeftIcon /> مشاهدة كل الكورسات </Link>
                    <h1> دورات تدريبية </h1>
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

                    {courses.map((course, index) => (
                        <SwiperSlide key={index}>
                            <Card key={index} language={course.language} date={course.date} platform={course.platform} img={course.img} title={course.title} description={course.description}  category={course.category} />
                        </SwiperSlide>
                    ))}

                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default RecentCourses
