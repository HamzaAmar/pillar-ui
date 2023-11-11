import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const coin = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1M12 7v10m-9-5a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </svg>
)
export default coin
