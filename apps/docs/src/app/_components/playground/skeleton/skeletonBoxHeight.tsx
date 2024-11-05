import { Skeleton } from '@pillar-ui/core'

export const SkeletonBoxHeight = () => {
  return (
    <>
      <Skeleton height="300px" isLoading={true}>
        <img src="https://picsum.photos/id/300/300/300" alt="" />
      </Skeleton>
      <Skeleton height="200px" isLoading={true}>
        <img src="https://picsum.photos/id/300/300/200" alt="" />
      </Skeleton>
      <Skeleton height="150px" isLoading={true}>
        <img src="https://picsum.photos/id/300/300/150" alt="" />
      </Skeleton>
      <Skeleton height="450px" isLoading={true}>
        <img src="https://picsum.photos/id/300/300/450" alt="" />
      </Skeleton>
    </>
  )
}
