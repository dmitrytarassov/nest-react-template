import { css } from 'styled-components';
import { clone, cloneDeep } from 'lodash';

export const breakpoints = {
  mobile: 576,
  tablet: 768,
  laptop: 1024,
  halfScreenBreak: 1400,
};

export const theme = {
  colors: {
    text: {
      primary: '#222222',
      secondary: '#6C768A',
      accent: '#000000',
      additional: '#0F0E0E',
      alternate: '#FFFFFF',
      oldPrice: '#9EA6B6',
    },
    links: {
      default: '#000000',
      hover: '#13EC50',
      active: '#0F0E0E',
      alternate: {
        default: '#fff',
        hover: '#13EC50',
        active: '#13EC50',
      },
    },
    breadcrumbs: {
      default: '#6C768A',
      current: '#0F0E0E',
      hover: '#13EC50',
    },
    buttons: {
      insurance: {
        default: {
          color: '#0F0E0E',
          background: '#ffffff',
        },
        hover: {
          color: '#ffffff',
          background: '#FE6B01',
        },
      },
      default: {
        color: '#0F0E0E',
        background: '#13EC50',
      },
      hover: {
        color: '#0F0E0E',
        background: '#15D14A',
      },
      disabled: {
        color: '#6C768A',
        background: '#E9EAEE',
      },
      additional: {
        hover: {
          color: '#222222',
          background: '#F8F9FA',
        },
        default: {
          color: '#000000',
          background: '#ffffff',
        },
      },
      alternate: {
        hover: {
          color: '#222222',
          background: '#D8DDE2',
        },
        default: {
          color: '#000000',
          background: '#F1F5F6',
        },
      },
    },
    thumbs: {
      active: '#13EC50',
      hover: '#6C768A',
      default: '#D8DDE2',
    },
    options: {
      active: '#E9EAEE20',
    },
    borders: {
      default: '#D8DDE2',
      active: '#13EC50',
    },
    background: {
      insurance: '#7749D9',
      default: '#ffffff',
      primary: '#F8F9FA',
      secondary: '#E9EAEE',
      alternate: '#222222',
      header: '#0F0E0E',
      footer: '#0F0E0E',
    },
    tags: {
      new: '#7749D9',
      sale: '#FE6B01',
      date: '#0F0E0E',
      text: '#fff',
    },
  },
  mixins: {
    mobile: (content) => css`
      @media screen and (max-width: ${breakpoints.mobile}px) {
        ${content}
      }
    `,
    tablet: (content) => css`
      @media screen and (max-width: ${breakpoints.tablet}px) {
        ${content}
      }
    `,
    laptop: (content) => css`
      @media screen and (max-width: ${breakpoints.laptop}px) {
        ${content}
      }
    `,
    halfScreenBreak: (content) => css`
      @media screen and (max-width: ${breakpoints.halfScreenBreak}px) {
        ${content}
      }
    `,
  },
};

export type Theme = typeof theme;

export const _dark: Theme = cloneDeep(theme);
_dark.colors.background.primary = '#222222';
_dark.colors.text.primary = '#fff';
_dark.colors.breadcrumbs.current = '#fff';
export const dark = _dark;

export type WithTheme = {
  theme: Theme;
};

export type WithThemeAndProps<T> = T & WithTheme;
