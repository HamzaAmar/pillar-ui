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
        <Pagination color="danger" />
        <Pagination color="success" />
        <Pagination color="warning" />
        <Pagination color="primary" />
        <Pagination color="secondary" />
        <Pagination color="surface" />
      </div>
      <div className="l_flow__md">
        <Pagination variant="soft" />
        <Pagination variant="soft" color="danger" />
        <Pagination variant="soft" color="success" />
        <Pagination variant="soft" color="warning" />
        <Pagination variant="soft" color="primary" />
        <Pagination variant="soft" color="secondary" />
        <Pagination variant="soft" color="surface" />
      </div>
      <div className="l_flow__md">
        <Pagination />
        <Pagination variant="solid" color="danger" />
        <Pagination variant="solid" color="success" />
        <Pagination variant="solid" color="warning" />
        <Pagination variant="solid" color="primary" />
        <Pagination variant="solid" color="secondary" />
        <Pagination variant="solid" color="surface" />
      </div>
    </div>
  )
}

export function PaginationVariant() {
  return (
    <div className="l_flow__md">
      <Pagination />
      <Pagination color="danger" />
      <Pagination color="success" />
      <Pagination color="warning" />
      <Pagination color="primary" />
      <Pagination color="secondary" />
      <Pagination color="surface" />
    </div>
  )
}

export function PaginationCustomStyle() {
  return (
    <div className="l_flow__md">
      <Pagination />
      <Pagination color="danger" />
      <Pagination color="success" />
      <Pagination color="warning" />
      <Pagination color="primary" />
      <Pagination color="secondary" />
      <Pagination color="surface" />
    </div>
  )
}

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />

export const Playground = Template.bind({})
