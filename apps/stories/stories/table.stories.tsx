import React from 'react'
import { Meta } from '@storybook/react'
import { Button, Flex, Heading, Table, TableColumn, TableRow } from '@pillar-ui/core'
import type { TableProps } from '@pillar-ui/core'
import { ArrowDown } from '@pillar-ui/icons'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
}

export default meta

export const NormalTableExample = (props: Partial<TableProps>) => {
  return (
    <Table {...props}>
      <TableRow type="head">
        <TableColumn as="th">ID</TableColumn>
        <TableColumn as="th">User</TableColumn>
        <TableColumn as="th">Followers</TableColumn>
        <TableColumn as="th">Following</TableColumn>
        <TableColumn as="th">Action</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn weight="medium">#HE1234</TableColumn>
        <TableColumn>Samir Lamir</TableColumn>
        <TableColumn weight="medium">15.3K</TableColumn>
        <TableColumn weight="medium">1</TableColumn>
        <TableColumn>
          <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="4" variant="text">
            Accept
          </Button>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn weight="medium">#HE12sd</TableColumn>
        <TableColumn>Kent Lempo</TableColumn>
        <TableColumn weight="medium">19.3K</TableColumn>
        <TableColumn weight="medium">190.9K</TableColumn>
        <TableColumn>
          <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="4" variant="text">
            Accept
          </Button>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn weight="medium">#HE15434</TableColumn>
        <TableColumn>Ryan Dod</TableColumn>
        <TableColumn weight="medium">2.5K</TableColumn>
        <TableColumn weight="medium">20K</TableColumn>
        <TableColumn>
          <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="4" variant="text">
            Accept
          </Button>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn weight="medium">#HE12s56</TableColumn>
        <TableColumn>Remix Run</TableColumn>
        <TableColumn weight="medium">20.5K</TableColumn>
        <TableColumn weight="medium">27.8K</TableColumn>
        <TableColumn>
          <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="4" variant="text">
            Accept
          </Button>
        </TableColumn>
      </TableRow>
    </Table>
  )
}

export const Playground = {}

export const TableVariant = () => {
  return (
    <Flex direction="column" gap="4">
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
    <Flex direction="column" gap="4">
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
    <Flex direction="column" gap="4">
      <Heading size="4">Table Size SMALL</Heading>
      <NormalTableExample size="4" />
      <Heading size="4">Table Size Medium</Heading>
      <NormalTableExample />
      <Heading size="4">Table Size Large</Heading>
      <NormalTableExample gap="6" />
    </Flex>
  )
}
