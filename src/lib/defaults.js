import _ptrMarkup from './markup';
import _ptrStyles from './styles';

export default {
  distThreshold: 60,
  distReload: 50,
  distIgnore: 0,
  mainElement: 'body',
  triggerElement: 'body',
  ptrElement: '.ptr',
  classPrefix: 'ptr--',
  cssProp: 'min-height',
  iconArrow: '&#8675;',
  iconRefreshing: '&hellip;',
  instructionsPullToRefresh: 'Pull down to refresh',
  instructionsReleaseToRefresh: 'Release to refresh',
  instructionsRefreshing: 'Refreshing',
  refreshTimeout: 500,
  getMarkup: () => _ptrMarkup,
  getStyles: () => _ptrStyles,
  onInit: () => {},
  onRefresh: () => location.reload(),
  distanceResistedFunction: ({ distExtra, distThreshold }) => Math.min(1, (distExtra / distThreshold) / 2.5) * distExtra,
  onReleasingWhilePulling: () => {},
  shouldPullToRefresh: () => !window.scrollY,
};
