import React from 'react'
import { Meta } from '@storybook/react'
import { Button, Flex, Heading, IconButton, Table } from '@pillar-ui/core'
import type { TableProps } from '@pillar-ui/core'
import { Pencil, Trash } from '@pillar-ui/icons'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
}

export default meta

export const NormalTableExample = (props: Partial<TableProps>) => {
  return (
    <Table {...props}>
      <thead>
        <tr>
          <th>ID</th>
          <th>User</th>
          <th>Followers</th>
          <th>Following</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#HE1234</td>
          <td>Samir Lamir</td>
          <td>15.3K</td>
          <td>1</td>
          <Flex as="td" gap="2">
            <IconButton title="Update" color="i" icon={<Pencil />} size="3" />
            <IconButton title="Delete" color="d" icon={<Trash />} size="3" />
          </Flex>
        </tr>
        <tr>
          <td>#HE12sd</td>
          <td>Kent Lempo</td>
          <td>19.3K</td>
          <td>190.9K</td>
          <Flex as="td" gap="2">
            <IconButton title="Update" color="i" icon={<Pencil />} size="3" />
            <IconButton title="Delete" color="d" icon={<Trash />} size="3" />
          </Flex>
        </tr>
        <tr>
          <td>#HE15434</td>
          <td>Ryan Dod</td>
          <td>2.5K</td>
          <td>20K</td>
          <Flex as="td" gap="2">
            <IconButton title="Update" color="i" icon={<Pencil />} size="3" />
            <IconButton title="Delete" color="d" icon={<Trash />} size="3" />
          </Flex>
        </tr>
        <tr>
          <td>#HE12s56</td>
          <td>Remix Run</td>
          <td>20.5K</td>
          <td>27.8K</td>
          <Flex as="td" gap="2">
            <IconButton title="Update" color="i" icon={<Pencil />} size="3" />
            <IconButton title="Delete" color="d" icon={<Trash />} size="3" />
          </Flex>
        </tr>
      </tbody>
    </Table>
  )
}

export const Playground = {}

export const TableVariant = () => {
  return (
    <Flex direction="col" gap="4">
      <Heading size="4">Striped Table</Heading>
      <NormalTableExample variant="striped" />
      <Heading size="4">Default Table</Heading>
      <NormalTableExample />
      <Heading size="4">Soft Table</Heading>
      <NormalTableExample variant="soft" />
      <Heading size="4">Head Color Table</Heading>
      <NormalTableExample variant="head-color" />
    </Flex>
  )
}

export const NormalTableColor = () => {
  return (
    <Flex direction="col" gap="4">
      <Heading size="4">Striped Table</Heading>
      <Flex wrap gap="3">
        <Heading as="h2" size="3">
          Striped Table danger
        </Heading>
        <NormalTableExample color="d" variant="striped" />

        <Heading as="h2" size="3">
          Striped Table success
        </Heading>
        <NormalTableExample color="su" variant="striped" />
        <Heading as="h2" size="3">
          Striped Table Secondary
        </Heading>
        <NormalTableExample color="se" variant="striped" />
        <Heading as="h2" size="3">
          Striped Table Orange
        </Heading>
        <NormalTableExample color="w" variant="striped" />
        <Heading as="h2" size="3">
          Striped Table primary
        </Heading>
        <NormalTableExample color="p" variant="striped" />
      </Flex>

      <Heading size="4">Default Table</Heading>
      <Flex wrap gap="3">
        <Heading as="h2" size="3">
          Default Table danger
        </Heading>
        <NormalTableExample color="d" />

        <Heading as="h2" size="3">
          Default Table success
        </Heading>
        <NormalTableExample color="su" />
        <Heading as="h2" size="3">
          Default Table secondary
        </Heading>
        <NormalTableExample color="se" />
        <Heading as="h2" size="3">
          Default Table primary
        </Heading>
        <NormalTableExample color="se" />
      </Flex>
      <Heading size="4">Soft Table</Heading>
      <Flex wrap gap="3">
        <Heading as="h2" size="3">
          Soft Table danger
        </Heading>
        <NormalTableExample variant="soft" color="d" />

        <Heading as="h2" size="3">
          Soft Table success
        </Heading>
        <NormalTableExample variant="soft" color="su" />
        <Heading as="h2" size="3">
          Soft Table secondary
        </Heading>
        <NormalTableExample variant="soft" color="se" />
        <Heading as="h2" size="3">
          Soft Table primary
        </Heading>
        <NormalTableExample variant="soft" color="p" />
      </Flex>
      <NormalTableExample variant="soft" />
      <Heading size="4">Head Color Table</Heading>
      <Flex wrap gap="3">
        <Heading as="h2" size="3">
          Head Color Table danger
        </Heading>
        <NormalTableExample variant="head-color" color="d" />

        <Heading as="h2" size="3">
          Head Color Table success
        </Heading>
        <NormalTableExample variant="head-color" color="su" />
        <Heading as="h2" size="3">
          Head Color Table secondary
        </Heading>
        <NormalTableExample variant="head-color" color="se" />
        <Heading as="h2" size="3">
          Head Color Table primary
        </Heading>
        <NormalTableExample variant="head-color" color="p" />
      </Flex>
      <NormalTableExample variant="head-color" />
    </Flex>
  )
}

export const TableSize = () => {
  return (
    <Flex direction="col" gap="4">
      <Heading size="1">Table Size Extra SMALL</Heading>
      <NormalTableExample size="2" />
      <Heading size="1">Table Size Medium</Heading>
      <NormalTableExample size="4" />
      <Heading size="1">Table Size Large</Heading>
      <NormalTableExample size="6" />
      <Heading size="1">Table Size Large</Heading>
      <NormalTableExample size="7" />
      <Heading size="1">Table Size Large</Heading>
      <NormalTableExample size="9" />
    </Flex>
  )
}
