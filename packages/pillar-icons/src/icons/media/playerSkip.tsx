import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const path = <path d="M4 5v14M20 5v14L8 12l12-7Z" />

export const PlayerSkipBack = (props: SvgType) => <Svg {...props}>{path}</Svg>

export const PlayerSkipForward = (props: SvgType) => (
  <Svg transform={`rotate(${180})`} {...props}>
    {path}
  </Svg>
)
