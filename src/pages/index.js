import styles from '../styles/pages/Home.module.scss';
import Subtitle from '../components/Subtitle';

const Home = () => {
  return (
    <>
      <section className={`${styles.section} ${styles.topSection}`}>
        <h2 className={styles.subtitle}>Trusted & Secure</h2>
        <h1 className={styles.title}>VALIDATOR</h1>
        <Subtitle
          label={'Choose a&nbsp;project at&nbsp;the bottom of&nbsp;the screen to&nbsp;see details about delegation'}
          className={styles.text}
        />
      </section>
      <section className={`${styles.section} ${styles.projectSection}`}>

      </section>
    </>
  );
};

export default Home;
