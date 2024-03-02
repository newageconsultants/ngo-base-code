import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NGO Cultural Exchange Program</title>
        <meta name="description" content="NGO Cultural Exchange Program Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/culture.jpg" alt="Cultural Exchange Program" className={styles.headerImage} />

        <h1 className={styles.title}>
          Welcome to our NGO's Cultural Exchange Program
        </h1>

        <p className={styles.description}>
          We specialize in organizing cultural exchange programs between students from multiple countries.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>About Us &rarr;</h3>
            <p>Learn more about our NGO and our mission.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Programs &rarr;</h3>
            <p>Explore our current cultural exchange programs.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Contact Us &rarr;</h3>
            <p>Get in touch with us for more information.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 NGO Cultural Exchange Program</p>
      </footer>
    </div>
  );
}
