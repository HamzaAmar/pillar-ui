import { Flex, IconButton, Switch, Table } from '@pillar-ui/core'
import { Pencil, Trash } from '@pillar-ui/icons'

const content = (
  <>
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
    </tbody>
  </>
)

export const TableSize = () => {
  return (
    <>
      <Table size="3">{content}</Table>
      <Table>{content}</Table>
      <Table size="7">{content}</Table>
    </>
  )
}
