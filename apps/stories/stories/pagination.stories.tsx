import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Pagination } from '@pillar/core'

export default {
  default: 'Components/Pagintaion',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

export function PaginationColor() {
  return (
    <div>
      <div className="l_flow__md">
        <Pagination />
        <Pagination color="red" />
        <Pagination color="green" />
        <Pagination color="orange" />
        <Pagination color="indigo" />
        <Pagination color="purple" />
        <Pagination color="violet" />
        <Pagination color="slate" />
        <Pagination color="brown" />
      </div>
      <div className="l_flow__md">
        <Pagination variant="soft" />
        <Pagination variant="soft" color="red" />
        <Pagination variant="soft" color="green" />
        <Pagination variant="soft" color="orange" />
        <Pagination variant="soft" color="indigo" />
        <Pagination variant="soft" color="purple" />
        <Pagination variant="soft" color="violet" />
        <Pagination variant="soft" color="slate" />
        <Pagination variant="soft" color="brown" />
      </div>
      <div className="l_flow__md">
        <Pagination />
        <Pagination variant="solid" color="red" />
        <Pagination variant="solid" color="green" />
        <Pagination variant="solid" color="orange" />
        <Pagination variant="solid" color="indigo" />
        <Pagination variant="solid" color="purple" />
        <Pagination variant="solid" color="violet" />
        <Pagination variant="solid" color="slate" />
        <Pagination variant="solid" color="brown" />
      </div>
    </div>
  )
}

export function PaginationVariant() {
  return (
    <div className="l_flow__md">
      <Pagination />
      <Pagination color="red" />
      <Pagination color="green" />
      <Pagination color="orange" />
      <Pagination color="indigo" />
      <Pagination color="purple" />
      <Pagination color="violet" />
      <Pagination color="slate" />
      <Pagination color="brown" />
    </div>
  )
}

export function PaginationCustomStyle() {
  return (
    <div className="l_flow__md">
      <Pagination />
      <Pagination color="red" />
      <Pagination color="green" />
      <Pagination color="orange" />
      <Pagination color="indigo" />
      <Pagination color="purple" />
      <Pagination color="violet" />
      <Pagination color="slate" />
      <Pagination color="brown" />
    </div>
  )
}

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />

export const Playground = Template.bind({})
