import { Rating } from '@pillar-ui/core'

export const RatingTitle = () => {
  return (
    <>
      <Rating rating={4} hideTitle />
      <Rating rating={4} title="fake label" />
      <Rating rating={4} />
    </>
  )
}
