import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m8 9 5 5v7M8 9l-5 5v7h5M8 9v12m5 0H8m5 0h8V4a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v6m4-3v0m4 0v0m0 4v0m0 4v0" />
  </svg>
)

export default SvgComponent
