import { Box, createStyles, Group } from '@mantine/core'
import DotsIllustration from '@sipilot/assets/svg/dots.svg'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Section } from 'types/res'

const useStyles = createStyles((theme, { reverse }: { reverse?: boolean }) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  advantageWrapper: {
    '>*': {
      maxWidth: 'calc(50% - 12px)',
    },
    flexDirection: reverse ? 'row-reverse' : undefined,
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column-reverse',
      '>*': {
        width: '100%',
        maxWidth: '100%',
      },
    },
  },
}))

interface IProps {
  children: ReactNode
  data: Section
  reverse?: boolean
}

export function AdvantageSection(props: IProps) {
  const { children, data, reverse } = props
  const { classes } = useStyles({
    reverse,
  })
  return (
    <Group
      py={60}
      spacing="xl"
      align="flex-start"
      noWrap
      className={classes.advantageWrapper}
    >
      {children}
      <Box py="xl" pl="xl" pos="relative">
        <DotsIllustration className="dots-illustration" />

        <Image src={data.image} alt="trusted" className="relative full-img" />
      </Box>
    </Group>
  )
}

export default AdvantageSection
