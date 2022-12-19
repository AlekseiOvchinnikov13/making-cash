import styles from '../../../styles/components/calculator/Input.module.scss';

const Input = ({activeCurrency, value, onChange, isCrypto, isUSDInput}) =>
  <div className={styles.inputWrapper}>
    <span className={styles.symbol}>{isUSDInput ? '$' : activeCurrency.symbol}</span>
    <input
      className={styles.input}
      readOnly={isUSDInput ? isCrypto : !isCrypto}
      value={value}
      onChange={onChange}
      type="number"
      step="any"
      min="0"
    />
  </div>;

export default Input;