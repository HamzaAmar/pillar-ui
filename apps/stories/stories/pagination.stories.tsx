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
      <div className="l_f-md">
        <Pagination count={10} />
        <Pagination count={10} color="dan" />
        <Pagination count={10} color="suc" />
        <Pagination count={10} color="war" />
        <Pagination count={10} color="pri" />
        <Pagination count={10} color="sec" />
        <Pagination count={10} color="bg" />
      </div>
      <div className="l_f-md">
        <Pagination count={10} variant="soft" />
        <Pagination count={10} variant="soft" color="dan" />
        <Pagination count={10} variant="soft" color="suc" />
        <Pagination count={10} variant="soft" color="war" />
        <Pagination count={10} variant="soft" color="pri" />
        <Pagination count={10} variant="soft" color="sec" />
        <Pagination count={10} variant="soft" color="bg" />
      </div>
      <div className="l_f-md">
        <Pagination count={10} />
        <Pagination count={10} variant="solid" color="dan" />
        <Pagination count={10} variant="solid" color="suc" />
        <Pagination count={10} variant="solid" color="war" />
        <Pagination count={10} variant="solid" color="pri" />
        <Pagination count={10} variant="solid" color="sec" />
        <Pagination count={10} variant="solid" color="bg" />
      </div>
    </div>
  )
}

export function PaginationVariant() {
  return (
    <div className="l_f-md">
      <Pagination count={10} color="pri" />
      <Pagination count={10} color="pri" variant="mixed" />
      <Pagination count={10} color="pri" variant="soft" />
      <Pagination count={10} color="pri" variant="solid" />
      <Pagination count={10} color="pri" variant="text" />
    </div>
  )
}

export function PaginationCustomStyle() {
  return (
    <div className="l_f-md">
      <Pagination count={10} />
      <Pagination count={10} color="dan" />
      <Pagination count={10} color="suc" />
      <Pagination count={10} color="war" />
      <Pagination count={10} color="pri" />
      <Pagination count={10} color="sec" />
      <Pagination count={10} color="bg" />
    </div>
  )
}

export const Playground = {}

export function Nice() {
  const [open, setOpen] = React.useState(false)
  return (
    <button onClick={() => setOpen(true)} className="l_f-md">
      {open ? 'Open' : 'CLose'}
    </button>
  )
}
