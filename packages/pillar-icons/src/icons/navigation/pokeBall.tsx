import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pokeBall = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M21 12a9 9 0 1 1-18 0m18 0a9 9 0 1 0-18 0m18 0h-6M3 12h6m6 0a3 3 0 1 1-6 0m6 0a3 3 0 1 0-6 0" />
  </svg>
)

export default pokeBall
