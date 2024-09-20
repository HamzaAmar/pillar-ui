import { Pagination } from '@pillar-ui/core'

export const PaginationSize = () => {
  return (
    <>
      <Pagination count={10} />
      <Pagination count={10} size="2xs" />
      <Pagination count={10} size="xs" />
      <Pagination count={10} size="sm" />
      <Pagination count={10} size="md" />
      <Pagination count={10} size="lg" />
      <Pagination count={10} size="xl" />
      <Pagination count={10} size="2xl" />
    </>
  )
}
