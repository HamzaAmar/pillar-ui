import { Heading, Text } from '@pillar-ui/core'

interface SectionHeadingProps {
  subheading: string
  heading: string
}

export const SectionHeading = ({ heading, subheading }: SectionHeadingProps) => {
  return (
    <Heading as="h2" size="9" weight="5" transform="uppercase">
      <Text size="5" weight="4" color="p" low>
        {subheading}
      </Text>
      <div>{heading}</div>
    </Heading>
  )
}
