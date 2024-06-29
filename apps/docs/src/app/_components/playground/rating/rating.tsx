import { Rating, Paper } from '~/component/core/pillar'
import React from 'react'

export const RatingPlayGround = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Rating rating={3} title="Success!" color="danger" />
      <Rating rating={3} title="Success!" color="warning" />
      <Rating rating={3} title="Success!" color="success" />
      <Rating rating={3} title="Success!" color="primary" />
      <Rating rating={3} title="Success!" color="surface" />
      <Rating rating={3} title="Success!" color="secondary" />
    </Paper>
  )
}

export const RatingSizes = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
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
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
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
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Rating icon="heart" rating={4} color="danger" />
      <Rating rating={4} />
    </Paper>
  )
}

export const RatingTitle = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Rating rating={4} hideTitle />
      <Rating rating={4} title="fake label" />
      <Rating rating={4} />
    </Paper>
  )
}

export const RatingColors = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Rating color="danger" rating={4} />
      <Rating color="primary" rating={4} />
      <Rating color="secondary" rating={4} />
      <Rating color="success" rating={4} />
      <Rating color="warning" rating={4} />
      <Rating color="surface" rating={4} />
    </Paper>
  )
}
