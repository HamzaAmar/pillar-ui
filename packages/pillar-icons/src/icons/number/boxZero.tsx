import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const boxZero = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0v-4a2 2 0 0 1 2-2Z" />
    <path d="M18 4H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
  </svg>
)

export default boxZero
