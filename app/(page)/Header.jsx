import React from 'react'
import styles from "../page.module.css";
import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <nav className={styles.navigation}>
                <div className={styles.logo}>
                    <Link href={"/"}>Eyal Sberro</Link >
                </div>
                <div className={styles.navLinks}>
                    {['Web Development', 'Photography', 'Videos', 'About me', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                            className={styles.navLink}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    )
}
