import {CONTACTS_DATA} from '../../data/contacts';
import Contact from './Contact';
import styles from '../../styles/components/Coordinates.module.scss';
import {uid} from 'uid';

const Coordinates = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.coordinates}>
      {CONTACTS_DATA.map(contact =>
        <Contact key={uid()} data={contact}/>
      )}
      <p className={styles.copyright}>making.cash &copy;&nbsp;2019-{currentYear}</p>
    </div>
  );
};


export default Coordinates;