import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

export const G = (props: SvgType) => (
  <Svg {...props}>
    <path d="M18 9a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5v-2h-4" />
  </Svg>
)
