import { CalendarDaysIcon, ComputerDesktopIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import '@styles/Card.css';

const Card = (props:any) => {
    return (
        <div className='course-card'>
            <img src={props.img.src} alt='card image' />

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
