import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const airTable = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 4h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3V4Zm0 0-4 4-4-4m0 0v16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3ZM4 6.5l8 7.5 8-7.5" />
  </svg>
)

export default airTable
