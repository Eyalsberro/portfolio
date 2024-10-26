import Link from 'next/link'
import styles from './HeroSection.module.css'

export default function HeroSection() {
    return (
        <div className={styles.heroContainer}>


            {/* Hero Content */}
            <div className={styles.heroContent}>
                <h2 className={styles.preTitle}>HEY I'M</h2>
                <h1 className={styles.mainTitle}>
                    EYAL
                </h1>
                <p className={styles.subtitle}>
                    Web Developer And Photographer.
                </p>

                {/* Action Buttons */}
                <div className={styles.buttonContainer}>
                    {['Web Development', 'Photography', 'About Me', 'Contact Me'].map((text) => (
                        <Link
                            key={text}
                            href={`/${text.toLowerCase().replace(' ', '-')}`}
                            className={styles.actionButton}
                        >
                            {text}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}