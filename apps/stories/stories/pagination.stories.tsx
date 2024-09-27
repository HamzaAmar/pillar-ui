import React from 'react'
import { Pagination } from '@pillar-ui/core'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
}
export function PaginationDefault() {
  return (
    <div>
      <Pagination count={10} />
    </div>
  )
}
export default meta
export function PaginationColor() {
  return (
    <div>
      <div className="Sfmd">
        <Pagination count={10} />
        <Pagination count={10} color="d" />
        <Pagination count={10} color="s" />
        <Pagination count={10} color="w" />
        <Pagination count={10} color="p" />
        <Pagination count={10} color="se" />
        <Pagination count={10} color="b" />
      </div>
      <div className="Sfmd">
        <Pagination count={10} variant="soft" />
        <Pagination count={10} variant="soft" color="d" />
        <Pagination count={10} variant="soft" color="s" />
        <Pagination count={10} variant="soft" color="w" />
        <Pagination count={10} variant="soft" color="p" />
        <Pagination count={10} variant="soft" color="se" />
        <Pagination count={10} variant="soft" color="b" />
      </div>
      <div className="Sfmd">
        <Pagination count={10} />
        <Pagination count={10} variant="solid" color="d" />
        <Pagination count={10} variant="solid" color="s" />
        <Pagination count={10} variant="solid" color="w" />
        <Pagination count={10} variant="solid" color="p" />
        <Pagination count={10} variant="solid" color="se" />
        <Pagination count={10} variant="solid" color="b" />
      </div>
    </div>
  )
}

export function PaginationVariant() {
  return (
    <div className="Sfmd">
      <Pagination count={10} color="p" />
      <Pagination count={10} color="p" variant="mixed" />
      <Pagination count={10} color="p" variant="soft" />
      <Pagination count={10} color="p" variant="solid" />
      <Pagination count={10} color="p" variant="text" />
    </div>
  )
}

export function PaginationCustomStyle() {
  return (
    <div className="Sfmd">
      <Pagination count={10} />
      <Pagination count={10} color="d" />
      <Pagination count={10} color="s" />
      <Pagination count={10} color="w" />
      <Pagination count={10} color="p" />
      <Pagination count={10} color="se" />
      <Pagination count={10} color="b" />
    </div>
  )
}

export const Playground = {}

export function Nice() {
  const [open, setOpen] = React.useState(false)
  return (
    <button onClick={() => setOpen(true)} className="Sfmd">
      {open ? 'Open' : 'CLose'}
    </button>
  )
}
