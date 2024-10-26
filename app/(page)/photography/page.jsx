

import React from 'react'
import Header from '../Header'
import styles from "./page.module.css";
import Link from 'next/link';

const gallertpic = [
    {
        img: '/pictures/BTS/IMG_2309-scaled.jpg',
        title: 'BTS -Solstice magazine',
        link: 'photography/BTS'
    },
    {
        img: '/pictures/BTS/DSC_2238-scaled.jpg',
        title: 'Architecture',
        link: 'photography/architecture'
    },
    {
        img: '/pictures/BTS/DSC_2238-scaled.jpg',
        title: 'Soltero Photoshoot',
        link: 'photography/soltero'
    },
    {
        img: '/pictures/BTS/DSC_2238-scaled.jpg',
        title: 'Nature',
        link: 'photography/nature'
    },
    {
        img: '/pictures/BTS/DSC_2238-scaled.jpg',
        title: 'Life Style',
        link: 'photography/life-style'
    },
]

export default function page() {
    return (
        <>
            <Header />
            <h1 className={styles.title}>Photo Gallery</h1>
            <div className={styles.gallertdiv}>
                {gallertpic.map((item) => (
                    <Link href={item.link} key={item.title}>
                        <div >
                            <img className={styles.gallerypic} src={item.img} alt={item.title} />
                            <h2>{item.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}


