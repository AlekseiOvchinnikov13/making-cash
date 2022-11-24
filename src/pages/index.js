import {useGetProjectsQuery} from '../store/projects/projectApi';
import {PROJECT_DATA} from '../data/projects';
import Subtitle from '../components/Subtitle';
import Loader from '../components/Loader';
import ProjectCircle from '../components/ProjectCircle';
import BgDonut from '../../public/assets/images/donut.svg';
import BgHalfDonut from '../../public/assets/images/half-donut.svg';
import BgSphere from '../../public/assets/images/sphere.svg';
import BgAboveTheFold from '../../public/assets/images/bg-above-the-fold.svg';
import IntersectRight from '../../public/assets/images/Intersect-right.svg';
import IntersectLeft from '../../public/assets/images/Intersect-left.svg';
import BgAquamarineEllipseProjects from '../../public/assets/images/aquamarine-ellipse-projects.svg';
import BgLightEllipseProjects from '../../public/assets/images/light-ellipse-projects.svg';
import ImageContainer from '../components/ImageContainer';
import {useEffect, useState} from 'react';
import ReadMore from '../components/ReadMore';
import SectionTitle from '../components/SectionTitle';
import styles from '../styles/pages/Home.module.scss';
import LinkArrow from '../components/LinkArrow';
import ContactForm from '../components/ContactForm';
import contact from '../components/Coordinates/Contact';
import {useDispatch} from 'react-redux';
import {getPosts} from '../store/posts/postsSlice';
import usePosts from '../hooks/usePosts';
import PostRaw from '../components/PostRaw';
import {isMobile} from '../utils';
import {FAQ_DATA} from '../data/faq';
import AccordionItem from '../components/AccordionItem';

const Home = () => {
  const {data, isLoading} = useGetProjectsQuery(PROJECT_DATA.map(item => item.id));

  const [isMobileState, setIsMobileState] = useState(false);
  useEffect(() => {
    setIsMobileState(isMobile);
  }, [setIsMobileState]);

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const projectOpenHandler = () => setIsProjectsOpen(!isProjectsOpen);

  const {data: posts, status} = usePosts();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <section className={`${styles.section} ${styles.topSection}`}>
        <ImageContainer
          className={styles.donutTop}
          src={BgDonut}
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
        id={'projects'}
      >
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
        <LinkArrow
          to={'#contact'}
          isLong={false}
          text={'Write to us'}
          className={styles.writeToUs}
        />
      </section>
      <section className={`${styles.section} ${styles.blogSection}`} id={'blog'}>
        <ImageContainer
          className={styles.sphere}
          src={BgSphere}
          alt={'sphere'}
        />
        <ImageContainer
          className={styles.intersectRight}
          src={IntersectRight}
          alt={'shadow'}
        />
        <ImageContainer
          className={styles.intersectLeft}
          src={IntersectLeft}
          alt={'shadow'}
        />
        <SectionTitle title={'our blog'}/>
        <div className={styles.postRawWrapper}>
          {posts.length > 0 && status === 'success'
            ? posts.map((post, index) =>
              index < 3 &&
              <PostRaw
                key={post.link}
                data={post}
              />)
            : <Loader/>
          }
        </div>
        {/*{isMobileState &&
          <LinkArrow
            text={'see all'}
            to={'/blog'}
            isLong={false}
            className={styles.blogPageArrow}
          />}*/}
      </section>
      <section className={`${styles.section} ${styles.faqSection}`} id={'faq'}>
        <ImageContainer
          className={styles.BgAboveTheFold}
          src={BgAboveTheFold}
          alt={'shadow'}
        />
        <ImageContainer
          className={styles.halfDonut}
          src={BgHalfDonut}
          alt={'donut'}
        />
        <SectionTitle title={'faq'}/>
        <div className={styles.accordionWrapper}>
          {FAQ_DATA.map(item =>
            <AccordionItem key={item.label} data={item}/>
          )}
        </div>
      </section>
      {/*<section className={`${styles.section}`} id={'calculator'}>
        <SectionTitle
          title={'calculator'}
          subtitle={'You can choose the most profitable coin for yourself'}
        />
      </section>*/}
      <section className={`${styles.section}`} id={'contact'}>
        <SectionTitle
          title={'contact'}
          subtitle={'Write to&nbsp;us at&nbsp;any time and our manager will be&nbsp;happy to&nbsp;answer you'}
        />
        <ContactForm/>
      </section>
    </>
  );
};

export default Home;
