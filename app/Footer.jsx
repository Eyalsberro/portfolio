'use client'

import React from 'react'
import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {

    return (
        <div className='footercomp'>
            <div className='footersection'>
                <div className="links_grid">
                    <Link href="https://www.linkedin.com/in/eyalsberro" target="_blank"><LinkedInIcon /></Link>
                    <Link href="https://www.instagram.com/eyalsberro" target="_blank"><InstagramIcon /></Link>
                    <Link href="https://www.facebook.com/eyal.sberro" target="_blank"><FacebookIcon /></Link>
                    <Link href="https://github.com/Eyalsberro" target="_blank"><GitHubIcon /></Link>
                </div>
            </div>
        </div>
    )
}
