import { Pagination } from '@pillar-ui/core'

export const PaginationCorner = () => {
  return (
    <>
      <Pagination count={10} />
      <Pagination count={10} corner="full" />
      <Pagination count={10} corner="3" />
      <Pagination count={10} corner="sm" />
      <Pagination count={10} corner="md" />
      <Pagination count={10} corner="lg" />
      <Pagination count={10} corner="xl" />
      <Pagination count={10} corner="circle" />
      <Pagination count={10} corner="full" />
    </>
  )
}
