import { Pagination } from '@pillar-ui/core'
import React from 'react'

export const PaginationVariant = () => {
  return (
    <>
      <Pagination count={10} variant="shadow" />
      <Pagination count={10} variant="solid" />
      <Pagination count={10} variant="mixed" />
      <Pagination count={10} variant="soft" />
      <Pagination count={10} variant="outline" />
      <Pagination count={10} variant="text" />
      <Pagination count={10} variant="link" />
    </>
  )
}
