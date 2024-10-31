'use client'

import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from "../page.module.css";
import Header from '../../Header';
import { Nature } from './architecurePicture';

export default function page() {
    return (
        <>
            <Header />
            <h1 className={styles.title}>Nature around the world</h1>
            <div className={styles.imagelist}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {Nature.map((item) => (
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


