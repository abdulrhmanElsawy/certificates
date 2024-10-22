"use client"
import '@styles/Navbar.css';
import Logo from '@public/images/logo.png';
import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react';
import $ from 'jquery';

function Navbar() {

    useEffect(() => {
        // Use type checks to ensure the jQuery selections are not undefined
        const $openNav = $("#open-nav");
        const $closeNav = $("#close-nav");
        const $navElements = $(".nav-elements");
        const $window:any = $(window);
        
        if ($openNav.length > 0) {
            $openNav.on("click", function() {
                $navElements.slideDown(400).css({ display: "flex" });
            });
        }

        if ($closeNav.length > 0) {
            $closeNav.on("click", function() {
                $navElements.slideUp(400);
            });
        }

        if ($window.width() < 950) {
            $navElements.find("ul li:not(.special)").on("click", function() {
                $navElements.slideUp(400);
            });
        }

        $navElements.find("ul li a").on("click", function() {
            $(this).next().toggleClass("active");
        });

        $navElements.find("ul li .inner-eles a").on("click", function() {
            $(".nav-elements ul li .inner-eles").removeClass("active");
            if ($window.width() < 950) {
                $navElements.slideUp(400);
            }
        });

        // Remove the loading element if it exists
        const loadingElement = document.getElementById("loading");
        if (loadingElement) {
            loadingElement.remove();
        }
    }, []);

    return (
        <>
            <nav>
                <div className='container'>
                    <div className='nav-content'>
                        <div className='logo'>
                            <img src={Logo.src} alt='logo' />
                        </div>

                        <button id="open-nav"> <i className="las la-bars"></i> </button>
                        <div className='nav-elements'>
                        <button id="close-nav"> <i className="las la-times"></i> </button>
                            <ul>
                                <li>
                                    <Link href="#"> الرئيسية  </Link>
                                </li>

                                <li>
                                    <Link href="#"> المقالات </Link>
                                </li>

                                <li>
                                    <Link href="#"> الكورسات </Link>
                                </li>

                                <li>
                                    <Link href="#"> الشهادات </Link>
                                </li>

                                <li>
                                    <Link href="#"> الخدمات  </Link>
                                </li>

                                <li>
                                    <Link href="#"> تواصل معنا  </Link>
                                </li>

                                <li>
                                    <Link href="#" className='btn-link'>  الشهادات  <img src={Logo.src} alt='logo' />  </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='options'>
                            <Link href="#"> <UserCircleIcon className='icon'/> </Link>
                            <Link href="#"> En </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
