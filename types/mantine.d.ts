import { Tuple, DefaultMantineColor } from '@mantine/core'

type ExtendedCustomColors =
  | 'black'
  | 'white'
  | 'primary'
  | 'secondary'
  | 'accent'
  | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}
