import styles from '../styles/pages/Home.module.scss';
import Subtitle from '../components/Subtitle';
import {useGetProjectsQuery} from '../store/projects/projectApi';
import {PROJECT_DATA} from '../data/projects';
import Loader from '../components/Loader';
import ProjectCircle from '../components/ProjectCircle';

import BgDonutTop from '../../public/assets/images/donut.svg';
import BgAboveTheFold from '../../public/assets/images/bg-above-the-fold.svg';
import BgAquamarineEllipseProjects from '../../public/assets/images/aquamarine-ellipse-projects.svg';
import BgLightEllipseProjects from '../../public/assets/images/light-ellipse-projects.svg';
import ImageContainer from '../components/ImageContainer';

const Home = () => {
  const {data, isLoading} = useGetProjectsQuery(PROJECT_DATA.map(item => item.id));

  return (
    <>
      <section className={`${styles.section} ${styles.topSection}`}>
        <ImageContainer
          className={styles.donutTop}
          src={BgDonutTop}
          alt={'donut'}
        />
        <h2 className={styles.subtitle}>Trusted & Secure</h2>
        <h1 className={styles.title}>VALIDATOR</h1>
        <Subtitle
          label={'Choose a&nbsp;project at&nbsp;the bottom of&nbsp;the screen to&nbsp;see details about delegation'}
          className={styles.text}
        />
      </section>
      <section className={`${styles.section} ${styles.projectSection}`} id={'project'}>
        <ImageContainer
          className={styles.BgAboveTheFold}
          src={BgAboveTheFold}
          alt={'shadow'}
        />
        <ImageContainer
          className={styles.projectsEllipseAqua}
          src={BgAquamarineEllipseProjects}
          alt={'shadow'}
        />
        <ImageContainer
          className={styles.projectsEllipseLight}
          src={BgLightEllipseProjects}
          alt={'shadow'}
        />
        {isLoading
          ? <Loader/>
          : data?.map(project =>
            <ProjectCircle key={project.id} data={project}/>
          )}
      </section>
      <section className={`${styles.section} ${styles.aboutSection}`} id={'about-us'}>

      </section>
    </>
  );
};

export default Home;
