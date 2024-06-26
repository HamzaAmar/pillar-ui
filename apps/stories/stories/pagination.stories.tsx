import React from 'react'
import { Pagination } from '@pillar-ui/core'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
}

export default meta
export function PaginationColor() {
  return (
    <div>
      <div className="l_flow__md">
        <Pagination count={10} />
        <Pagination count={10} color="danger" />
        <Pagination count={10} color="success" />
        <Pagination count={10} color="warning" />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} color="surface" />
      </div>
      <div className="l_flow__md">
        <Pagination count={10} variant="soft" />
        <Pagination count={10} variant="soft" color="danger" />
        <Pagination count={10} variant="soft" color="success" />
        <Pagination count={10} variant="soft" color="warning" />
        <Pagination count={10} variant="soft" color="primary" />
        <Pagination count={10} variant="soft" color="secondary" />
        <Pagination count={10} variant="soft" color="surface" />
      </div>
      <div className="l_flow__md">
        <Pagination count={10} />
        <Pagination count={10} variant="solid" color="danger" />
        <Pagination count={10} variant="solid" color="success" />
        <Pagination count={10} variant="solid" color="warning" />
        <Pagination count={10} variant="solid" color="primary" />
        <Pagination count={10} variant="solid" color="secondary" />
        <Pagination count={10} variant="solid" color="surface" />
      </div>
    </div>
  )
}

export function PaginationVariant() {
  return (
    <div className="l_flow__md">
      <Pagination count={10} />
      <Pagination count={10} color="danger" />
      <Pagination count={10} color="success" />
      <Pagination count={10} color="warning" />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} color="surface" />
    </div>
  )
}

export function PaginationCustomStyle() {
  return (
    <div className="l_flow__md">
      <Pagination count={10} />
      <Pagination count={10} color="danger" />
      <Pagination count={10} color="success" />
      <Pagination count={10} color="warning" />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} color="surface" />
    </div>
  )
}

export const Playground = {}

export function Nice() {
  const [open, setOpen] = React.useState(false)
  return (
    <button onClick={() => setOpen(true)} className="l_flow__md">
      {open ? 'Open' : 'CLose'}
    </button>
  )
}
