import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Ethereum = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m6 12 6-9 6 9M6 12l6 9 6-9M6 12l6-3 6 3M6 12l6 2 6-2" />
  </svg>
)

export default Ethereum
