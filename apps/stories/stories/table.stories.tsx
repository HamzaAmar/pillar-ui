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
          <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="sm" variant="text">
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
          <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="sm" variant="text">
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
          <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="sm" variant="text">
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
          <Button iconPosition="end" icon={<ArrowDown direction="right" width={16} />} size="sm" variant="text">
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
    <Flex direction="column" gap="sm">
      <Heading size="sm">Striped Table</Heading>
      <NormalTableExample variant="striped" />
      <Heading size="sm">Default Table</Heading>
      <NormalTableExample />
      <Heading size="sm">Soft Table</Heading>
      <NormalTableExample variant="soft" />
      <Heading size="sm">Head Color Table</Heading>
      <NormalTableExample variant="head-color" />
    </Flex>
  )
}

export const NormalTableColor = () => {
  return (
    <Flex direction="column" gap="sm">
      <Heading size="sm">Striped Table</Heading>
      <Flex wrap gap="xs">
        <Heading as="h2" size="xs">
          Striped Table danger
        </Heading>
        <NormalTableExample color="dan" variant="striped" />

        <Heading as="h2" size="xs">
          Striped Table success
        </Heading>
        <NormalTableExample color="suc" variant="striped" />
        <Heading as="h2" size="xs">
          Striped Table Secondary
        </Heading>
        <NormalTableExample color="sec" variant="striped" />
        <Heading as="h2" size="xs">
          Striped Table Orange
        </Heading>
        <NormalTableExample color="war" variant="striped" />
        <Heading as="h2" size="xs">
          Striped Table primary
        </Heading>
        <NormalTableExample color="pri" variant="striped" />
      </Flex>

      <Heading size="sm">Default Table</Heading>
      <Flex wrap gap="xs">
        <Heading as="h2" size="xs">
          Default Table danger
        </Heading>
        <NormalTableExample color="dan" />

        <Heading as="h2" size="xs">
          Default Table success
        </Heading>
        <NormalTableExample color="suc" />
        <Heading as="h2" size="xs">
          Default Table secondary
        </Heading>
        <NormalTableExample color="sec" />
        <Heading as="h2" size="xs">
          Default Table primary
        </Heading>
        <NormalTableExample color="sec" />
      </Flex>
      <Heading size="sm">Soft Table</Heading>
      <Flex wrap gap="xs">
        <Heading as="h2" size="xs">
          Soft Table danger
        </Heading>
        <NormalTableExample variant="soft" color="dan" />

        <Heading as="h2" size="xs">
          Soft Table success
        </Heading>
        <NormalTableExample variant="soft" color="suc" />
        <Heading as="h2" size="xs">
          Soft Table secondary
        </Heading>
        <NormalTableExample variant="soft" color="sec" />
        <Heading as="h2" size="xs">
          Soft Table primary
        </Heading>
        <NormalTableExample variant="soft" color="pri" />
      </Flex>
      <NormalTableExample variant="soft" />
      <Heading size="sm">Head Color Table</Heading>
      <Flex wrap gap="xs">
        <Heading as="h2" size="xs">
          Head Color Table danger
        </Heading>
        <NormalTableExample variant="head-color" color="dan" />

        <Heading as="h2" size="xs">
          Head Color Table success
        </Heading>
        <NormalTableExample variant="head-color" color="suc" />
        <Heading as="h2" size="xs">
          Head Color Table secondary
        </Heading>
        <NormalTableExample variant="head-color" color="sec" />
        <Heading as="h2" size="xs">
          Head Color Table primary
        </Heading>
        <NormalTableExample variant="head-color" color="pri" />
      </Flex>
      <NormalTableExample variant="head-color" />
    </Flex>
  )
}

export const TableSize = () => {
  return (
    <Flex direction="column" gap="sm">
      <Heading size="sm">Table Size SMALL</Heading>
      <NormalTableExample size="sm" />
      <Heading size="sm">Table Size Medium</Heading>
      <NormalTableExample />
      <Heading size="sm">Table Size Large</Heading>
      <NormalTableExample size="lg" />
    </Flex>
  )
}
