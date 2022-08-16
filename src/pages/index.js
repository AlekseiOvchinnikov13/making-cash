import {useGetProjectsQuery} from '../store/projects/projectApi';
import {PROJECT_DATA} from '../data/projects';
import Subtitle from '../components/Subtitle';
import Loader from '../components/Loader';
import ProjectCircle from '../components/ProjectCircle';
import BgDonutTop from '../../public/assets/images/donut.svg';
import BgAboveTheFold from '../../public/assets/images/bg-above-the-fold.svg';
import BgAquamarineEllipseProjects from '../../public/assets/images/aquamarine-ellipse-projects.svg';
import BgLightEllipseProjects from '../../public/assets/images/light-ellipse-projects.svg';
import ImageContainer from '../components/ImageContainer';
import {useEffect, useState} from 'react';
import {isMobile} from '../utils';
import ReadMore from '../components/ReadMore';
import SectionTitle from '../components/SectionTitle';
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  const {data, isLoading} = useGetProjectsQuery(PROJECT_DATA.map(item => item.id));

  const [isMobileState, setIsMobileState] = useState(false);
  useEffect(() => {
    setIsMobileState(isMobile());
  }, [isMobile()]);

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const projectOpenHandler = () => setIsProjectsOpen(!isProjectsOpen);

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
        />
      </section>
      <section
        className={`${styles.section} ${styles.projectSection} ${isProjectsOpen ? styles.projectSectionOpen : ''}`}
        id={'project'}>
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
        <div className={styles.projectWrapper}>
          {isLoading
            ? <Loader/>
            : data.map(project =>
              <ProjectCircle key={project.id} data={project}/>
            )}
        </div>
        {isMobileState &&
          <ReadMore
            onClick={projectOpenHandler}
            isOpen={isProjectsOpen}
            textOpen={'see all'}
            className={styles.readMoreProjects}
          />}
      </section>
      <section className={`${styles.section} ${styles.aboutSection}`} id={'about-us'}>
        <SectionTitle
          title={'we are'}
          subtitle={'We`ve started launching validators in&nbsp;2019 and now we`ve working with more then 13&nbsp;project'}
        />
        <SectionTitle
          isGray
          classNameTitle={styles.aboutSecondTitle}
          classNameSubtitle={styles.aboutSecondSubtitle}
          title={'why you can trust us'}
          subtitle={'Our validators are hosted on&nbsp;high-tech dedicated servers from Hetzner, OVH. We&nbsp;have a&nbsp;full backup and monitoring via various sources (grafana, telegram bots, SMS messages) which means that we`re ensuring&nbsp;99% uptime in&nbsp;all networks'}
        />
      </section>
    </>
  );
};

export default Home;
