import React from 'react'
import * as Core from '@pillar/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Button',
} as ComponentMeta<typeof Core.Button>

const Hello: ComponentStory<typeof Core.Button> = ({ ...args }) => <Core.Button {...args} />

export const Playground = Hello.bind({})

export function ButtonsColors() {
  return (
    <>
      <Core.Button color="violet">Violet</Core.Button>
      <Core.Button color="gray">Gray</Core.Button>
    </>
  )
}
