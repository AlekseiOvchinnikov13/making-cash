import {useRef} from 'react';
import styles from '../../../styles/components/InfoCard.module.scss';

const InfoCard = ({title, value, isAddress}) => {
  const copyBtnRef = useRef(null);

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        copyBtnRef.current.textContent = 'copied!';
        copyBtnRef.current.desabled = true;
      })
      .catch(() => {
        console.error('Something went wrong...');
      });
  };

  return (
    <div className={`${styles.infoCard} ${isAddress ? styles.infoCardAddress : ''}`}>
      <p className={styles.value}>
        {value}
        {isAddress &&
          <button onClick={copyToClipBoard} className={styles.copyBtn} ref={copyBtnRef}>
            copy
          </button>}
      </p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default InfoCard;