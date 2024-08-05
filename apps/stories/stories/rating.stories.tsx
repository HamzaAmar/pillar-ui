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
    <Flex direction="column" gap="md">
      <Rating rating={3} hideTitle size="sm" />
      <Rating rating={3} hideTitle />
      <Rating rating={3.4} hideTitle size="lg" />
    </Flex>
  )
}

export const Ratings = () => {
  return (
    <Flex direction="column" gap="md">
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
    <Flex direction="column" gap="md">
      <Rating rating={4} size="3xs" />
      <Rating rating={4} size="2xs" />
      <Rating rating={4} size="xs" />
      <Rating rating={4} size="sm" />
      <Rating rating={4} />
      <Rating rating={4} size="lg" />
      <Rating rating={4} size="xl" />
      <Rating rating={4} size="2xl" />
      <Rating rating={4} size="3xl" />
    </Flex>
  )
}

export const RatingColor = () => {
  return (
    <Flex direction="column" gap="md">
      <Rating color="dan" rating={4} />
      <Rating color="pri" rating={4} />
      <Rating color="sec" rating={4} />
      <Rating color="suc" rating={4} />
      <Rating color="war" rating={4} />
      <Rating color="bg" rating={4} />
    </Flex>
  )
}

export const RatingType = () => {
  return (
    <Flex direction="column" gap="md">
      <Rating icon="heart" rating={4} color="dan" />
      <Rating rating={4} />
    </Flex>
  )
}

export const RatingLabels = () => {
  return (
    <Flex direction="column" gap="md">
      <Rating rating={4} hideTitle />
      <Rating rating={4} title="fake label" />
      <Rating rating={4} />
    </Flex>
  )
}

export const Playground = {}
