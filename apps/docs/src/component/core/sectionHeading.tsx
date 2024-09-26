import { Heading, Text } from '@pillar-ui/core'

interface SectionHeadingProps {
  subheading: string
  heading: string
}

export const SectionHeading = ({ heading, subheading }: SectionHeadingProps) => {
  return (
    <Heading as="h2" size="3xl" weight="medium" transform="uppercase">
      <Text size="md" weight="normal" color="p" low>
        {subheading}
      </Text>
      <div>{heading}</div>
    </Heading>
  )
}
