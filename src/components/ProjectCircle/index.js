import styles from '../../styles/components/ProjectCircle.module.scss';
import ImageContainer from '../ImageContainer';
import {useEffect, useState} from 'react';
import {PROJECT_DATA} from '../../data/projects';
import Link from 'next/link';
import Arrow from '../Arrow';
import {whiteColor} from '../../styles/variables.module.scss';

const ProjectCircle = ({
  data: {
    name,
    image,
    id
  }
}) => {
  const [projectApy, setProjectApy] = useState();

  useEffect(() => {
    setProjectApy(PROJECT_DATA.find(project => project.id === id)?.apy);
  }, [id]);

  return (
    <div className={styles.projectCircle}>
      <ImageContainer
        className={styles.img}
        src={image}
        alt={name}
      />
      <p className={styles.projectTitle}>{name}</p>
      <p className={styles.apy}>{projectApy ? projectApy : 'soon'}</p>
      <Link href={'/'}>
        <a className={styles.projectLink}>
          <Arrow isLong={false} direction={'down'} fillColor={whiteColor}/>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCircle;