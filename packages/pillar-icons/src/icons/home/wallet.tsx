import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const wallet = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 8V5a1 1 0 0 0-1-1H6a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h12a1 1 0 0 1 1 1v3M4 6v12a2 2 0 0 0 2 2h12a1 1 0 0 0 1-1v-3m1-4v4h-4a2 2 0 0 1 0-4h4Z" />
  </svg>
)

export default wallet
