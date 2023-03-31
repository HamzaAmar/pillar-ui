import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const boxZero = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default boxZero
