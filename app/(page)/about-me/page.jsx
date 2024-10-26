'use client'
import React from 'react'
import styles from "./page.module.css";
import Header from '../Header';
import Image from 'next/image'
import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';




const imageStyle = {
    borderRadius: '50%'

}


export default function page() {
    return (
        <div className={styles.aboutme}>
            <Header />
            <h1 className={styles.title}>WHO IS THIS MAN?!</h1>
            <div className={styles.aboutmetext}>
                <div className={styles.imageStyle}>
                    <Image
                        src="/images/EyalSberro.jpg"
                        width={200}
                        height={200}
                        style={imageStyle}
                        alt="Eyal"
                    />
                    {/* <Footer /> */}
                    <div className={styles.links_grid}>
                        <Link href="https://www.linkedin.com/in/eyalsberro" target="_blank"><LinkedInIcon /></Link>
                        <Link href="https://www.instagram.com/eyalsberro" target="_blank"><InstagramIcon /></Link>
                        <Link href="https://www.facebook.com/eyal.sberro" target="_blank"><FacebookIcon /></Link>
                        <Link href="https://github.com/Eyalsberro" target="_blank"><GitHubIcon /></Link>
                    </div>
                </div>
                <div className={styles.text}>
                    <p>I&apos;m excited to share a bit about myself! <br />
                        My name is Eyal, and I&apos;m based in Chicago. <br />
                        This website showcases my journey through various photoshoots, creative projects, and serves as a platform for you to connect with me.
                        <br />
                        <br />
                        With a BA in Business Administration specializing in Network Sciences from Reichman University and a FullStack Developer certification from John Bryce, I blend technical expertise with business insight. <br />
                        My passion for technology drives me as a FullStack Developer, where I have honed skills in: <br />
                        Frontend: HTML5, CSS3, JavaScript (ES6), JQuery, React, NextJS, Angular, Bootstrap, Material UI <br />
                        Backend: Node.js, Express.js, Puppeteer, MySQL, AWS<br /> <br />
                        I co-founded <b className={styles.boldtext}> <a href="https://www.linkedin.com/company/dvorapacks" target='_blank'>Dvora</a></b>, an innovative gift-matching platform that personalizes employee gifts through engaging questionnaires. <br />
                        This venture was an incredible experience that deepened my understanding of user-centric design. <br />
                        The photographs featured here reflect my passion for capturing moments—ranging from magazine shoots to stunning landscapes and yoga sessions. <br />
                        Each image tells a story and showcases my artistic vision. <br />
                        Feel free to reach out via any social media platform for inquiries or collaboration opportunities. <br />
                        I hope you enjoy exploring my work! 😊

                    </p>
                </div>
            </div>

        </div>
    )
}
