import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const calenderTime = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H3m12-8v4M7 3v4m11 9v2l1 1m3-1a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export default calenderTime
