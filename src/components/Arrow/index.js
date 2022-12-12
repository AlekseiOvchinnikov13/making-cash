import PropTypes from 'prop-types';
import {aquamarineColor} from '../../styles/variables.module.scss';
import styles from '../../styles/components/Arrow.module.scss';

const Arrow = ({isLong, fillColor, direction, className}) => {
  let directionClass;
  switch (direction) {
  case 'up':
    directionClass = styles.up;
    break;
  case 'down':
    directionClass = styles.down;
    break;
  case 'right':
    directionClass = styles.right;
    break;
  case 'left':
    directionClass = styles.left;
    break;
  }

  const LongArrow = <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_388_5085)">
      <path fill={fillColor}
        d="M2.375 9.75C2.375 9.33579 2.71079 9 3.125 9H28.0025L25.8451 6.83662C25.5536 6.54428 25.5539 6.07105 25.8459 5.77912C26.1381 5.48689 26.6119 5.48689 26.9041 5.77912L30.1679 9.04289C30.5584 9.43342 30.5584 10.0666 30.1679 10.4571L26.9041 13.7209C26.6119 14.0131 26.1381 14.0131 25.8459 13.7209C25.5539 13.4289 25.5536 12.9557 25.8451 12.6634L28.0025 10.5H3.125C2.71079 10.5 2.375 10.1642 2.375 9.75Z"/>
    </g>
    <defs>
      <clipPath id="clip0_388_5085">
        <rect width="33" height="18" fill="white" transform="matrix(-1 0 0 1 33.5 0)"/>
      </clipPath>
    </defs>
  </svg>;
  const ShortArrow = <svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill={fillColor}
      d="M0.726669 7.06L3.78 4L0.726669 0.94L1.66667 -2.38419e-07L5.66667 4L1.66667 8L0.726669 7.06Z"/>
  </svg>;

  return (
    <div className={`${styles.arrowWrapper} ${isLong ? styles.long : styles.short} ${directionClass} ${className}`}>
      {isLong
        ? LongArrow
        : ShortArrow
      }
    </div>
  );
};

Arrow.propTypes = {
  isLong: PropTypes.bool,
  fillColor: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'right', 'left'])
};

Arrow.defaultProps = {
  isLong: true,
  fillColor: aquamarineColor,
  direction: 'right'
};

export default Arrow;