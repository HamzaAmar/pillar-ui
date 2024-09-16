import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Flex, MenuButton } from '@pillar-ui/core'

const meta: Meta<typeof MenuButton> = {
  title: 'Components/MenuButton',
  component: MenuButton,
}

export default meta

const defaultMenuItems = [
  { id: 1, label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
  { id: 2, label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
  { id: 3, label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
]

export function MenuButtonBase(props: any) {
  return <MenuButton label="Options" menuItems={defaultMenuItems} {...props} />
}

export const MenuButtonSize = () => {
  return (
    <Flex gap="lg">
      <MenuButtonBase size="2xs" />
      <MenuButtonBase size="xs" />
      <MenuButtonBase size="sm" />
      <MenuButtonBase size="md" />
      <MenuButtonBase size="lg" />
      <MenuButtonBase size="xl" />
      <MenuButtonBase size="2xl" />
    </Flex>
  )
}

export const MenuButtonCorner = () => {
  return (
    <Flex gap="lg">
      <MenuButtonBase corner="2xs" />
      <MenuButtonBase corner="xs" />
      <MenuButtonBase corner="sm" />
      <MenuButtonBase corner="md" />
      <MenuButtonBase corner="lg" />
      <MenuButtonBase corner="xl" />
      <MenuButtonBase corner="2xl" />
    </Flex>
  )
}

export const MenuButtonItemCount = () => {
  const itemCounts = [1, 3, 5, 7]
  return (
    <Flex gap="lg" direction="column" align="start">
      {itemCounts.map((count) => (
        <MenuButtonBase
          key={count}
          label={`${count} item${count > 1 ? 's' : ''}`}
          menuItems={Array.from({ length: count }, (_, i) => ({
            id: i + 1,
            label: `Item ${i + 1}`,
            onClick: () => console.log(`Item ${i + 1} clicked`),
          }))}
        />
      ))}
    </Flex>
  )
}

const MenuButtonStory: StoryFn<typeof MenuButton> = ({ ...args }) => (
  <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <MenuButton label="Options" menuItems={defaultMenuItems} {...args} />
  </div>
)

export const Playground = {
  render: MenuButtonStory,
  args: {
    label: 'Options',
    size: 'md',
    corner: 'md',
  },
}
