import { Pagination, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const PaginationPlayGround = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="surface-3" corner="sm" items="center">
      <Pagination count={10} />
      <Pagination count={10} color="danger" />
      <Pagination count={10} color="success" />
      <Pagination count={10} color="warning" />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} color="surface" />
    </Paper>
  )
}

export const PaginationSizes = () => {
  return (
    <Paper as={Flex} gap="sm" border p="sm" background="surface-3" corner="sm">
      <Pagination count={10} />
      <Pagination count={10} size="2xs" />
      <Pagination count={10} size="xs" />
      <Pagination count={10} size="sm" />
      <Pagination count={10} size="md" />
      <Pagination count={10} size="lg" />
      <Pagination count={10} size="xl" />
      <Pagination count={10} size="2xl" />
    </Paper>
  )
}

export const PaginationVariants = () => {
  return (
    <Paper border p="sm" flow="sm" background="surface-3" corner="sm">
      <Pagination count={10} variant="soft" />
      <Pagination count={10} variant="solid" />
      <Pagination count={10} variant="outline" />
    </Paper>
  )
}

export const PaginationDefaultPressed = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Pagination count={10} title="Hello" />
      <Pagination count={10} title="Hello" />
      <Pagination count={10} title="Hello" />
      <Pagination count={10} title="Hello" />
      <Pagination count={10} title="Hello" />
      <Pagination count={10} title="Hello" />
    </Paper>
  )
}

export const PaginationCorners = () => {
  return (
    <Paper border p="sm" flow="sm" background="surface-3" corner="sm">
      <Pagination count={10} />
      <Pagination count={10} corner="full" />
      <Pagination count={10} corner="xs" />
      <Pagination count={10} corner="sm" />
      <Pagination count={10} corner="md" />
      <Pagination count={10} corner="lg" />
      <Pagination count={10} corner="xl" />
      <Pagination count={10} corner="circle" />
      <Pagination count={10} corner="full" />
    </Paper>
  )
}

export const PaginationColors = () => {
  return (
    <Paper border p="sm" flow="sm" background="surface-3" corner="sm">
      <Pagination count={10} title="Esc" />
      <Pagination count={10} title="Esc" color="danger" />
      <Pagination count={10} title="Esc" color="success" />
      <Pagination count={10} title="Esc" color="warning" />
      <Pagination count={10} title="Esc" color="primary" />
      <Pagination count={10} title="Esc" color="surface" />
      <Pagination count={10} title="Esc" color="secondary" />
    </Paper>
  )
}
