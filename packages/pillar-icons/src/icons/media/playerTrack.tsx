import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const path = <path d="M3 5v14l8-7-8-7ZM14 5v14l8-7-8-7Z" />

export const PlayerTrackNext = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    {path}
  </svg>
)

export const PlayerTrackPrevious = (props: SvgType) => (
  <svg {...svgProps} transform={`rotate(180)`} {...props}>
    {path}
  </svg>
)
