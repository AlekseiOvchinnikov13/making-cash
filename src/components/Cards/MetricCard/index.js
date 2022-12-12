import styles from '../../../styles/components/MetricCard.module.scss';

const MetricCard = ({label, value}) =>
  <div className={styles.metricCard}>
    <p className={styles.title}>{label}</p>
    <p className={styles.text}>{value}</p>
  </div>;

export default MetricCard;