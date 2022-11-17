export const isBrowser = () => typeof window !== 'undefined';

const MobileWidth = '1024';
export const isMobile = isBrowser() && window.innerWidth <= MobileWidth;

/**
 * Delete html tags from text
 * @param text {String} text
 * @returns {*}
 */
export const cleanText = text => {
  const regexp = /(?:<).*?(?:>)/g;
  return text.replace(regexp, '');
};