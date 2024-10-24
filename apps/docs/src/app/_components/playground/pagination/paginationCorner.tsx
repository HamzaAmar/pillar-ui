import { Pagination } from '@pillar-ui/core'

export const PaginationCorner = () => {
  return (
    <>
      <Pagination count={10} corner="0" />
      <Pagination count={10} corner="1" />
      <Pagination count={10} corner="2" />
      <Pagination count={10} corner="3" />
      <Pagination count={10} corner="4" />
      <Pagination count={10} corner="5" />
      <Pagination count={10} corner="circle" />
      <Pagination count={10} corner="full" />
    </>
  )
}
