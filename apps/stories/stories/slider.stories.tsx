import { Button, Flex, Skeleton, Slider } from '@pillar-ui/core'
import { ComponentMeta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

export const SliderTest = () => {
  return (
    <Flex items="center" gap="md">
      <Slider>
        <Slider.Track></Slider.Track>
        <Slider.Thumb></Slider.Thumb>
      </Slider>
    </Flex>
  )
}
