'use client'

import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from "../page.module.css";
import { BTS } from '../BTS/pictureBTS';
import Header from '../../Header';

export default function page() {
    return (
        <>
            <Header />
            <h1 className={styles.title}>Solstice magazine</h1>
            <div className={styles.imagelist}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {BTS.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </>
    )
}


