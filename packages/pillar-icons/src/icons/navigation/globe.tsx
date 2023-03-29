import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const globe = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6.8 16A8 8 0 1 0 16 3m-4 15v4m-4 0h8m0-12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export default globe
