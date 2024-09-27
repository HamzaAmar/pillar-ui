import React from 'react'
import { Meta } from '@storybook/react'
import { Flex, Rating } from '@pillar-ui/core'

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  args: {
    rating: 1,
  },
}

export default meta
export const RatingWithLabelAndSize = () => {
  return (
    <Flex direction="column" gap="5">
      <Rating rating={3} hideTitle size="4" />
      <Rating rating={3} hideTitle />
      <Rating rating={3.4} hideTitle size="6" />
    </Flex>
  )
}

export const Ratings = () => {
  return (
    <Flex direction="column" gap="5">
      <Rating rating={1} />
      <Rating rating={2} />
      <Rating rating={3} />
      <Rating rating={4} />
      <Rating rating={5} />
    </Flex>
  )
}

export const RatingSize = () => {
  return (
    <Flex direction="column" size="5">
      <Rating rating={4} size="1" />
      <Rating rating={4} size="2" />
      <Rating rating={4} size="3" />
      <Rating rating={4} size="4" />
      <Rating rating={4} />
      <Rating rating={4} size="6" />
      <Rating rating={4} size="7" />
      <Rating rating={4} size="8" />
      <Rating rating={4} size="9" />
    </Flex>
  )
}

export const RatingColor = () => {
  return (
    <Flex direction="column" gap="5">
      <Rating color="d" rating={4} />
      <Rating color="p" rating={4} />
      <Rating color="se" rating={4} />
      <Rating color="s" rating={4} />
      <Rating color="w" rating={4} />
      <Rating color="b" rating={4} />
    </Flex>
  )
}

export const RatingType = () => {
  return (
    <Flex direction="column" gap="5">
      <Rating icon="heart" rating={4} color="d" />
      <Rating rating={4} />
    </Flex>
  )
}

export const RatingLabels = () => {
  return (
    <Flex direction="column" gap="5">
      <Rating rating={4} hideTitle />
      <Rating rating={4} title="fake label" />
      <Rating rating={4} />
    </Flex>
  )
}

export const Playground = {}
