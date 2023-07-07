import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex, Rating } from '@pillar/core'

export default {
  title: 'Components/Rating',
  component: Rating,
  args: {
    rating: 1,
  },
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />

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
      <Rating color="danger" rating={4} />
      <Rating color="primary" rating={4} />
      <Rating color="secondary" rating={4} />
      <Rating color="success" rating={4} />
      <Rating color="warning" rating={4} />
      <Rating color="surface" rating={4} />
    </Flex>
  )
}

export const RatingType = () => {
  return (
    <Flex direction="column" gap="md">
      <Rating icon="heart" rating={4} color="danger" />
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

export const Playground = Template.bind({})
