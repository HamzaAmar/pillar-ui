import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const hanger = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 6a2 2 0 1 0-4 0c0 1.7.7 3 2 4h0l8 4.4a2 2 0 0 1 1 1.8v.8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-.8a2 2 0 0 1 1-1.8l8-4.4" />
  </svg>
)

export default hanger
