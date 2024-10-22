import { CalendarDaysIcon, ComputerDesktopIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import '@styles/Card.css'

interface CardProps {
    img: {
        src: string;
    };
    category: string;
    title: string;
    description: string;
    date: string;
    language: string;
    platform: string;
    key: number;

}

const Card: React.FC<CardProps> = (props) => {
    return (
        <div key={props.key} className='course-card'>
            <Image src={props.img.src} alt='card image' width={500} height={300} />

            <div className='text'>
                <span className='category'> {props.category}</span>

                <h1> {props.title} </h1>
                <p> {props.description} </p>

                <ul>
                    <li>
                        <CalendarDaysIcon />
                        <span>{props.date}</span>
                    </li>

                    <li>
                        <GlobeEuropeAfricaIcon />
                        <span>{props.language}</span>
                    </li>

                    <li>
                        <ComputerDesktopIcon />
                        <span>{props.platform}</span>
                    </li>
                </ul>
            </div>  

            <Link href="#"> مشاهدة الدورة </Link>
        </div>
    )
}

export default Card
