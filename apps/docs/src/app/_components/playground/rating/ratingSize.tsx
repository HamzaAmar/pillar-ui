import { Rating } from '@pillar-ui/core'

export const RatingSize = () => {
  return (
    <>
      <Rating rating={4} size="3xs" />
      <Rating rating={4} gap="2" />
      <Rating rating={4} gap="3" />
      <Rating rating={4} size="sm" />
      <Rating rating={4} />
      <Rating rating={4} gap="6" />
      <Rating rating={4} gap="7" />
      <Rating rating={4} gap="8" />
      <Rating rating={4} gap="9" />
    </>
  )
}
