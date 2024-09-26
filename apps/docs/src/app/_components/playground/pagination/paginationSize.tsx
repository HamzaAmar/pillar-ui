import { Pagination } from '@pillar-ui/core'

export const PaginationSize = () => {
  return (
    <>
      <Pagination count={10} />
      <Pagination count={10} gap="2" />
      <Pagination count={10} gap="3" />
      <Pagination count={10} size="sm" />
      <Pagination count={10} gap="5" />
      <Pagination count={10} gap="6" />
      <Pagination count={10} gap="7" />
      <Pagination count={10} gap="8" />
    </>
  )
}
