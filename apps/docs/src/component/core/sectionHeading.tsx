import { Heading, Text } from '@pillar-ui/core'

interface SectionHeadingProps {
  subheading: string
  heading: string
}

export const SectionHeading = ({ heading, subheading }: SectionHeadingProps) => {
  return (
    <Heading as="h2" gap="9" weight="medium" transform="uppercase">
      <Text gap="5" weight="normal" color="p" low>
        {subheading}
      </Text>
      <div>{heading}</div>
    </Heading>
  )
}
