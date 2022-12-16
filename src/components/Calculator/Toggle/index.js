import styles from '../../../styles/components/calculator/Toggle.module.scss';

const Toggle = ({activeCurrency, isCrypto, onClick}) => {

  return (
    <div className={styles.toggle}>
      <div className={styles.textWrapper}>
        <span className={`${isCrypto ? styles.active : ''}`}>
          {activeCurrency.symbol}
        </span>
        &nbsp;/&nbsp;
        <span className={`${!isCrypto ? styles.active : ''}`}>
          $
        </span>
      </div>
      <button
        className={`${styles.toggleItem} ${isCrypto ? styles.secondState : ''}`}
        onClick={onClick}
      >
        <div className={styles.circle}/>
      </button>
    </div>
  );
};

export default Toggle;