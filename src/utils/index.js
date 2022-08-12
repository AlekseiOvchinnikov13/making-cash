export const isBrowser = () => typeof window !== 'undefined';

const MobileWidth = '1024';
export const isMobile = () => isBrowser() && window.innerWidth <= MobileWidth;