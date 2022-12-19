import styles from '../../../styles/components/calculator/Toggle.module.scss';

const Toggle = ({activeCurrency, isCrypto, onClick}) =>
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
      className={styles.toggleItem}
      onClick={onClick}
    >
      <div className={`${styles.circle} ${!isCrypto ? styles.secondState : ''}`}/>
    </button>
  </div>;


export default Toggle;