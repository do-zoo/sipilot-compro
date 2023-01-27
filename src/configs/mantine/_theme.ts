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
  globalStyles: () => ({
    '.title': {
      fontFamily: 'var(--ubuntu-font)!important',
    },
  }),
} satisfies MantineThemeOverride
