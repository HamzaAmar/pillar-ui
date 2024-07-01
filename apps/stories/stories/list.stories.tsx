import React from 'react'
import { Meta } from '@storybook/react'
import { Flex, List, ListItem } from '@pillar-ui/core'

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
} as Meta<typeof List>

export default meta

function ListBase(props: any) {
  return (
    <List {...props}>
      <ListItem>Hello</ListItem>
      <ListItem>Hello</ListItem>
      <ListItem>Hello</ListItem>
      <ListItem>Hello</ListItem>
      <ListItem>Hello</ListItem>
      <ListItem>Hello</ListItem>
      <ListItem>Hello</ListItem>
    </List>
  )
}

export const AlertBasic = () => {
  return (
    <div>
      <ListBase />
    </div>
  )
}

export const AlertType = () => {
  return (
    <div>
      <ListBase as="ul" />
      <ListBase as="ol" />
    </div>
  )
}

export const OrderList = () => {
  return (
    <div>
      <ListBase as="ol" hideStyle />
      <ListBase as="ol" />
      <ListBase as="ol" start="4" />
      <ListBase as="ol" start="10" />
      <ListBase as="ol" type="A" />
      <ListBase as="ol" type="a" start="d" />
      <ListBase as="ol" type="I" start="d" />
    </div>
  )
}

export const UnorderList = () => {
  return (
    <div>
      <ListBase as="ul" />
      <ListBase as="ul" type="square" />
      <ListBase as="ul" type="disc" />
    </div>
  )
}

export const ListFlow = () => {
  return (
    <Flex gap="lg">
      <div>
        <h1>xs</h1>
        <ListBase flow="xs" />
      </div>
      <div>
        <h1>sm</h1>
        <ListBase flow="sm" />
      </div>
      <div>
        <h1>md</h1>
        <ListBase flow="md" />
      </div>
      <div>
        <h1>lg</h1>
        <ListBase flow="lg" />
      </div>
      <div>
        <h1>xl</h1>
        <ListBase flow="xl" />
      </div>
    </Flex>
  )
}
