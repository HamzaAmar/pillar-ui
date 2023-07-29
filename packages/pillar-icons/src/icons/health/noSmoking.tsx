import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const noSmoking = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 13v4m8-12v.5a2 2 0 0 0 2 2 2 2 0 0 1 2 2v.5M3 14a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z" />
  </svg>
)

export default noSmoking
