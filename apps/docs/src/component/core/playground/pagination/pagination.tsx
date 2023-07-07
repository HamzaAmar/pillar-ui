import { Pagination, Flex, Paper } from '@pillar/core'
import React from 'react'

export const PaginationPlayGround = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm" items="center">
      <Pagination />
      <Pagination color="danger" />
      <Pagination color="success" />
      <Pagination color="warning" />
      <Pagination color="primary" />
      <Pagination color="secondary" />
      <Pagination color="surface" />
    </Paper>
  )
}

export const PaginationSizes = () => {
  return (
    <Paper as={Flex} gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Pagination />
      <Pagination size="2xs" />
      <Pagination size="xs" />
      <Pagination size="sm" />
      <Pagination size="md" />
      <Pagination size="lg" />
      <Pagination size="xl" />
      <Pagination size="2xl" />
    </Paper>
  )
}

export const PaginationVariants = () => {
  return (
    <Paper borderColor="opacity-6" p="sm" flow="sm" background="surface-3" corner="sm">
      <Pagination variant="soft" />
      <Pagination variant="solid" />
      <Pagination variant="outline" />
    </Paper>
  )
}

export const PaginationDefaultPressed = () => {
  return (
    <Paper
      as={Flex}
      gap="sm"
      items="center"
      borderColor="opacity-6"
      p="sm"
      flow="sm"
      background="surface-3"
      corner="sm"
    >
      <Pagination label="Hello" defaultPressed color="danger" />
      <Pagination label="Hello" defaultPressed color="warning" />
      <Pagination label="Hello" defaultPressed color="success" />
      <Pagination label="Hello" defaultPressed color="primary" />
      <Pagination label="Hello" defaultPressed color="secondary" />
      <Pagination label="Hello" defaultPressed color="surface" />
    </Paper>
  )
}

export const PaginationCorners = () => {
  return (
    <Paper borderColor="opacity-6" p="sm" flow="sm" background="surface-3" corner="sm">
      <Pagination />
      <Pagination corner="full" />
      <Pagination corner="xs" />
      <Pagination corner="sm" />
      <Pagination corner="md" />
      <Pagination corner="lg" />
      <Pagination corner="xl" />
      <Pagination corner="circle" />
      <Pagination corner="radius" />
    </Paper>
  )
}

export const PaginationColors = () => {
  return (
    <Paper borderColor="opacity-6" p="sm" flow="sm" background="surface-3" corner="sm">
      <Pagination title="Esc" />
      <Pagination title="Esc" color="danger" />
      <Pagination title="Esc" color="success" />
      <Pagination title="Esc" color="warning" />
      <Pagination title="Esc" color="primary" />
      <Pagination title="Esc" color="surface" />
      <Pagination title="Esc" color="secondary" />
    </Paper>
  )
}

PaginationPlayGround.Colors = PaginationColors
PaginationPlayGround.Sizes = PaginationSizes
PaginationPlayGround.Corners = PaginationCorners
PaginationPlayGround.Variants = PaginationVariants
