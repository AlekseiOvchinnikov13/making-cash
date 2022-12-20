import styles from '../../../styles/components/calculator/EarnCard.module.scss';
import {PROJECT_DATA} from '../../../data/projects';

const EarnCard = ({isCrypto, activeCurrency, cryptoValue, usdValue, data: {count, period}}) => {
  let apy = PROJECT_DATA.find(project => project.id === activeCurrency.id).apy;
  apy = apy.slice(0, apy.length - 1);

  return (
    <div className={`${styles.earnCard} ${!isCrypto ? styles.earnCardUsd : ''}`}>
      <p className={styles.label}>{period}</p>
      <p className={`${styles.value} ${isCrypto ? styles.valueActive : ''}`}>
        $&nbsp;{`${(usdValue * count * apy / 100).toFixed(4)}`}
      </p>
      <p className={`${styles.value} ${!isCrypto ? styles.valueActive : ''}`}>
        {activeCurrency.symbol}&nbsp;{(cryptoValue * count * apy / 100).toFixed(4)}
      </p>
    </div>
  );
};

export default EarnCard;