import Image from 'next/image';
import PropTypes from 'prop-types';
import {imageContainer} from '../../styles/components/ImageContainer.module.scss';

const ImageContainer = ({src, className, alt, objectFit, layout, ...other}) => (
  <div className={`${imageContainer} ${className}`}>
    <Image
      src={src}
      alt={alt}
      layout={layout}
      objectFit={objectFit}
      {...other}
    />
  </div>
);

ImageContainer.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.oneOf(['contain', 'fill', 'cover']),
  layout: PropTypes.oneOf(['fill', 'responsive', 'fixed']),
};

ImageContainer.defaultProps = {
  objectFit: 'contain',
  layout: 'fill'
};

export default ImageContainer;
