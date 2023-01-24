import { MantineThemeOverride } from '@mantine/core'
import { colors } from './_colors'

export const theme = {
  colorScheme: 'dark',
  colors,

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: 30 },
    },
  },
} satisfies MantineThemeOverride
