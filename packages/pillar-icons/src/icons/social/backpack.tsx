import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const backpack = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 7V6a2 2 0 1 1 4 0v1m-4 8h4m-3-8h2a6 6 0 0 1 6 6v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a6 6 0 0 1 6-6Z" />
  </svg>
)

export default backpack
