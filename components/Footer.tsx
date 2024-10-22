import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react';
import '@styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                        <div className='footer-content'>
                            <h2> معلومات الاتصال </h2>
                            <ul>  
                                <li>
                                    <Link href="#"> مغلق : الجمعة </Link>

                                </li>

                                <li>
                                    <Link href="#"> مواعيد العمل : من السبت الى الخميس </Link>
                                </li>

                                <li>
                                    <Link href="#"> رقم الهاتف : +9666 666 666  </Link>
                                </li>

                                <li>
                                    <Link href="#"> البريد : info@gmail.com </Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                        <div className='footer-content'>
                            <h2> اخر الشهادات  </h2>
                            <ul>  
                                <li>
                                    <Link href="#"> شهادة الموارد البشرية الأساسية </Link>

                                </li>

                                <li>
                                    <Link href="#"> شهادة إدارة المشاريع الاحترافية </Link>
                                </li>

                                <li>
                                    <Link href="#"> شهادة مهندس شبكات معتمد </Link>
                                </li>

                                <li>
                                    <Link href="#">شهادة خبير تقنية المعلومات</Link>
                                </li>

                                <li>
                                    <Link href="#">شهادة تحليل البيانات في الأعمال</Link>
                                </li>

                                <li>
                                    <Link href="#">شهادة محترف إدارة فرق العمل</Link>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                        <div className='footer-content'>
                            <h2> اخر المقالات  </h2>
                            <ul>  
                                <li>
                                    <Link href="#"> كيف تحسن من مهارات إدارة الموارد البشرية </Link>

                                </li>

                                <li>
                                    <Link href="#"> أحدث الاتجاهات في إدارة المشاريع </Link>
                                </li>

                                <li>
                                    <Link href="#"> دور الشبكات في تحسين الأعمال </Link>
                                </li>

                                <li>
                                    <Link href="#">تكنولوجيا المعلومات ومستقبل التطور التقني</Link>
                                </li>

                                <li>
                                    <Link href="#">البيانات الضخمة وأهميتها في الأعمال</Link>
                                </li>

                                <li>
                                    <Link href="#">أهمية التدريب في تطوير المهارات الوظيفية </Link>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                    <div className='footer-content'>
                            <h2> اشترك معنا  </h2>
                            
                            <div className='input'>
                                <input type='text' placeholder='أدخل بريدك الإلكتروني' />
                                <ArrowLeftIcon />
                            </div>

                            <p>
                                هذا الموقع محمي بواسطة reCAPTCHA وتطبق سياسة الخصوصية وشروط الخدمة من Google.
                            </p>

                            <div className='socials'>
                                <Link href="#"><i className="lab la-facebook-f"></i> </Link>
                                <Link href="#"><i className="lab la-twitter"></i> </Link>
                                <Link href="#"><i className="lab la-instagram"></i> </Link>
                                <Link href="#"><i className="lab la-linkedin-in"></i> </Link>
                                <Link href="#"><i className="lab la-youtube"></i> </Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className='copy-right'>
                            <h4> 2024 شركة الشاهادات العربية السعودية (الشاهادات) جميع الحقوق محفوظة ل</h4>
                        </div>
                    </div>




                </div>
            </div>
        </footer>
    )
}

export default Footer
