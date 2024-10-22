"use client";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Landing from '@components/Landing';
import Certificates from '@components/Certificates';
import About from '@components/About';
import RecentCourses from '@components/RecentCourses';
import MovingClouds from '@components/MovingClouds';
import RecentBlogs from '@components/RecentBlogs';
import Footer from '@components/Footer';

const Home = () => {


    return (
        <>
            <MovingClouds />
            <Landing />
            <Certificates />
            <About />
            <RecentCourses />
            <RecentBlogs />
            <Footer />

        </>
    );
};

export default Home;
