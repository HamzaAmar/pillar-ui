import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const adjustmentsVertical = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 6a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m-4 0H4m12 0h4M6 12a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H4m6 0h10m-5 6a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H4m15 0h1" />{' '}
  </svg>
)

export default adjustmentsVertical
