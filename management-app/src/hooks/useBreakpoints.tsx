import useMediaQuery from './useMediaQuery';


export default function useBreakpoints() {
  const breakpoints = { 
    isSmall: useMediaQuery('(max-width: 767px)'),
    isMedium: useMediaQuery('(min-width: 768px) and (max-width: 991px)'),
    isLarge: useMediaQuery('(min-width: 992px)'),
    isXLarge: useMediaQuery('(min-width: 1728px)'),
    active: '',
    isSmallHeight: useMediaQuery('(max-height: 991px)'),
    isMediumHeight: useMediaQuery('(min-height: 992px) and (max-height: 1199px)'),
    isLargeHeight: useMediaQuery('(min-height: 1200px)'),
    isXLargeHeight: useMediaQuery('(min-height: 1600px)'),
  };
  if (breakpoints.isSmall) breakpoints.active = 'small';
  if (breakpoints.isMedium) breakpoints.active = 'medium';
  if (breakpoints.isLarge) breakpoints.active = 'large';
  return breakpoints;
}