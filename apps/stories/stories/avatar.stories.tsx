import React from 'react'
import * as Core from '@pillar/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Avatar',
} as ComponentMeta<typeof Core.Avatar>

const Hello: ComponentStory<typeof Core.Avatar> = ({ ...args }) => <Core.Avatar {...args} />

export const Playground = Hello.bind({})

export function AvatarsColors() {
  return (
    <>
      <Core.Avatar size="2xs" title="Hello" />
      <Core.Avatar size="xs" title="Hello" />
      <Core.Avatar size="sm" title="Hello" />
      <Core.Avatar size="md" title="Hello" />
      <Core.Avatar size="lg" title="Hello" />
      <Core.Avatar size="xl" title="Hello" />
      <Core.Avatar size="2xl" title="Hello" />
    </>
  )
}
