import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const path = <path d="M4 5v14M20 5v14L8 12l12-7Z" />

export const PlayerSkipBack = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    {path}
  </svg>
)

export const PlayerSkipForward = (props: SvgType) => (
  <svg {...svgProps} transform={`rotate(${180})`} {...props}>
    {path}
  </svg>
)
