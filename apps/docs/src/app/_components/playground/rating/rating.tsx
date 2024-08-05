import { Rating, Paper } from '~/component/core/pillar'
import React from 'react'

export const RatingPlayGround = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Rating rating={3} title="Success!" color="dan" />
      <Rating rating={3} title="Success!" color="war" />
      <Rating rating={3} title="Success!" color="suc" />
      <Rating rating={3} title="Success!" color="pri" />
      <Rating rating={3} title="Success!" color="bg" />
      <Rating rating={3} title="Success!" color="sec" />
    </Paper>
  )
}

export const RatingSizes = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Rating rating={4} size="3xs" />
      <Rating rating={4} size="2xs" />
      <Rating rating={4} size="xs" />
      <Rating rating={4} size="sm" />
      <Rating rating={4} />
      <Rating rating={4} size="lg" />
      <Rating rating={4} size="xl" />
      <Rating rating={4} size="2xl" />
      <Rating rating={4} size="3xl" />
    </Paper>
  )
}

export const RatingRating = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Rating rating={1} />
      <Rating rating={2} />
      <Rating rating={3} />
      <Rating rating={4} />
      <Rating rating={5} />
    </Paper>
  )
}
export const RatingIcon = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Rating icon="heart" rating={4} color="dan" />
      <Rating rating={4} />
    </Paper>
  )
}

export const RatingTitle = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Rating rating={4} hideTitle />
      <Rating rating={4} title="fake label" />
      <Rating rating={4} />
    </Paper>
  )
}

export const RatingColors = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Rating color="dan" rating={4} />
      <Rating color="pri" rating={4} />
      <Rating color="sec" rating={4} />
      <Rating color="suc" rating={4} />
      <Rating color="war" rating={4} />
      <Rating color="bg" rating={4} />
    </Paper>
  )
}
