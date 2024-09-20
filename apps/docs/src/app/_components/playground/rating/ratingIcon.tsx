import { Rating } from '@pillar-ui/core'

export const RatingIcon = () => {
  return (
    <>
      <Rating icon="heart" rating={4} color="dan" />
      <Rating rating={4} />
    </>
  )
}
