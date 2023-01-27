import { MantineThemeOverride } from '@mantine/core'
import { colors } from './_colors'

export const theme = {
  colorScheme: 'dark',
  colors,
  black: '#252525',
  white: '#E5E5E5',

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  fontFamily: 'var(--roboto-font)',
  headings: {
    fontFamily: 'var(--ubuntu-font)',
    sizes: {
      h1: { fontSize: 30 },
    },
  },
  primaryColor: 'primary',
  primaryShade: 5,

  components: {
    Container: {
      defaultProps: {
        size: 'xl',
      },
    },
    Button: {
      defaultProps: {
        radius: 'xl',
        size: 'lg',
      },
      styles: (theme, params) => {
        return {
          root: {
            borderWidth: '3px',
            color: params.variant === 'filled' ? theme.black : undefined,
          },
        }
      },
    },
  },
  globalStyles: (theme) => ({
    body: {
      backgroundColor: `${theme.black}!important`,
    },
    '.title': {
      fontFamily: 'var(--ubuntu-font)!important',
    },
    '.full-img': {
      minWidth: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      height: 'auto',
    },

    '.dots-illustration': {
      width: '60%',
      color: theme.colors.primary[5],
      position: 'absolute',
      top: 0,
      left: 0,
    },
    '.relative': {
      position: 'relative',
    },
    '.text-primary': {
      color: theme.colors.primary[5],
    },
  }),
} satisfies MantineThemeOverride
