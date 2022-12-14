export const isBrowser = () => typeof window !== 'undefined';

const MobileWidth = '1024';
const SmallMobileWidth = '450';
const TabletWidth = '800';
export const isMobile = isBrowser() && window.innerWidth <= MobileWidth;
export const isSmallMobile = isBrowser() && window.innerWidth <= SmallMobileWidth;
export const isTablet = isBrowser() && window.innerWidth <= TabletWidth;

/**
 * Delete html tags from text
 * @param text {String} text
 * @returns {*}
 */
export const cleanText = text => {
  const regexp = /(?:<).*?(?:>)/g;
  return text.replace(regexp, '');
};