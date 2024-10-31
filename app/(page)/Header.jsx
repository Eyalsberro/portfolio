import React from 'react'
import styles from "../page.module.css";
import Link from 'next/link'

export default function Header() {
    return (

        <nav className={styles.navigation}>
            <div className={styles.logo}>
                <Link href={"/"}>Eyal Sberro</Link >
            </div>
            <div className={styles.navLinks}>
                {['Web Development', 'Photography', 'About me'].map((item) => (
                    <Link
                        key={item}
                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                        className={styles.navLink}
                    >
                        {item}
                    </Link>
                ))}
            </div>
            <div className={styles.moblienav}>
                {['Web Development', 'Photography', 'About me'].map((item) => (
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

    )
}
