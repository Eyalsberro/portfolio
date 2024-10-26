import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import Link from 'next/link'
import Footer from "./Footer";


export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <Link href={"/"}>Eyal Sberro</Link >
        </div>
        <div className={styles.navLinks}>
          {['Web Development', 'Photography', 'About me', 'Contact'].map((item) => (
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
      <HeroSection />
      <Footer />
    </main>
  );
}
