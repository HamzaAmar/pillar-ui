import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const wiper = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 18 9.8 5.2M13 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 9l5.5 5.5a5 5 0 0 1 7 0L21 9A12 12 0 0 0 3 9Z" />
  </svg>
)

export default wiper
